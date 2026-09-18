# ✨ @itsliaaa/starcore

[![Logo](https://files.catbox.moe/tfi9tr.png)](https://www.npmjs.com/package/@itsliaaa/starcore)

<p align="center">
   A Baileys wrapper for WhatsApp bot development with multi-session support, built-in stores, and more.
   <br><br>
   <a href="https://www.npmjs.com/package/@itsliaaa/starcore">
      <img src="https://img.shields.io/npm/v/@itsliaaa/starcore?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://www.npmjs.com/package/@itsliaaa/starcore">
      <img src="https://img.shields.io/npm/dm/@itsliaaa/starcore?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://github.com/itsliaaa/starcore">
      <img src="https://img.shields.io/github/stars/itsliaaa/starcore?style=for-the-badge&logo=github"/>
   </a>
   <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=for-the-badge"/>
   </a>
   <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge"/>
   </a>
   <a href="#">
      <img src="https://img.shields.io/badge/ESM-only?logo=javascript&labelColor=yellow&logoColor=black&style=for-the-badge"/>
   </a>
</p>

☕ For donation: [Saweria](https://saweria.co/itsliaaa)

### ⚠️ Notice

This project is still in development and may contain bugs or incomplete features. If you encounter any issues, feel free to open an issue [**here**](https://github.com/itsliaaa/starcore/issues)

### ⚡ Quick Start

1. Install the packages

```bash
npm i @itsliaaa/starcore qr file-type
```

2. Create the client, store and handle events

```javascript
import Client, { createSqliteStore } from '@itsliaaa/starcore'

/* createSqliteStore is compatible with bun:sqlite, node:sqlite, and better-sqlite3 */
const store = createSqliteStore()

const client = new Client({
  sessionId: 'main',
  store
})

// Display QR code for authentication
client.on('qr', ({ ascii }) => {
  console.log('📷 Scan this QR code')
  console.log(ascii)
})

// Called when authentication is successful
client.on('auth_paired', ({ id }) => {
  console.log('☁️ Paired as', id)
})

// Handle incoming messages
client.on('message', (m) => {
  const { chat, text } = m

  if (text === 'ping') {
    client.sendMessage(chat, '🏓 *Pong!*', { quote: m })
  }
})

// Connect to WhatsApp
await client.connect()
```

> 📕 Note: If no `store` is provided, the client automatically fallback to in-memory store. The in-memory store is not persistent and will be cleared when the process exits.

Run the script and scan the QR code displayed in your terminal. Once the client is paired, incoming messages containing `ping` will receive a `🏓 *Pong!*` reply.

### ⚙️ Configurations

```javascript
const DEFAULT_CONFIG = {
  store: null,
  sessionId: null,
  phoneNumber: null,
  pairingCode: null,
  reconnect: {
    enabled: true,
    maxAttempts: 10,
    delayMs: 3000,
    resetAfterReconnectMs: 30000
  },
  linkPreview: {
    enabled: true,
    timeoutMs: 1000,
    uploadHqThumbnail: false
  },
  message: {
    autoRead: false,
    updatePresence: false,
    decryptAddon: true,
    messageIdPrefix: 'STARCORE',
    newsletterAnnotation: null
  },
  media: {
    timeoutMs: 60000,
    detectDuration: true,
    generateThumbnail: true,
    generateWaveform: true,
    normalizeAudio: true,
    ffmpegPath: 'ffmpeg',
    ffprobePath: 'ffprobe',
    cache: null
  }
}
```

### 📡 Event References

```javascript
client.on('connection', (ctx) => console.log('=> CONNECTION', ctx))
client.on('qr', (ctx) => console.log('=> QR', ctx))
client.on('pairing_code', (ctx) => console.log('=> PAIRING_CODE', ctx))
client.on('auth_paired', (ctx) => console.log('=> AUTH_PAIRED', ctx))
client.on('ready', () => console.log('=> SOCKET IS READY'))
client.on('message', (ctx) => console.log('=> MESSAGE', ctx))
client.on('message.addon', (ctx) => console.log('=> MESSAGE.ADDON', ctx))
client.on('message.edit', (ctx) => console.log('=> MESSAGE.EDIT', ctx))
client.on('message.delete', (ctx) => console.log('=> MESSAGE.DELETE', ctx))
client.on('message.stub', (ctx) => console.log('=> MESSAGE.STUB', ctx))
client.on('group.add', (ctx) => console.log('=> GROUP.ADD', ctx))
client.on('group.remove', (ctx) => console.log('=> GROUP.REMOVE', ctx))
client.on('group.promote', (ctx) => console.log('=> GROUP.PROMOTE', ctx))
client.on('group.demote', (ctx) => console.log('=> GROUP.DEMOTE', ctx))
client.on('group.join_request', (ctx) => console.log('=> GROUP.JOIN_REQUEST', ctx))
client.on('poll_update', (ctx) => console.log('=> POLL_UPDATE', ctx))
client.on('event_response', (ctx) => console.log('=> EVENT_RESPONSE', ctx))
client.on('call', (ctx) => console.log('=> CALL', ctx))
client.on('presence', (ctx) => console.log('=> PRESENCE', ctx))
```