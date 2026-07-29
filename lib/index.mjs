import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const lib = require('./index.js')

export const Client = lib.Client
export const Database = lib.Database
export const Extend = lib.Extend
export const Request = lib.Request
export const Scraper = lib.Scraper
export const Utilities = lib.Utilities
export const Watcher = lib.Watcher
export const getGlobalConfig = lib.getGlobalConfig
export const setGlobalConfig = lib.setGlobalConfig

export default lib.Client