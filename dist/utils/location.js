"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
async function getLocation() {
    const results = await axios_1.default({
        method: 'get',
        url: 'https://api.ipdata.co',
    });
    const { city, region } = results.data;
    return `${city}, ${region}`;
}
exports.getLocation = getLocation;
