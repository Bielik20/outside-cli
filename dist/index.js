"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const minimist = require('minimist');
function outside() {
    const args = minimist(process.argv.slice(2));
    let cmd = args._[0] || 'help';
    if (args.version || args.v) {
        cmd = 'version';
    }
    if (args.help || args.h) {
        cmd = 'help';
    }
    switch (cmd) {
        case 'today':
            require('./cmds/today').today(args);
            break;
        case 'version':
            require('./cmds/version').verion(args);
            break;
        case 'help':
            require('./cmds/help').help(args);
            break;
        case 'forecast':
            require('./cmds/forecast').forecast(args);
            break;
        default:
            const { error } = require('./utils/error');
            error(`"${cmd}" is not a valid command!`, true);
            break;
    }
    console.log();
}
exports.outside = outside;
