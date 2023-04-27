#!/usr/bin/env node
import { rpsls } from '../lib/rpsls.js';
import minimist from 'minimist';

const args = minimist(process.argv.slice(2));

if (args.h || args.help) {
    
    console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n',
    '  -h, --help      display this help message and exit\n',
    '  -r, --rules     display the rules and exit\n\nExamples:\n',
    '  node-rps        Return JSON with single player RPS result.\n',
    '                  e.g. {"player":"rock"}\n',
    '  node-rps rock   Return JSON with results for RPS played against a simulated opponent.\n',
    '                  e.g {"player":"rock","opponent":"scissors","result":"win"}')
    process.exit(0);
}


if (args.r || args.rules) {
    console.log('Rules for Rock Paper Scissors:\n\n',
    ' - Scissors CUTS Paper\n',
    ' - Paper COVERS Rock\n',
    ' - Rock SMOOSHES Lizard\n',
    ' - Lizard POISONS Spock\n',
    ' - Spock SMASHES Scissors\n',
    ' - Scissors DECAPITATES Lizard\n',
    ' - Lizard EATS Paper\n',
    ' - Paper DISPROVES Spock\n',
    ' - Spock VAPORIZES Rock\n',
    ' - Rock CRUSHES Scissors\n',
    )
    process.exit(0);
}


const move = args._[0]

try {
    game = rpsls(move)
    console.log(JSON.stringify(rpsls(game)));
} catch (e){
    process.exit(0)
}


