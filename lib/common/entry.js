"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineJSPack = void 0;
const inlinejs_1 = require("@benbraide/inlinejs");
const inlinejs_core_1 = require("@benbraide/inlinejs-core");
const esm_1 = require("@benbraide/inlinejs-extended/lib/esm");
function InlineJSPack() {
    (0, inlinejs_1.InlineJS)();
    (0, inlinejs_core_1.InlineJSCore)();
    (0, esm_1.InlineJSExtended)();
}
exports.InlineJSPack = InlineJSPack;
