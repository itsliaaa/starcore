# ✨ @itsliaaa/starcore

[![Logo](https://files.catbox.moe/tfi9tr.png)](https://www.npmjs.com/package/@itsliaaa/starcore)

<p align="center">
   A lightweight framework built on top of Baileys for WhatsApp bot development.
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

> ⚠️ **Minimum Baileys Version**: `7.0.0-rc10` or higher.

### 📌 Highlights

- Improved `createParticipantNodes()` by introducing yielding, preventing potential freezes during participant node generation.
- Enhanced `relayMessage()` with newsletter support and compatibility for sending additional binary payloads.
- Adapted `prepareWAMessageMedia()` to support media delivery to newsletters.
- Added support for sending `stickerPackMessage` through `sendStickerPack()`.
- Extended support for multiple interactive and button-based message types.
- Introduced `newsletterSubscribed()` to retrieve information about all newsletters the account is currently subscribed to.
- `secretEncryptedMessage` is transparently decrypted into `editedMessage`.
- `vote` in `pollUpdateMessage` is transparently decrypted to reveal the user's selected poll option(s).

Built with a focus on simplicity, and better compatibility with modern WhatsApp features.

### 📋 Table of Contents

- [📌 Highlights](#-highlights)
- [📥 Installations](#-installations)
   - [📄 Via `package.json`](#-via-packagejson)
   - [⌨️ Via terminal](#%EF%B8%8F-via-terminal)
   - [🧩 Import (ESM & CJS)](#-import-esm--cjs)
- [📄 Quick Start](#-quick-start)
- [⚙️ Advanced Usage](#%EF%B8%8F-advanced-usage)
   - [🧳 Environments](#-environments)
   - [🗄️ Managing Store](#%EF%B8%8F-store-data)
   - [🗑️ Temporary Folder](#%EF%B8%8F-temporary-folder)
- [📡 Events Reference](#-events-reference)
   - [📄 Message Event Metadata](#-message-event-metadata)
- [👥 Find User ID](#-find-user-id)
- [📨 Sending Messages](#-sending-messages)
   - [🔠 Text](#-text)
   - [📰 Link Preview](#-link-preview)
   - [😄 Reaction](#-reaction)
   - [📂 Media](#-media)
   - [⚪ PTV](#-ptv)
   - [📃 Sticker](#-sticker)
   - [📦 Sticker Pack](#-sticker-pack)
   - [👤 Contact](#-contact)
   - [🖼️ Album](#%EF%B8%8F-album)
   - [📊 Poll](#-poll)
   - [📈 Poll Result](#-poll-result)
   - [🗄️ Interactive](#%EF%B8%8F-interactive)
   - [🎠 Carousel](#-carousel)
   - [🔘 Legacy Button](#-legacy-button)
   - [📋 Legacy List](#-legacy-list)
   - [✨ Rich](#-rich)
   - [🗒️ Copy & Forward](#%EF%B8%8F-copy--forward)
   - [🎞️ Status Mention](#%EF%B8%8F-status-mention)
   - [👥 Group Status](#-group-status)
- [♻️ Modify Messages](#%EF%B8%8F-modify-messages)
   - [🗑️ Delete Messages](#%EF%B8%8F-delete-messages)
   - [✏️ Edit Messages](#%EF%B8%8F-edit-messages)
- [⚙️ Baileys Features](#%EF%B8%8F-baileys-features)
   - [🔑 Request Custom Pairing Code](#-request-custom-pairing-code)
   - [📣 Newsletter Management](#-newsletter-management)
   - [👥 Group Management](#-group-management)
   - [👥 Community Management](#-community-management)
   - [👤 Profile Management](#-profile-management)
   - [🛒 Business Management](#-business-management)
   - [🔐 Privacy Management](#-privacy-management)
   - [📡 Baileys Events Reference](#-baileys-events-reference)
- [🗳️ Database](#%EF%B8%8F-database)
   - [📎 JSON](#-json)
   - [📎 SQLite](#-sqlite)
- [🧩 Extend](#-extend)
- [🌐 Request](#-request)
- [📚 Exported Modules](#-exported-modules)
- [🚀 Try the Bot](#-try-the-bot)
- [📣 Credits](#-credits)

### 📥 Installations

> [!IMPORTANT]
> [`@itsliaaa/starcore`](https://www.npmjs.com/package/@itsliaaa/starcore) does **NOT** install Baileys automatically.
>
> You must install a compatible version of Baileys manually before using this package.

#### 📄 Via `package.json`

```json
# NPM
"dependencies": {
   "@itsliaaa/starcore": "latest",
   "baileys": "^7.0.0-rc13"
}

# GitHub
"dependencies": {
   "@itsliaaa/starcore": "github:itsliaaa/starcore",
   "baileys": "^7.0.0-rc13"
}
```

#### ⌨️ Via terminal

```bash
# NPM
npm i @itsliaaa/starcore@latest baileys@7.0.0-rc13

# GitHub
npm i @itsliaaa/starcore@github:itsliaaa/starcore baileys@7.0.0-rc13
```

#### 🧩 Import (ESM & CJS)

```javascript
// --- ESM
import { Client } from '@itsliaaa/starcore'

// --- CJS (tested and working on Node.js 24 ✅)
const { Client } = require('@itsliaaa/starcore')

// --- If "require()" fails on CJS, you can use a dynamic import (IIFE)
;(async () => {
   try {
      const { Client } = await import('@itsliaaa/starcore')
      const client = new Client({
         // ...options
      })
   }
   catch (error) {
      console.error('❌ Failed to import', ':', error)
   }
})()
```

### 📄 Quick Start

```javascript
import { Client } from '@itsliaaa/starcore'

const client = new Client({
   auth: {
      name: 'session',
      pairingCode: true, // Turn "false" to use QR Code
      phoneNumber: '6281111111111'
   }
})

client.on('message', (ctx) => {
   if (ctx.body === 'hello') {
      ctx.m.reply('👋 Hello there!')
   }
})
```

> [!IMPORTANT]
> The underlying Baileys socket instance is available through `client.sock`.

```javascript
const client = new Client({ ... })
const sock = client.sock
```

### ⚙️ Advanced Usage

```javascript
import { Client } from '@itsliaaa/starcore'

const client = new Client({
   auth: {
      name: 'session',
      pairingCode: true,
      phoneNumber: '6281111111111',
      customCode: 'starcore',
      type: 'json' // 'json' | 'sqlite'
   },
   isBotMessageId: (id) =>
      typeof id === 'string' && id.includes('3EB0'),
   messageIdPrefix: 'STARCORE',
   watchPath: './plugins', // Default: null
   updatePresence: true, // Default: true
   updateProtoOnStartup: true, // Default: false
   autoFollowNewsletter: '1211111111111@newsletter', // String | String[] | false
   newsletterAnnotation: {
      newsletterJid: '1211111111111@newsletter',
      newsletterName: '@itsliaaa/starcore',
      contentType: 1
   } // IForwardedNewsletterMessageInfo | false
}, {
   // Baileys socket configuration
   shouldIgnoreJid: (jid) =>
      typeof jid === 'string' && jid.endsWith('bot')
})
```

#### 🧳 Environments

The following environment variables are used by default. Override them with [`dotenv`](https://www.npmjs.com/package/dotenv) when needed.

```ini
# .env
FFMPEG_PATH="ffmpeg"
TEMPORARY_PATH="temp"
TZ="Asia/Jakarta"
```

#### 🗄️ Managing Store

Manually load and save store data.

```javascript
client.on('ready', ({ store }) => {
   store.readFromFile()

   setInterval(async () => {
      try {
         await store.writeToFile()
      }
      catch (error) {
         console.error('❌ An unexpected error occurred when saving store', ':', error)
      }
   }, 600_000)
})
```

#### 🗑️ Temporary Folder

Since `0.0.0-alpha.3`, temporary files are no longer cleaned up automatically. Implement your own cleanup routine if required.

```javascript
import { readdir, unlink } from 'fs/promises'
import { join } from 'path'

setInterval(async () => {
   try {
      const temporaryFiles = await readdir(process.env.TEMPORARY_PATH)

      if (temporaryFiles.length) {
         for (const fileName of temporaryFiles) {
            const filePath = join(process.env.TEMPORARY_PATH, fileName)
            await unlink(filePath)
         }
      }

      console.log('🗑️ Cleaned up temp folder')
   }
   catch (error) {
      console.error('❌ Failed to clean temp folder', ':', error)
   }
}, 300_000)
```

### 📡 Events Reference

```javascript
client.on('ready', console.log)
client.on('message', console.log)
client.on('message.edit', console.log)
client.on('message.delete', console.log)
client.on('poll', console.log)
client.on('status', console.log)
client.on('group.add', console.log)
client.on('group.promote', console.log)
client.on('group.demote', console.log)
client.on('group.remove', console.log)
client.on('group.request', console.log)
client.on('label.update', console.log)
client.on('caller', console.log)
client.on('presence', console.log)
```

#### 📄 Message Event Metadata

The following example shows the payload received from the `message` event.

This event is the primary source of incoming messages and includes commonly used information such as chat ID, sender, message type, quoted message, mentions, and helper methods.

```javascript
{
  m: {
    key: {
      remoteJid: '120111111111111111@g.us',
      remoteJidAlt: undefined,
      remoteJidUsername: undefined,
      fromMe: false,
      id: 'AC1908CA012689BB9F468E6B4478EBAB',
      participant: '1211111111111@lid',
      participantAlt: '6281111111111@s.whatsapp.net',
      participantUsername: undefined,
      addressingMode: 'lid'
    },
    category: undefined,
    messageTimestamp: 1782264500,
    pushName: '‏liaaa',
    broadcast: false,
    message: Message {
      extendedTextMessage: [ExtendedTextMessage],
      messageContextInfo: [MessageContextInfo]
    },
    id: 'AC1908CA012689BB9F468E6B4478EBAB',
    chat: '120111111111111111@g.us',
    sender: '6281111111111@s.whatsapp.net',
    senderLid: '1211111111111@lid',
    device: 'android',
    fromMe: false,
    isBot: false,
    isGroup: true,
    type: 'extendedTextMessage',
    msg: ExtendedTextMessage {
      endCardTiles: [],
      text: '@itsliaaa/starcore',
      previewType: 0,
      contextInfo: [ContextInfo],
      inviteLinkGroupTypeV2: 0
    },
    quoted: {
      text: '@itsliaaa/starcore',
      contextInfo: [ContextInfo],
      id: 'AC15B9E93FABF8C9EA230B9093D57OCR',
      chat: '120111111111111111@g.us',
      sender: '6281111111111@s.whatsapp.net',
      senderLid: '1211111111111@lid',
      device: 'android',
      fromMe: false,
      isBot: false,
      isGroup: true,
      type: 'conversation',
      body: '@itsliaaa/starcore',
      pushName: '‏liaaa',
      fakeObj: [Object],
      mentionedJid: [],
      expiration: 86400,
      reply: [Function (anonymous)],
      react: [Function (anonymous)]
    },
    body: '@itsliaaa/starcore',
    mentionedJid: [],
    expiration: 86400,
    reply: [Function (anonymous)],
    react: [Function (anonymous)]
  },
  body: '@itsliaaa/starcore',
  prefixes: [ '.', '#', '/', '!' ],
  prefix: '',
  command: '@itsliaaa/starcore',
  args: [],
  text: ''
}
```

### 👥 Find User ID

Quickly resolve a user's `JID` and retrieve both `PN` and `LID` in a synchronous function.

```javascript
// Accepts either @s.whatsapp.net or @lid
const jidLid = '6281111111111@s.whatsapp.net'

const result = sock.findUserId(jidLid)

// --- Success
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: '1211111111111@lid'
// }

// --- Not found
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: undefined // or null
// }
```

### 📨 Sending Messages

#### 🔠 Text

```javascript
sock.sendText(jid, '👋🏻 Hello', m, {
   mentionAll: false, // Optional
   mentions: ['1211111111111@lid', '6281111111111@s.whatsapp.net'], // Optional
})
```

#### 📰 Link Preview

```javascript
sock.sendAdText(jid, '👆🏻 Check it out!', m, {
   thumbnailUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   title: '🌱 @itsliaaa/starcore',
   description: 'Underrated Baileys Wrapper',
   previewType: 0, // Or use 1 for video playback in the link preview
   thumbnail: fs.readFileSync('./path/to/image.jpg') // Buffer or url
})

// --- Send a text message with a large link preview and favicon
sock.sendAdText(jid, '👆🏻 Check it out!', m, {
   thumbnailUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   title: '✨ @itsliaaa/starcore',
   description: 'Underrated Baileys Wrapper',
   previewType: 0,
   thumbnail: fs.readFileSync('./path/to/image.jpg'),
   favicon: fs.readFileSync('./path/to/tiny-image.png'), // Optional, Buffer or url
   largeThumbnail: true, // Must true if want to send large preview
   width: 720,
   height: 480
})
```

#### 😄 Reaction

```javascript
sock.sendReact(jid, '✨', m.key)
```

#### 📂 Media

```javascript
sock.sendMedia(jid, bufferOrUrl, m, {
   mime: 'image/jpeg', // Optional, will automatically detect the mime
   document: false, // Optional, force send as document
   ptv: false, // Optional, force send as PTV
   gif: false, // Optional
   ptt: false // Optional
})
```

#### ⚪ PTV

```javascript
sock.sendPtv(jid, bufferOrUrl, m)
```

#### 📃 Sticker

```javascript
sock.sendSticker(jid, bufferOrUrl, m, {
   packName: '@itsliaaa/starcore',
   packPublisher: 'by Lia Wynn 🌱',
   isAiSticker: true, // Optional
   isAvatar: false, // Optional
   premium: 1 // Optional
})
```

#### 📦 Sticker Pack

```javascript
sock.sendStickerPack = async (jid, [bufferOrUrl, bufferOrUrl], m, {
   cover: bufferOrUrl,
   name: '📦 Sticker Pack',
   publisher: 'GitHub: itsliaaa',
   description: '✨ itsliaaa/starcore'
})
```

#### 👤 Contact

```javascript
sock.sendContact(jid, [{
   name: 'Lia Wynn',
   org: '🛎️ Waitress',
   email: 'my-email@gmail.com',
   website: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   location: 'Jakarta',
   other: '❤️ Simplified WhatsApp API',
   number: '6281111111111'
}, {
   name: '❤️ My Big Brother',
   org: '👥 Siblings',
   email: 'his-email@gmail.com',
   website: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   location: 'Jakarta',
   other: '❤️ Simplified WhatsApp API',
   number: '6281111111111'
}], m)
```

#### 🖼️ Album

```javascript
sock.sendAlbum(jid, [{
   media: bufferOrUrl,
   caption: 'Image'
}, {
   media: bufferOrUrl,
   caption: 'Video'
}], m)
```

#### 📊 Poll

```javascript
// --- Regular poll message
sock.sendPoll(jid, [
   '✨ Yes', '💀 No'
], m, {
   name: '🔥 Is it good?',
   selectableCount: 1,
   toAnnouncementGroup: false,
   endDate: Date.now() + 28_800_000, // Optional
   hideVoter: false, // Optional
   canAddOption: false // Optional
})

// --- Quiz (only for newsletter)
sock.sendQuiz('1211111111111@newsletter', [
   '✨ Yes', '💀 No'
], m, {
   name: '🔥 Quiz!',
   correctAnswer: '✨ Yes'
})
```

#### 📈 Poll Result

```javascript
// --- Regular poll result message
sock.sendPollResult(jid, '📈 Poll Result', [{
   name: '🔥 Fire',
   voteCount: 133
}, {
   name: '❤️ Love it',
   voteCount: 18
}], m)

// --- Quiz result message
sock.sendQuizResult(jid, '🏆 Quiz Result', [{
   name: '🔥 Fire',
   voteCount: 133
}, {
   name: '❤️ Love it',
   voteCount: 18
}], m)
```

#### 🗄️ Interactive

```javascript
sock.sendInteractive(jid, [{
   text: '👋🏻 Greeting',
   id: '#Greeting',
   icon: 'review' // Optional
}, {
   text: '📞 Call',
   call: '6281111111111'
}, {
   text: '📋 Copy',
   copy: '@itsliaaa/starcore'
}, {
   text: '🌐 Source',
   url: 'https://www.npmjs.com/package/@itsliaaa/starcore',
   useWebView: true, // Optional
   webViewPresentation: null // Optional
}, {
   text: '📋 Select',
   sections: [{
      title: '✨ Section 1',
      rows: [{
         header: '',
         title: '🏷️ Coupon',
         description: '',
         id: '#CouponCode'
      }]
   }, {
      title: '✨ Section 2',
      highlight_label: '🔥 Popular',
      rows: [{
         header: '',
         title: '💭 Secret Ingredient',
         description: '',
         id: '#SecretIngredient'
      }]
   }],
   icon: 'default' // Optional
}], m, {
   media: bufferOrUrl,
   caption: '🗄️ Interactive Message',
   footer: '@itsliaaa/starcore',
   audioFooter: '/path/to/audio.mp3', // Optional
   ptt: false, // Optional, applied when "audioFooter" is set
   optionText: '👉🏻 Select Options', // Optional, wrap all native flow into a single list
   optionTitle: '📄 Select Options', // Optional
   offerText: '🏷️ Newest Coupon!', // Optional, add an offer into message
   offerCode: '@itsliaaa/starcore', // Optional
   offerUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore', // Optional
   offerExpiration: Date.now() + 3_600_000, // Optional
   asTemplate: false // Optional, wrap the interactive message as template
})
```

#### 🎠 Carousel

```javascript
sock.sendCarousel(jid, [{
   media: bufferOrUrl,
   caption: '🖼️ Image 1',
   footer: '🏷️️ Pinterest',
   nativeFlow: [{
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/@itsliaaa/starcore',
      useWebview: true
   }]
}, {
   media: bufferOrUrl,
   caption: '🖼️ Image 2',
   footer: '🏷️ Pinterest',
   offerText: '🏷️ New Coupon!',
   offerCode: '@itsliaaa/starcore',
   offerUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore',
   offerExpiration: Date.now() + 3_600_000,
   nativeFlow: [{
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/@itsliaaa/starcore'
   }]
}, {
   media: bufferOrUrl,
   caption: '🖼️ Image 3',
   footer: '🏷️ Pinterest',
   optionText: '👉🏻 Select Options',
   optionTitle: '👉🏻 Select Options',
   offerText: '🏷️ New Coupon!',
   offerCode: '@itsliaaa/starcore',
   offerUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore',
   offerExpiration: Date.now() + 3_600_000,
   nativeFlow: [{
      text: '🛒 Product',
      id: '#Product',
      icon: 'default'
   }, {
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/@itsliaaa/starcore'
   }]
}], m, {
   text: '🎠 Carousel Message',
   footer: '@itsliaaa/starcore'
})
```

#### 🔘 Legacy Button

```javascript
// --- Regular buttons message
sock.sendLegacyButton(jid, [{
   text: '👋🏻 SignUp',
   id: '#SignUp'
}], m, {
   text: '👆🏻 Buttons!',
   footer: '@itsliaaa/starcore',
   viewOnce: false // Optional, change to "true" if want proper render on WhatsApp Web
})

// --- Buttons with Media & List
sock.sendLegacyButton(jid, [{
   text: '👋🏻 Rating',
   id: '#Rating'
}, {
   text: '📋 Select',
   sections: [{
      title: '✨ Section 1',
      rows: [{
         header: '',
         title: '💭 Secret Ingredient',
         description: '',
         id: '#SecretIngredient'
      }]
   }, {
      title: '✨ Section 2',
      highlight_label: '🔥 Popular',
      rows: [{
         header: '',
         title: '🏷️ Coupon',
         description: '',
         id: '#CouponCode'
      }]
   }]
}], m, {
   media: bufferOrUrl,
   caption: '👆🏻 Buttons and List!',
   footer: '@itsliaaa/starcore'
})
```

#### 📋 Legacy List

> [!NOTE]
> This message is only works in private chat (`@s.whatsapp.net`)

```javascript
// --- Regular legacy list message
sock.sendLegacyList(jid, [{
   title: '🚀 Menu 1',
   rows: [{
      title: '✨ AI',
      description: '',
      rowId: '#AI'
   }]
}, {
   title: '🌱 Menu 2',
   rows: [{
      title: '🔍 Search',
      description: '',
      rowId: '#Search'
   }]
}], m, {
   text: '📋 List!',
   footer: '@itsliaaa/starcore',
   buttonText: '📋 Select',
   title: '👋🏻 Hello'
})

// --- Product list message
client.sendLegacyList(m.chat, [{
   title: '📄 Section #1',
   products: [{
      productId: '177878345044'
   }, {
      productId: '607964531532'
   }]
}, {
   title: '📋 Section #2',
   products: [{
      productId: '506965808593'
   }, {
      productId: '676909529293'
   }]
}], m, {
   text: '🛍️ Product List!',
   footer: '@itsliaaa/starcore',
   buttonText: '📋 See Products',
   image: bufferOrUrl,
   headerProductId: '656988410262',
   businessOwnerJid: '0@s.whatsapp.net'
})
```

#### ✨ Rich

```javascript
sock.sendRich(jid, [{
   text: '# ✨ @itsliaaa/starcore\n\n---\n',
}, {
   language: 'javascript',
   code: `console.log("Hello World")`
}, {
   title: 'The Table',
   table: [{
      isHeading: true,
      items: ['', 'Node.js', 'Bun', 'Deno']
   }, {
      isHeading: false,
      items: ['Engine', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)']
   }, {
      isHeading: false,
      items: ['Performance', '4/5', '5/5', '4/5']
   }]
}, {
   video: 'https://path-to-video.com/',
   thumbnailUrl: 'https://path-to-tiny-image.com/',
   mime: 'video/mp4',
   fileLength: 13_603,
   duration: 60
}, {
   image: 'https://path-to-image.com/',
   mime: 'image/jpeg'
}, {
   reels: [{
      reelUrl: 'https://path-to-web.com/',
      thumbnailUrl: 'https://path-to-image.com/',
      creator: 'Lia Wynn',
      avatarUrl: 'https://path-to-tiny-image.com/',
      title: 'Simple Baileys Wrapper',
      likesCount: 1,
      sharesCount: 1,
      viewCount: 1,
      source: 'https://path-to-web.com/',
      isVerified: true
   }]
}, {
   posts: [{
      caption: 'Lightweight Baileys Wrapper',
      title: '',
      subtitle: '',
      creator: 'Lia Wynn',
      avatarUrl: 'https://path-to-tiny-image.com/',
      thumbnailUrl: 'https://path-to-image.com/',
      likesCount: 1,
      commentsCount: 1,
      sharesCount: 1,
      postUrl: 'https://path-to-web.com/',
      deepLink: '',
      footerLabel: '',
      footerIcon: '',
      sourceApp: 'FACEBOOK',
      orientation: 'LANDSCAPE',
      type: 'IMAGE',
      isVerified: true,
      isCarousel: false
   }]
}, {
   title: 'Starseed Premium Script',
   brand: 'Starseed',
   price: 'Rp 150.000',
   salePrice: 'Rp 75.000',
   productUrl: 'https://path-to-web.com/',
   imageUrl: 'https://path-to-image.com/',
   additionalImages: [{
      url: 'https://path-to-tiny-image.com/'
   }] // Optional
}, {
   products: [{
      title: 'Starseed Premium Script',
      brand: 'Starseed',
      price: 'Rp 150.000',
      salePrice: 'Rp 75.000',
      productUrl: 'https://path-to-web.com/',
      imageUrl: 'https://path-to-image.com/'
   }, {
      title: 'Self-Bot Script',
      brand: 'Starseed',
      price: 'Rp 50.000',
      productUrl: 'https://path-to-web.com/',
      imageUrl: 'https://path-to-image.com/',
      additionalImages: [{
         url: 'https://path-to-tiny-image.com/'
      }]
   }]
}, {
   latex: 'https://quicklatex.com/cache3/82/ql_0676ade0cd04eda37aeb3d0bcd427682_l3.png',
   expression: 'x^2 + 2x + 1',
   mime: 'image/png',
   width: 603,
   height: 111,
   fontHeight: 83.5,
   padding: 15
}, {
   text: '- Citation:',
   entities: [{
      title: 'Example of Citation',
      citationUrl: 'https://wa.me/0',
      displayName: '@itsliaaa/starcore'
   }]
}, {
   text: '- Inline Link:',
   entities: [{
      inlineUrl: 'https://wa.me/0',
      displayName: '@itsliaaa/starcore',
      isTrusted: true
   }]
}, {
   text: '- LaTeX:',
   entities: [{
      expression: 'x^2 + 2x + 1',
      latex: 'https://quicklatex.com/cache3/82/ql_0676ade0cd04eda37aeb3d0bcd427682_l3.png',
      width: 603,
      height: 111,
      fontHeight: 83.5,
      padding: 15
   }]
}, {
   suggestion: '@itsliaaa/starcore'
}, {
   suggestions: ['@itsliaaa/starcore', 'Baileys Wrapper', 'Baileys']
}, {
   suggestions: ['@itsliaaa/starcore', 'Rich Response', 'Scroll Layout'],
   canScroll: true
}, {
   tip: '@itsliaaa/starcore'
}, {
   searchResults: [{
      displayName: 'Simple Baileys Wrapper',
      sourceUrl: 'https://path-to-web.com/',
      faviconUrl: 'https://path-to-tiny-image.com/',
      mime: 'image/jpeg' // Optional, the mime type of favicon
   }]
}], m, {
   notify: false, // Optional
   disclaimerText: 'Example Usage of sendRich()'
})
```

#### 🗒️ Copy & Forward

```javascript
sock.sendCopyMessage(jid, m, {
   forwardingScore: 1, // Optional
   quoted: m // Optional
})
```

#### 🎞️ Status Mention

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendStatus([jid], {
   text: '👋🏻 Hello!',
   font: 0,
   textColor: '#FFFFFF', // Optional
   backgroundColor: '#FF0000' // Optional
}, {
   mention: false, // Optional
   closeFriends: {
      name: '@itsliaaa/starcore',
      emoji: '✨'
   } // Optional
})
```

#### 👥 Group Status

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendGroupStatus(jid, {
   text: '👋🏻 Hello!',
   font: 0,
   textColor: '#FFFFFF', // Optional
   backgroundColor: '#000000' // Optional
}, {
   closeFriends: {
      name: '@itsliaaa/starcore',
      emoji: '✨'
   } // Optional
})
```

### ♻️ Modify Messages

#### 🗑️ Delete Messages

```javascript
sock.sendMessage(jid, {
   delete: m.key
})
```

#### ✏️ Edit Messages

```javascript
// --- Edit plain text
sock.sendMessage(jid, {
   text: '✨ I mean, nice!',
   edit: m.key
})

// --- Edit media messages caption
sock.sendMessage(jid, {
   caption: '✨ I mean, here is the image!',
   edit: m.key
})
```

### ⚙️ Baileys Features

#### 🔑 Request Custom Pairing Code

> [!NOTE]
> The phone number must contain numbers only (no +, (), or -) and must include the country code.

```javascript
const phoneNumber = '6281111111111'
const customPairingCode = 'STARCORE'

await sock.requestPairingCode(phoneNumber, customPairingCode)

console.log('🔗 Pairing code', ':', customPairingCode)
```

#### 📣 Newsletter Management

```javascript
// --- Create a new one
sock.newsletterCreate('@itsliaaa/starcore', '📣 Fresh updates weekly')

// --- Get info
const metadata = sock.newsletterMetadata('1211111111111@newsletter')
console.dir(metadata, { depth: null })

// --- Get subscribers count
const subscribers = await sock.newsletterSubscribers('1211111111111@newsletter')
console.dir(subscribers, { depth: null })

// --- Follow and Unfollow
sock.newsletterFollow('1211111111111@newsletter')
sock.newsletterUnfollow('1211111111111@newsletter')

// --- Mute and Unmute
sock.newsletterMute('1211111111111@newsletter')
sock.newsletterUnmute('1211111111111@newsletter')

// --- Demote admin
sock.newsletterDemote('1211111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Change owner
sock.newsletterChangeOwner('1211111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Update newsletter
sock.newsletterUpdate('1211111111111@newsletter', { name: '@itsliaaa/starcore' })

// --- Change name
sock.newsletterUpdateName('1211111111111@newsletter', '✨ @itsliaaa/starcore')

// --- Change description
sock.newsletterUpdateDescription('1211111111111@newsletter', '📣 Fresh updates weekly')

// --- Change photo
sock.newsletterUpdatePicture('1211111111111@newsletter', {
   url: 'path/to/image.jpg'
})

// --- Remove photo
sock.newsletterRemovePicture('1211111111111@newsletter')

// --- React to a message
sock.newsletterReactMessage('1211111111111@newsletter', '100', '💛')

// --- Get admin count
const count = await sock.newsletterAdminCount('1211111111111@newsletter')

// --- Get all subscribed newsletters
const newsletters = await sock.newsletterSubscribed()
console.dir(newsletters, { depth: null })

// --- Fetch newsletter messages
const messages = sock.newsletterFetchMessages('jid', '1211111111111@newsletter', 50, 0, 0)
console.dir(messages, { depth: null })

// --- Delete newsletter
sock.newsletterDelete('1211111111111@newsletter')
```

#### 👥 Group Management

```javascript
// --- Create a new one and add participants using their JIDs
const group = sock.groupCreate('@itsliaaa/starcore', ['6281111111111@s.whatsapp.net'])
console.dir(group, { depth: null })

// --- Get info
const metadata = await sock.groupMetadata(jid)
console.dir(metadata, { depth: null })

// --- Get group invite code
const inviteCode = await sock.groupInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revoke invite link
sock.groupRevokeInvite(jid)

// --- Accept group invite
sock.groupAcceptInvite(inviteCode)

// --- Leave group
sock.groupLeave(jid)

// --- Add participants
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'add')

// --- Remove participants
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'remove')

// --- Promote to admin
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'promote')

// --- Demote from admin
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'demote')

// --- Accept join requests
sock.groupRequestParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'approve')

// --- Change name
sock.groupUpdateSubject(jid, '✨ @itsliaaa/starcore')

// --- Change description
sock.groupUpdateDescription(jid, 'Updated description')

// --- Change photo
sock.updateProfilePicture(jid, {
   url: 'path/to/image.jpg'
})

// --- Remove photo
sock.removeProfilePicture(jid)

// --- Set group as admin only for chatting
sock.groupSettingUpdate(jid, 'announcement')

// --- Set group as open to all for chatting
sock.groupSettingUpdate(jid, 'not_announcement')

// --- Set admin only can edit group info
sock.groupSettingUpdate(jid, 'locked')

// --- Set all participants can edit group info
sock.groupSettingUpdate(jid, 'unlocked')

// --- Set admin only can add participants
sock.groupMemberAddMode(jid, 'admin_add')

// --- Set all participants can add participants
sock.groupMemberAddMode(jid, 'all_member_add')

// --- Enable or disable temporary messages with seconds format
sock.groupToggleEphemeral(jid, 86400)

// --- Disable temporary messages
sock.groupToggleEphemeral(jid, 0)

// --- Enable or disable membership approval mode
sock.groupJoinApprovalMode(jid, 'on')
sock.groupJoinApprovalMode(jid, 'off')

// --- Get all groups metadata
const groups = await sock.groupFetchAllParticipating()
console.dir(groups, { depth: null })

// --- Get pending join requests
const requests = await sock.groupRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Get group info from link
const group = await sock.groupGetInviteInfo('ABC123456789')
console.log('👥 Got group info from invite code', ':', group)

// --- Update bot member label
sock.updateMemberLabel(jid, '@itsliaaa/starcore')
```

#### 👥 Community Management

```javascript
// --- Create a new one and add description
const community = await sock.communityCreate('@itsliaaa/starcore', '📣 Fresh updates weekly')
console.dir(community, { depth: null })

// --- Create a subgroup for community and add participants using their JIDs
const group = await sock.communityCreateGroup('📢 Announcements', ['6281111111111@s.whatsapp.net'], communityJid)

// --- Link an existing group
sock.communityLinkGroup(groupJid, communityJid)

// --- Unlink an existing group
sock.communityUnlinkGroup(groupJid, communityJid)

// --- Get info
const metadata = await sock.communityMetadata(jid)
console.dir(metadata, { depth: null })

// --- Get community invite code
const inviteCode = await sock.communityInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revoke invite link
sock.communityRevokeInvite(jid)

// --- Accept community invite
sock.communityAcceptInvite(inviteCode)

// --- Leave community
sock.communityLeave(jid)

// --- Accept join requests
sock.communityRequestParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'approve')

// --- Change name
sock.communityUpdateSubject(jid, '✨ @itsliaaa/starcore')

// --- Change description
sock.communityUpdateDescription(jid, 'Updated description')

// --- Set community as admin only for chatting
sock.communitySettingUpdate(jid, 'announcement')

// --- Set community as open to all for chatting
sock.communitySettingUpdate(jid, 'not_announcement')

// --- Set admin only can edit community info
sock.communitySettingUpdate(jid, 'locked')

// --- Set all participants can edit community info
sock.communitySettingUpdate(jid, 'unlocked')

// --- Set admin only can add participants
sock.communityMemberAddMode(jid, 'admin_add')

// --- Set all participants can add participants
sock.communityMemberAddMode(jid, 'all_member_add')

// --- Enable or disable temporary messages with seconds format
sock.communityToggleEphemeral(jid, 86400)

// --- Disable temporary messages
sock.communityToggleEphemeral(jid, 0)

// --- Enable or disable membership approval mode
sock.communityJoinApprovalMode(jid, 'on')
sock.communityJoinApprovalMode(jid, 'off')

// --- Get all communities metadata
const communities = await sock.communityFetchAllParticipating()
console.dir(communities, { depth: null })

// --- Get all community linked groups
const linked = await sock.communityFetchLinkedGroups(jid)
console.dir(linked, { depth: null })

// --- Get pending join requests
const requests = await sock.communityRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Get community info from link
const community = await sock.communityGetInviteInfo('ABC123456789')
console.log('👥 Got community info from invite code', ':', community)
```

#### 👤 Profile Management

```javascript
// --- Get user profile picture
const url = await sock.profilePictureUrl(jid, 'image')
console.log('🖼️ Got user profile url', url)

// --- Update profile picture
sock.updateProfilePicture(jid, buffer)
sock.updateProfilePicture(jid, { url })

// --- Remove profile picture
sock.removeProfilePicture(jid)

// --- Update profile name
sock.updateProfileName('My Name')

// --- Update profile status
sock.updateProfileStatus('Available')

// --- Presence
sock.sendPresenceUpdate('available', jid)
sock.presenceSubscribe(jid)

// --- Read receipts
sock.readMessages([m.key])
sock.sendReceipt(jid, participant, [messageId], 'read')

// --- Block user
sock.updateBlockStatus(jid, 'block')

// --- Unblock user
sock.updateBlockStatus(jid, 'unblock')

// --- Fetch blocklist
const blocked = await sock.fetchBlocklist()
console.dir(blocked, { depth: null })

// --- Modify chats
sock.chatModify({
   archive: true,
   lastMessageOrig: m,
   lastMessage: m
}, jid)

// --- Star messages
sock.star(jid, [{ id: messageId, fromMe: true }], true)

// --- Contact
sock.addOrEditContact(jid, { displayName: 'Starseed' })
sock.removeContact(jid)

// --- Label
sock.addChatLabel(jid, labelId)
sock.removeChatLabel(jid, labelId)
sock.addMessageLabel(jid, messageId, labelId)

// --- Favorites
sock.keepFavorites([
  '6281111111111@s.whatsapp.net',
  '1211111111111@g.us'
])
sock.keepFavorites([
   '6281111111111@s.whatsapp.net' // Only this one remains
])

// --- App state sync
sock.resyncAppState(['regular', 'critical_block'], true)

// --- Get business profile
const profile = await sock.getBusinessProfile(jid)
console.dir(profile, { depth: null })
```

#### 🛒 Business Management

```javascript
// --- Create a new product
const product = await sock.productCreate({
   name: '🧩 Starseed (Premium)',
   description: 'Get a full version of Starseed!',
   price: 100000,
   currency: 'IDR',
   originCountryCode: 'ID',
   images: [
      bufferImage,
      {
         url: './path/to/image.jpg'
      }
   ]
})
console.dir(product, { depth: null })

// --- Update product
await sock.productUpdate(productId, {
   name: '🧩 Starseed (Premium)',
   description: 'Get a full version of Starseed with more features!',
   price: 75000,
   currency: 'IDR',
   images: [
      {
         url: './path/to/image.jpg'
      }
   ]
})

// --- Delete product
sock.productDelete([productId])

// --- Get catalog info
const { products, nextPageCursor } = await sock.getCatalog({
  jid: '6281111111111@s.whatsapp.net',
  limit: 10
})

// --- Get collections
const collections = await sock.getCollections('6281111111111@s.whatsapp.net', 10)
console.dir(collections, { depth: null })

// --- Get order info
const order = await sock.getOrderDetails(orderId, tokenBase64)
console.dir(order, { depth: null })

// --- Update business profile
await sock.updateBusinessProfile({
   address: 'Jakarta, Indonesia',
   description: '🛒 Official Starseed Store',
   websites: ['https://www.npmjs.com/package/@itsliaaa/starcore'],
   email: 'more-more@gmail.com',
   hours: {
      timezone: 'Asia/Jakarta',
      days: [{ day: 'mon', mode: 'open_24h' }]
   }
})

// --- Update cover
sock.updateCoverPhoto({
   url: './path/to/image.jpg'
})

// --- Remove cover
sock.removeCoverPhoto(coverId)

// --- Update quick replies
sock.addOrEditQuickReply({
  shortcut: 'hello',
  message: 'Hello from business account',
})

// --- Remove quick reply
sock.removeQuickReply(timestamp)
```

#### 🔐 Privacy Management

```javascript
// --- Update last seen privacy
sock.updateLastSeenPrivacy('all')
sock.updateLastSeenPrivacy('contacts')
sock.updateLastSeenPrivacy('contact_blacklist')
sock.updateLastSeenPrivacy('nobody')

// --- Update online privacy
sock.updateOnlinePrivacy('all')
sock.updateOnlinePrivacy('match_last_seen')

// --- Update profile picture privacy
sock.updateProfilePicturePrivacy('contacts')

// --- Update status privacy
sock.updateStatusPrivacy('contacts')

// --- Update read receipts privacy
sock.updateReadReceiptsPrivacy('all')
sock.updateReadReceiptsPrivacy('none')

// --- Update groups add privacy
sock.updateGroupsAddPrivacy('all')
sock.updateGroupsAddPrivacy('contacts')

// --- Update messages privacy
sock.updateMessagesPrivacy('all')
sock.updateMessagesPrivacy('contacts')
sock.updateMessagesPrivacy('nobody')

// --- Update call privacy
sock.updateCallPrivacy('everyone')

// --- Update default disappearing mode
sock.updateDefaultDisappearingMode(86400)

// --- Update link previews privacy
sock.updateDisableLinkPreviewsPrivacy(true)
```

#### 📡 Baileys Events Reference

```javascript
sock.ev.on('connection.update', console.log)
sock.ev.on('creds.update', console.log)
sock.ev.on('messaging-history.set', console.log)
sock.ev.on('messaging-history.status', console.log)
sock.ev.on('chats.upsert', console.log)
sock.ev.on('chats.update', console.log)
sock.ev.on('chats.delete', console.log)
sock.ev.on('chats.lock', console.log)
sock.ev.on('lid-mapping.update', console.log)
sock.ev.on('presence.update', console.log)
sock.ev.on('contacts.upsert', console.log)
sock.ev.on('contacts.update', console.log)
sock.ev.on('messages.delete', console.log)
sock.ev.on('messages.update', console.log)
sock.ev.on('messages.media-update', console.log)
sock.ev.on('messages.upsert', console.log)
sock.ev.on('messages.reaction', console.log)
sock.ev.on('message-receipt.update', console.log)
sock.ev.on('groups.upsert', console.log)
sock.ev.on('groups.update', console.log)
sock.ev.on('group-participants.update', console.log)
sock.ev.on('group.join-request', console.log)
sock.ev.on('group.member-tag.update', console.log)
sock.ev.on('blocklist.set', console.log)
sock.ev.on('blocklist.update', console.log)
sock.ev.on('call', console.log)
sock.ev.on('labels.edit', console.log)
sock.ev.on('labels.association', console.log)
sock.ev.on('newsletter.reaction', console.log)
sock.ev.on('newsletter.view', console.log)
sock.ev.on('newsletter-participants.update', console.log)
sock.ev.on('newsletter-settings.update', console.log)
sock.ev.on('settings.update', console.log)
```

### 🗳️ Database

Including two built-in database backends to fit different use cases:

- **JSON**: A lightweight solution for small projects and straightforward data storage.
- **SQLite**: Powered by `better-sqlite3`, delivering high performance, low overhead, and a hassle-free experience.

#### 📎 JSON

```javascript
import { Database } from '@itsliaaa/starcore'

const db = await Database.json('database.json')

const data = await db.read()

await db.write({
   users: {},
   groups: {},
   settings: {}
})
```

#### 📎 SQLite

> [!IMPORTANT]
> [`better-sqlite3@>=12.2.0`](https://www.npmjs.com/package/better-sqlite3) is a peer dependency. You must install it manually and add it to your project's `package.json`.

```javascript
import { Database } from '@itsliaaa/starcore'

const db = await Database.sqlite('database.db')

const data = db.read()

db.write({
   users: {},
   groups: {},
   settings: {}
})

db.close()
```

### 🧩 Extend

If you prefer not to use the `Client` wrapper but still want the additional features provided by this package, you can use `Extend`.

> [!TIP]
> `sock` is used as the Baileys socket instance throughout this example. If your project uses a different variable name (e.g. `conn` or `client`), replace `sock` with your own variable name.

> [!CAUTION]
> Your Baileys instance must be extensible and writable, as `Extend` attaches additional methods to the instance.

```javascript
import { Extend } from '@itsliaaa/starcore'
import { makeWASocket } from 'baileys'

const sock = makeWASocket({ ... })

await Extend(sock, {
   messageIdPrefix: 'STARCORE',
   updatePresence: true, // Default: true
   autoFollowNewsletter: '1211111111111@newsletter', // String | String[] | false
   newsletterAnnotation: {
      newsletterJid: '1211111111111@newsletter',
      newsletterName: '@itsliaaa/starcore',
      contentType: 1
   } // IForwardedNewsletterMessageInfo | false
})

// sock.sendText(jid, 'Hello there', message)
```

Besides extending your socket with additional helper methods, `Extend` also provides built-in decryption for `secretEncryptedMessage` to obtain `editedMessage` and automatically decrypts the `vote` payload contained in `pollUpdateMessage`.

### 🌐 Request

> [!NOTE]
> This feature relies on Node.js's built-in `fetch()` API along with several other native Node.js capabilities. Therefore, it's highly recommended to use Node.js version 20 or newer (>= 20) to ensure everything works properly.

```javascript
import { Request } from '@itsliaaa/starcore'

// --- Quick request
const result = await Request.request('https://path-to-web-api.com/', {
   timeout: 3000 // Default: 1.5 minutes
})

// --- Get url from redirect url
const maxRedirects = 3 // Default: 3
const realUrl = await Request.resolveUrl('https://path-to-redirect.com/', maxRedirects)

// --- Create a fast path
const someApi = Request.createApiRequest('https://path-to-web-api.com/')

const getResult = await someApi('path/to/get', {
   q: 'Hello'
}, {
   // Optional
   timeout: 3000,
   method: 'GET',
   headers: {}
})

const postResult = await someApi('path/to/post', null, {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({
      q: 'Hello'
   })
})
```

### 📚 Exported Modules

```javascript
import {
   Client,
   Database,
   Extend,
   Request,
   Scraper,
   Utilities,
   Watcher
} from '@itsliaaa/starcore'
```

### 🚀 Try the Bot

A fast, lightweight, and modular WhatsApp bot built with [@itsliaaa/baileys](https://www.npmjs.com/package/@itsliaaa/baileys).
Perfect for managing groups, moderating chats, and adding fun with quiz games and handy tools.

👉🏻 [@itsliaaa/starseed](https://github.com/itsliaaa/starseed#readme)

### 📣 Credits

This project uses Protocol Buffer definitions maintained by [WPP Connect](https://github.com/wppconnect-team) via [`wa-proto`](https://github.com/wppconnect-team/wa-proto) for the `updateProtoOnStartup` feature.

Special thanks to the original Baileys maintainers and contributors:
- [purpshell](https://github.com/purpshell)
- [jlucaso1](https://github.com/jlucaso1)
- [adiwajshing](https://github.com/adiwajshing)

<!-- Please do not replace my name with yours. It's disrespectful. -->

**This project is created and maintained by [Lia Wynn](https://github.com/itsliaaa)**

Please do not remove or alter the original credits, copyright notices, or attributions.