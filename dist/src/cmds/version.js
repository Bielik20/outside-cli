"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const package_json_1 = require("../../package.json");
function verion(args) {
    console.log(`v${package_json_1.version}`);
}
exports.verion = verion;
