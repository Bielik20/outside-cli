"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function error(message, exit) {
    console.error(message);
    exit && process.exit(1);
}
exports.error = error;
