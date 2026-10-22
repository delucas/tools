#!/usr/bin/env node
/**
 * Ejecuta las pruebas de los bloques `__PURE_START__` / `__PURE_END__`
 * que cada herramienta marca como lógica sin DOM.
 *
 * Sin dependencias: extrae el bloque del index.html y lo evalúa en un
 * contexto aislado de node.
 */

import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { webcrypto } from 'node:crypto';
import { createContext, runInContext } from 'node:vm';

const RAIZ = new URL('..', import.meta.url);
const RAIZ_PATH = fileURLToPath(RAIZ);

// Los valores creados dentro del contexto de vm tienen otro prototipo:
// se normalizan a JSON para poder compararlos con deepEqual.
const plano = (valor) => JSON.parse(JSON.stringify(valor));

const CASOS = {
  algolab: {
    exportar: ['suitById', 'cardKey', 'faceLabel', 'buildCardRequest', 'encodeState', 'decodeState'],
    pruebas: (t) => [
      ['faceLabel: A, J, Q, K', () => {
        assert.equal(t.faceLabel(1), 'A');
        assert.equal(t.faceLabel(11), 'J');
        assert.equal(t.faceLabel(12), 'Q');
        assert.equal(t.faceLabel(13), 'K');
        assert.equal(t.faceLabel(7), '7');
      }],
      ['cardKey y suitById', () => {
        assert.equal(t.cardKey(3, 'hearts'), '3|hearts');
        assert.equal(t.suitById('diamonds').id, 'diamonds');
        assert.equal(t.suitById('no-existe').id, 'hearts');
      }],
      ['buildCardRequest: cartas únicas del palo', () => {
        const { cards, agotadas } = t.buildCardRequest(new Set(), {
          cantidad: 3, min: 1, max: 5, palo: 'hearts',
        });
        assert.equal(cards.length, 3);
        assert.equal(agotadas, false);
        assert.equal(new Set(cards.map(c => c.valor)).size, 3);
        assert.ok(cards.every(c => c.palo === 'hearts' && c.valor >= 1 && c.valor <= 5));
      }],
      ['buildCardRequest: avisa cuando se agota', () => {
        const usadas = new Set([t.cardKey(1, 'hearts'), t.cardKey(2, 'hearts')]);
        const { cards, resto, agotadas } = t.buildCardRequest(usadas, {
          cantidad: 2, min: 1, max: 2, palo: 'hearts',
        });
        assert.equal(cards.length, 0);
        assert.equal(resto, 2);
        assert.equal(agotadas, true);
      }],
      ['buildCardRequest: comodín', () => {
        const { cards } = t.buildCardRequest(new Set(), { cantidad: 5, palo: 'joker' });
        assert.deepEqual(plano(cards), [{ valor: null, palo: 'joker' }]);
      }],
      ['encodeState/decodeState: ida y vuelta', () => {
        const estado = {
          objects: [
            { kind: 'card', x: 10, y: 20, valor: 5, palo: 'hearts', bocaAbajo: true },
            { kind: 'chip', x: 1, y: 2, color: '#00b894' },
            { kind: 'marker', x: 3, y: 4, color: '#2d3436', rot: true },
          ],
        };
        const vuelta = t.decodeState(t.encodeState(estado));
        assert.equal(vuelta.objects.length, 3);
        assert.equal(vuelta.objects[0].valor, 5);
        assert.equal(vuelta.objects[0].palo, 'hearts');
        assert.equal(vuelta.objects[0].bocaAbajo, true);
        assert.equal(vuelta.objects[1].color, '#00b894');
        assert.equal(vuelta.objects[2].rot, true);
      }],
      ['decodeState: rechaza basura', () => {
        assert.equal(t.decodeState(''), null);
        assert.equal(t.decodeState('X1;C,1,2'), null);
        assert.equal(t.decodeState('A1;C,1,2,3'), null);
      }],
    ],
  },

  moneda: {
    exportar: ['randInt', 'resultadoMoneda'],
    pruebas: (t) => [
      ['resultadoMoneda', () => {
        assert.equal(t.resultadoMoneda(1), 'Sí');
        assert.equal(t.resultadoMoneda(2), 'No');
      }],
      ['randInt queda dentro del rango', () => {
        for (let i = 0; i < 200; i++) {
          const dos = t.randInt(2);
          assert.ok(dos === 1 || dos === 2, `randInt(2) devolvió ${dos}`);
          const seis = t.randInt(6);
          assert.ok(seis >= 1 && seis <= 6, `randInt(6) devolvió ${seis}`);
        }
        assert.equal(t.randInt(1), 1);
      }],
    ],
  },

  oracle: {
    exportar: ['elegirRespuesta', 'encodeOracle', 'decodeOracle'],
    pruebas: (t) => [
      ['elegirRespuesta toma los extremos', () => {
        assert.equal(t.elegirRespuesta(() => 0), 'Es seguro');
        assert.equal(t.elegirRespuesta(() => 0.999999), 'Concéntrate y vuelve a preguntar');
      }],
      ['encodeOracle/decodeOracle: ida y vuelta', () => {
        const link = t.encodeOracle('¿Llueve mañana?', 4);
        const vuelta = t.decodeOracle(link);
        assert.deepEqual(plano(vuelta), { pregunta: '¿Llueve mañana?', indice: 4 });
      }],
      ['decodeOracle: decodifica % y acentos una sola vez', () => {
        const vuelta = t.decodeOracle('?p=100%25%20de%20posibilidades&r=1');
        assert.deepEqual(plano(vuelta), { pregunta: '100% de posibilidades', indice: 1 });
      }],
      ['decodeOracle: entradas inválidas', () => {
        assert.equal(t.decodeOracle(''), null);
        assert.equal(t.decodeOracle('?r=99'), null);
        assert.deepEqual(plano(t.decodeOracle('?r=99&p=hola')), { pregunta: 'hola', indice: -1 });
      }],
    ],
  },

  tabletop: {
    exportar: [
      'normalize', 'parseDelimited', 'guessSep', 'parseMarkdown', 'parseAscii',
      'toAscii', 'toLatex', 'toRichTable', 'toHtml', 'generate',
    ],
    pruebas: (t) => [
      ['normalize rellena filas cortas', () => {
        assert.deepEqual(plano(t.normalize([['a'], ['b', 'c']])), [['a', ''], ['b', 'c']]);
      }],
      ['parseDelimited respeta comillas y saltos', () => {
        assert.deepEqual(plano(t.parseDelimited('a,b\n1,2', ',')), [['a', 'b'], ['1', '2']]);
        assert.deepEqual(
          plano(t.parseDelimited('a,b\n"x, y",2', ',')),
          [['a', 'b'], ['x, y', '2']],
        );
        assert.deepEqual(
          plano(t.parseDelimited('a,b\n"di ""hola""",2', ',')),
          [['a', 'b'], ['di "hola"', '2']],
        );
      }],
      ['guessSep elige ; o ,', () => {
        assert.equal(t.guessSep('a;b;c'), ';');
        assert.equal(t.guessSep('a,b,c'), ',');
        assert.equal(t.guessSep('"a;b",c'), ',');
      }],
      ['parseMarkdown y parseAscii', () => {
        assert.deepEqual(
          plano(t.parseMarkdown('| A | B |\n|---|---|\n| 1 | 2 |')),
          { rows: [['A', 'B'], ['1', '2']], hasHeader: true },
        );
        assert.deepEqual(
          plano(t.parseAscii('| A | B |\n| 1 | 2 |')),
          { rows: [['A', 'B'], ['1', '2']], hasHeader: false },
        );
      }],
      ['toAscii conserva el contenido', () => {
        const salida = t.toAscii([['A', 'B'], ['1', '2']], true);
        assert.match(salida, /\| A \| B \|/);
        assert.match(salida, /\+[-=+]+\+/);
      }],
      ['toLatex escapa caracteres especiales', () => {
        const salida = t.toLatex([['a_b', '50%']]);
        assert.match(salida, /a\\_b/);
        assert.match(salida, /50\\%/);
      }],
      ['toHtml escapa HTML', () => {
        assert.match(t.toHtml([['<b>x</b>']], false), /&lt;b&gt;x&lt;\/b&gt;/);
      }],
      ['toRichTable genera tabla', () => {
        assert.match(t.toRichTable([['A'], ['1']], true), /<table[\s\S]*<th[\s\S]*<td/);
      }],
      ['generate cubre los tabs', () => {
        assert.match(t.generate('md', [['A'], ['1']], true), /\| A \|/);
        assert.match(t.generate('csv-c', [['A'], ['1']], true), /^A\n1$/);
        assert.match(t.generate('latex', [['A']], true), /\\begin\{tabular\}/);
      }],
    ],
  },
};

const errores = [];
const herramientas = [];

for (const [slug, caso] of Object.entries(CASOS)) {
  const html = readFileSync(new URL(`${slug}/index.html`, RAIZ), 'utf-8');
  if (!html.includes('__PURE_START__')) {
    errores.push(`${slug}: tiene pruebas registradas pero no marca un bloque __PURE_START__`);
    continue;
  }
  if ((html.match(/__PURE_START__/g) || []).length !== (html.match(/__PURE_END__/g) || []).length) {
    errores.push(`${slug}: __PURE_START__ sin su __PURE_END__`);
    continue;
  }
  const bloque = html.match(/\/\/ __PURE_START__[\s\S]*?\/\/ __PURE_END__/);
  if (!bloque) {
    errores.push(`${slug}: no se pudo extraer el bloque __PURE_START__`);
    continue;
  }

  let api;
  try {
    const contexto = createContext({ crypto: webcrypto, console, URLSearchParams });
    const codigo = `${bloque[0]}\n;globalThis.__pure = { ${caso.exportar.join(', ')} };`;
    runInContext(codigo, contexto, { filename: `${slug}/index.html` });
    api = contexto.__pure;
  } catch (error) {
    errores.push(`${slug}: el bloque puro no se evalúa (${error.message})`);
    continue;
  }

  herramientas.push(slug);
  for (const [descripcion, prueba] of caso.pruebas(api)) {
    try {
      prueba();
    } catch (error) {
      errores.push(`${slug}: ${descripcion} -> ${error.message}`);
    }
  }
}

// Ningún bloque marcado puede quedar sin pruebas.
for (const entrada of readdirSync(RAIZ_PATH, { withFileTypes: true })) {
  if (!entrada.isDirectory()) continue;
  let html = '';
  try {
    html = readFileSync(join(RAIZ_PATH, entrada.name, 'index.html'), 'utf-8');
  } catch {
    continue;
  }
  if (html.includes('__PURE_START__') && !CASOS[entrada.name]) {
    errores.push(`${entrada.name}: bloque __PURE_START__ sin pruebas registradas en scripts/test-pure.mjs`);
  }
}

if (errores.length) {
  for (const error of errores) console.error(`FALTA: ${error}`);
  process.exit(1);
}

console.log(`OK: pruebas puras en ${herramientas.length} herramientas (${herramientas.join(', ')})`);
