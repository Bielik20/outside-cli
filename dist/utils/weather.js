"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
async function getWeather(location) {
    const results = await axios_1.default({
        method: 'get',
        url: 'https://query.yahooapis.com/v1/public/yql',
        params: {
            format: 'json',
            q: `select item from weather.forecast where woeid in
        (select woeid from geo.places(1) where text="${location}")`,
        },
    });
    return results.data.query.results.channel.item;
}
exports.getWeather = getWeather;
