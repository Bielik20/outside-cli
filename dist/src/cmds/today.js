"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ora_1 = require("ora");
const location_1 = require("../utils/location");
const weather_1 = require("../utils/weather");
async function today(args) {
    const spinner = ora_1.default().start();
    try {
        const location = args.location || args.l || await location_1.getLocation();
        const weather = await weather_1.getWeather(location);
        spinner.stop();
        console.log(`Current conditions in ${location}:`);
        console.log(`\t${weather.condition.temp}° ${weather.condition.text}`);
    }
    catch (err) {
        spinner.stop();
        console.error(err);
    }
}
exports.today = today;
