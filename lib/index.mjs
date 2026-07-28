import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const lib = require('./index.js')

export const {
   Client,
   Database,
   Extend,
   Request,
   Scraper,
   Utilities,
   Watcher
} = lib

export default lib.Client