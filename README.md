# ⚡ @itsliaaa/starcore

[![Logo](https://files.catbox.moe/tfi9tr.png)](https://www.npmjs.com/package/@itsliaaa/starcore)

<p align="center">
   A lightweight yet powerful Baileys wrapper designed to simplify development while extending support for additional message types and WhatsApp features.
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
      <img src="https://img.shields.io/badge/license-AGPL--3.0-blue?style=for-the-badge"/>
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

### ✨ Highlights

- Improved `createParticipantNodes()` by introducing yielding, preventing potential freezes during participant node generation.
- Enhanced `relayMessage()` with newsletter support and compatibility for sending several important binary payloads.
- Adapted `prepareWAMessageMedia()` to fully support media delivery to newsletters.
- Added support for sending `stickerPackMessage` through `sendStickerPack()`.
- Extended support for multiple interactive messages and button-based message types.
- Introduced `newsletterSubscribed()` to easily retrieve data from all newsletters the account is currently subscribed to.

Built with a focus on simplicity, and better compatibility with modern WhatsApp features.

### 🌱 Future Plans

For now, the alpha release ships with a built-in JSON adapter for Database, Store, and Auth State.

More adapters will join the party in future releases. ✨

Until then, JSON remains the recommended choice for development, testing, and lightweight deployments.

### 📄 Basic Usage

```javascript
import { Client } from '@itsliaaa/starcore'

const client = new Client({
   auth: {
      name: 'session',
      pairingCode: true, // --- Turn "false" to use QR Code
      phoneNumber: '6281111111111'
   }
})

client.on('message', (ctx) => {
   if (ctx.m.body === 'hello') {
      ctx.m.reply('👋 Hello there!')
   }
})
```

> [!TIP]
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
      customCode: 'starcore'
   },
   isBotMessage: (id) =>
      typeof id === 'string' && id.includes('3EB0'),
   messageIdPrefix: 'starcore',
   readMessage: true,
   updatePresence: true,
   updateProtoOnStartup: true,
   autoFollowNewsletter: '1111122222@newsletter', // --- String | String[] | false
   newsletterAnnotation: {
      newsletterJid: '',
      newsletterName: ''
   }, // --- IForwardedNewsletterMessageInfo | false
   temporaryFileInterval: 45 * 60 * 1000, // --- Default: 45 minutes
   gcInterval: 1.5 * 60 * 60 * 1000 // --- Default: 1.5 hours
}, {
   // --- Baileys socket configuration
   shouldIgnoreJid: (jid) =>
      typeof jid === 'string' && jid.includes('newsletter')
})
```

### 📡 Events Reference

```javascript
client.on('message', console.log)
client.on('message.edit', console.log)
client.on('message.delete', console.log)
client.on('group.add', console.log)
client.on('group.promote', console.log)
client.on('group.demote', console.log)
client.on('group.remove', console.log)
client.on('call', console.log)
client.on('presence', console.log)
```

### 📨 Sending Messages

#### 🔠 Text

```javascript
sock.sendText(jid, '👋🏻 Hello', message, {
   mentionAll: false, // --- Optional
   mentions: ['621111111111@lid', '621111111111@s.whatsapp.net'], // --- Optional
})
```

#### 📰 Link Preview

```javascript
sock.sendAdText(jid, '👆🏻 Check it out!', message, {
   thumbnailUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   title: '🌱 @itsliaaa/starcore',
   description: 'Underrated Baileys Wrapper',
   previewType: 0, // --- Use 1 for video playback in the link preview
   thumbnail: fs.readFileSync('./path/to/image.jpg') // --- Buffer or url
})

// --- Send a text message with a large link preview and favicon
sock.sendAdText(jid, '👆🏻 Check it out!', message, {
   thumbnailUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   title: '🌱 @itsliaaa/starcore',
   description: 'Underrated Baileys Wrapper',
   previewType: 0,
   thumbnail: fs.readFileSync('./path/to/image.jpg'),
   favicon: fs.readFileSync('./path/to/tiny-image.png'), // --- Optional, Buffer or url
   largeThumbnail: true, // --- Must true if want to send large preview
   width: 720,
   height: 480
})
```

#### 😄 Reaction

```javascript
sock.sendReact(jid, '✨', message.key)
```

#### 📂 Media

```javascript
sock.sendMedia(jid, bufferOrUrl, message, {
   mime: 'image/jpeg', // --- Optional, will automatically detect the mime
   document: false, // --- Optional, force send as document
   ptv: false, // --- Optional, force send as PTV
   gif: false, // --- Optional
   ptt: false // --- Optional
})
```

#### ⚪ PTV

```javascript
sock.sendPtv(jid, bufferOrUrl, message)
```

#### 📃 Sticker

```javascript
sock.sendSticker(jid, bufferOrUrl, message, {
   packName: '@itsliaaa/starcore',
   packPublisher: 'by Lia Wynn 🌱',
   isAiSticker: true, // --- Optional
   isAvatar: false, // --- Optional
   premium: 1 // --- Optional
})
```

#### 📦 Sticker Pack

```javascript
sock.sendStickerPack = async (jid, [bufferOrUrl, bufferOrUrl], m, {
   cover: bufferOrUrl,
   name: '📦 Sticker Pack',
   publisher: 'GitHub: itsliaaa',
   description: '⚡ itsliaaa/starcore'
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
   number: '621111111111'
}, {
   name: '❤️ My Big Brother',
   org: '👥 Siblings',
   email: 'his-email@gmail.com',
   website: 'https://www.npmjs.com/package/@itsliaaa/starcore#readme',
   location: 'Jakarta',
   other: '❤️ Simplified WhatsApp API',
   number: '621111111111'
}], message)
```

#### 🖼️ Album

```javascript
sock.sendAlbum(jid, [{
   media: './path/to/image.jpg',
   caption: '1st image'
}, {
   media: './path/to/video.mp4',
   caption: '1st video'
}, {
   media: imageBuffer,
   caption: '2nd image'
}, {
   media: videoBuffer,
   caption: '2nd video'
}], message)
```

#### 🗄️ Interactive

```javascript
sock.sendInteractive(jid, [{
   text: '👋🏻 Greeting',
   id: '#Greeting',
   icon: 'review' // --- Optional
}, {
   text: '📞 Call',
   call: '621111111111'
}, {
   text: '📋 Copy',
   copy: '@itsliaaa/starcore'
}, {
   text: '🌐 Source',
   url: 'https://www.npmjs.com/package/@itsliaaa/starcore',
   useWebview: true // --- Optional
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
   icon: 'default' // --- Optional
}], message, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🗄️ Interactive Message',
   footer: '@itsliaaa/starcore',
   optionText: '👉🏻 Select Options', // --- Optional, wrap all native flow into a single list
   optionTitle: '📄 Select Options', // --- Optional
   offerText: '🏷️ Newest Coupon!', // --- Optional, add an offer into message
   offerCode: '@itsliaaa/starcore', // --- Optional
   offerUrl: 'https://www.npmjs.com/package/@itsliaaa/starcore', // --- Optional
   offerExpiration: Date.now() + 3_600_000, // --- Optional
   asTemplate: false // --- Optional, wrap the interactive message as template
})
```

#### 🎠 Carousel

```javascript
sock.sendCarousel(jid, [{
   image: {
      url: './path/to/image.jpg'
   },
   caption: '🖼️ Image 1',
   footer: '🏷️️ Pinterest',
   nativeFlow: [{
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/@itsliaaa/starcore',
      useWebview: true
   }]
}, {
   image: {
      url: './path/to/image.jpg'
   },
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
   image: {
      url: './path/to/image.jpg'
   },
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
}], message, {
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
}], message, {
   text: '👆🏻 Buttons!',
   footer: '@itsliaaa/starcore',
   viewOnce: false // --- Optional, change to "true" if want proper render on WhatsApp Web
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
}], message, {
   image: {
      url: './path/to/image.jpg'
   },
   caption: '👆🏻 Buttons and List!',
   footer: '@itsliaaa/starcore'
})
```

#### 📋 Legacy List

> [!NOTE]
> This message is only works in private chat (`@s.whatsapp.net`)

```javascript
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
}], message, {
   text: '📋 List!',
   footer: '@itsliaaa/starcore',
   buttonText: '📋 Select',
   title: '👋🏻 Hello'
})
```

#### 📊 Poll

```javascript
// --- Regular poll message
sock.sendPoll(jid, [
   '✨ Yes', '💀 No'
], message, {
   name: '🔥 Is it good?',
   selectableCount: 1,
   toAnnouncementGroup: false,
   endDate: new Date(Date.now() + 28_800_000), // --- Optional
   hideVoter: false, // --- Optional
   canAddOption: false // --- Optional
})

// --- Quiz (only for newsletter)
sock.sendQuiz('1211111111111@newsletter', [
   '✨ Yes', '💀 No'
], message, {
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
}], message)

// --- Quiz result message
sock.sendQuizResult(jid, '🏆 Quiz Result', [{
   name: '🔥 Fire',
   voteCount: 133
}, {
   name: '❤️ Love it',
   voteCount: 18
}], message)
```

#### ✨ Rich

```javascript
sock.sendRich(jid, [{
   text: '# ⚡ @itsliaaa/starcore\n\n---\n',
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
   }] // --- Optional
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
      mime: 'image/jpeg' // --- Optional, the mime type of favicon
   }]
}], message, {
   notify: false, // --- Optional
   disclaimerText: 'Example Usage of sendRich()'
})
```

#### 🗒️ Copy & Forward

```javascript
sock.sendCopyMessage(jid, message, {
   forwardingScore: 1, // --- Optional
   quoted: message // --- Optional
})
```

#### 🎞️ Status Mention

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendStatus([jid], {
   text: '👋🏻 Hello!'
}, {
   mention: false, // --- Optional
   closeFriends: {
      name: '@itsliaaa/starcore',
      emoji: '✨'
   } // --- Optional
})
```

#### 👥 Group Status

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendGroupStatus(jid, {
   text: '👋🏻 Hello!'
}, {
   closeFriends: {
      name: '@itsliaaa/starcore',
      emoji: '✨'
   } // --- Optional
})
```

### 🗳️ Database

> [!IMPORTANT]
> Currently, only the JSON adapter is available. Additional adapters are planned for future releases.

```javascript
import { Database } from '@itsliaaa/starcore'

const jsonDb = Database.saveToLocal('database.json')
await jsonDb.read('database.json') // --- Read database from file, will return empty object if not exists
await jsonDb.write({
   users: {},
   groups: {},
   contacts: {},
   settings: {}
}) // --- Save data to file
```

### 🌐 Request

> [!NOTE]
> This feature relies on Node.js's built-in `fetch()` API along with several other native Node.js capabilities. Therefore, it's highly recommended to use Node.js version 20 or newer (>= 20) to ensure everything works properly.

```javascript
import { Request } from '@itsliaaa/starcore'

// --- Quick request
const result = await Request.request('https://path-to-web-api.com/', {
   timeout: 3000 // --- Default: 1.5 minutes
})

// --- Create a fast path
const someApi = Request.createApiRequest('https://path-to-web-api.com/')

const getResult = await someApi('path/to/get', {
   q: 'Hello'
}, {
   // --- Optional
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

### 🚀 Try the Bot

A fast, lightweight, and modular WhatsApp bot built with [@itsliaaa/starcore](https://www.npmjs.com/package/@itsliaaa/starcore).
Perfect for managing groups, moderating chats, and adding fun with quiz games and handy tools.

👉🏻 [@itsliaaa/starseed](https://github.com/itsliaaa/starseed#readme)

### 📣 Credits

this project uses Protocol Buffer definitions maintained by [WPP Connect](https://github.com/wppconnect-team) via [`wa-proto`](https://github.com/wppconnect-team/wa-proto) for the `updateProtoOnStartup` feature.

Special thanks to the original Baileys maintainers and contributors:
- [purpshell](https://github.com/purpshell)
- [jlucaso1](https://github.com/jlucaso1)
- [adiwajshing](https://github.com/adiwajshing)

<!-- Please do not replace my name with yours. It's disrespectful. -->

This project is created and maintained by [Lia Wynn](https://github.com/itsliaaa)