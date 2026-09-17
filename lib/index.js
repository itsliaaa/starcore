"use strict";

exports.__esModule = true;
var _exportNames = {
  Client: true,
  createInMemoryStore: true,
  createJsonStore: true,
  createSqliteStore: true,
  Request: true,
  Scraper: true,
  Utilities: true,
  Watcher: true,
  updateWAProto: true
};
exports.updateWAProto = exports.default = exports.createSqliteStore = exports.createJsonStore = exports.createInMemoryStore = exports.Watcher = exports.Utilities = exports.Scraper = exports.Request = exports.Client = void 0;
var _index = require("./core/index.js");
exports.Client = _index.Client;
exports.default = _index.Client;
var _index2 = require("./store/index.js");
exports.createInMemoryStore = _index2.createInMemoryStore;
exports.createJsonStore = _index2.createJsonStore;
exports.createSqliteStore = _index2.createSqliteStore;
var _index3 = require("./util/index.js");
exports.Request = _index3.Request;
exports.Scraper = _index3.Scraper;
exports.Utilities = _index3.Utilities;
exports.Watcher = _index3.Watcher;
exports.updateWAProto = _index3.updateWAProto;
var _baileys = require("baileys");
Object.keys(_baileys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _baileys[key]) return;
  exports[key] = _baileys[key];
});