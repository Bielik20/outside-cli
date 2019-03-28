"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = require("ora");
const location_1 = require("../utils/location");
const weather_1 = require("../utils/weather");
async function forecast(args) {
    const spinner = ora_1.default().start();
    try {
        const location = args.location || args.l || await location_1.getLocation();
        const weather = await weather_1.getWeather(location);
        spinner.stop();
        console.log(`Forecast for ${location}:`);
        weather.forecast.forEach(item => console.log(`\t${item.date} - Low: ${item.low}° | High: ${item.high}° | ${item.text}`));
    }
    catch (err) {
        spinner.stop();
        console.error(err);
    }
}
exports.forecast = forecast;
