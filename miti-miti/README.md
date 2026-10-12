# Miti-miti

Cuentas entre amigos, mitad y mitad. Inspirado en [Splitwise](https://www.splitwise.com/), pero sin cuentas ni servidores: todo queda en tu navegador.

## Uso

La herramienta arranca en blanco. Si preferís verla en acción, tocá **✨ Ejemplo** (si ya cargaste datos, pide confirmación para no pisarlos).

1. En **👥 Participantes y grupo** poné el nombre del grupo y agregá participantes (nombre obligatorio, email y alias de pago opcionales). Los datos de cada participante se editan en el lugar.
2. Tocá **＋ Agregar movimiento**:
   - **🧾 Gasto**: descripción, monto en `$`, quién pagó y quiénes participan. Por defecto partes iguales (los centavos sobrantes van a los primeros); opcionalmente montos individuales.
   - **💸 Pago**: quién le pagó a quién y cuánto. Admite parciales.
3. Mirá **💰 Saldos** (positivo = a favor, negativo = debe) y **🧾 Liquidación**: la propuesta con menos transferencias.
4. Cada pago sugerido tiene **✉️ Email** (abre tu cliente con asunto y cuerpo listos, con alias si hay) y **📋 Copiar**, más **✓ Registrar pago** para asentarlo de un toque o **💸 Pago parcial** para registrar solo una parte (abre el formulario con todo prellenado para que ajustes el monto).
5. **🔗 Compartir** copia un link con el grupo. **💾 Respaldo del grupo** exporta/importa un `.json` para guardar o mudar de dispositivo. **🗑️ Reiniciar** (en dos toques) borra todo y deja la herramienta en blanco.

## Privacidad

- Todo se calcula en tu navegador; nada viaja a ningún servidor.
- En `localStorage` vive solo la clave `miti-miti`, que también viaja con el Escritorio del índice.
