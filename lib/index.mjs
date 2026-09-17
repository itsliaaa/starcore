import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const lib = require('./index.js')

export const Client = lib.Client
export const createInMemoryStore = lib.createInMemoryStore
export const createJsonStore = lib.createJsonStore
export const createSqliteStore = lib.createSqliteStore
export const Request = lib.Request
export const Scraper = lib.Scraper
export const Utilities = lib.Utilities
export const Watcher = lib.Watcher
export const updateWAProto = lib.updateWAProto

export { Client as default }

export * from 'baileys'