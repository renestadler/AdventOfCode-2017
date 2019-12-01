import fs = require('fs');
import * as d01 from "./ts/D01";
import * as d02 from "./ts/D02";
import * as d03 from "./ts/D03";
import * as d04 from "./ts/D04";
import * as d05 from "./ts/D05";
import * as d06 from "./ts/D06";
import * as d07 from "./ts/D07";
import * as d08 from "./ts/D08";
import * as d09 from "./ts/D09";
import * as d10 from "./ts/D10";
import * as d11 from "./ts/D11";
import * as d12 from "./ts/D12";
import * as d13 from "./ts/D13";
import * as d14 from "./ts/D14";
import * as d15 from "./ts/D15";
import * as d16 from "./ts/D16";
import * as d17 from "./ts/D17";
import * as d18 from "./ts/D18";
import * as d19 from "./ts/D19";
import * as d20 from "./ts/D20";
import * as d21 from "./ts/D21";
import * as d22 from "./ts/D22";
import * as d23 from "./ts/D23";
import * as d24 from "./ts/D24";
import * as d25 from "./ts/D25";

if (process.argv.length != 3 || isNaN(parseInt(process.argv[2]))) {
    console.error("Usage: npm start <dayNr>");
    process.exit(-1);
}
let dayNr = parseInt(process.argv[2]);
switch (dayNr) {
    case 1:
        console.log("TestInput:\t" + d01.Main.start(readInput("1.test")));
        console.log("Input:\t\t" + d01.Main.start(readInput("1.in")));
        break;
    case 2:
        console.log("TestInput:\t" + d02.Main.start(readInput("2.test")));
        console.log("Input:\t\t" + d02.Main.start(readInput("2.in")));
        break;
    case 3:
        console.log("TestInput:\t" + d03.Main.start(readInput("3.test")));
        console.log("Input:\t\t" + d03.Main.start(readInput("3.in")));
        break;
    case 4:
        console.log("TestInput:\t" + d04.Main.start(readInput("4.test")));
        console.log("Input:\t\t" + d04.Main.start(readInput("4.in")));
        break;
    case 5:
        console.log("TestInput:\t" + d05.Main.start(readInput("5.test")));
        console.log("Input:\t\t" + d05.Main.start(readInput("5.in")));
        break;
    case 6:
        console.log("TestInput:\t" + d06.Main.start(readInput("6.test")));
        console.log("Input:\t\t" + d06.Main.start(readInput("6.in")));
        break;
    case 7:
        console.log("TestInput:\t" + d07.Main.start(readInput("7.test")));
        console.log("Input:\t\t" + d07.Main.start(readInput("7.in")));
        break;
    case 8:
        console.log("TestInput:\t" + d08.Main.start(readInput("8.test")));
        console.log("Input:\t\t" + d08.Main.start(readInput("8.in")));
        break;
    case 9:
        console.log("TestInput:\t" + d09.Main.start(readInput("9.test")));
        console.log("Input:\t\t" + d09.Main.start(readInput("9.in")));
        break;
    case 10:
        console.log("TestInput:\t" + d10.Main.start(readInput("10.test")));
        console.log("Input:\t\t" + d10.Main.start(readInput("10.in")));
        break;
    case 11:
        console.log("TestInput:\t" + d11.Main.start(readInput("11.test")));
        console.log("Input:\t\t" + d11.Main.start(readInput("11.in")));
        break;
    case 12:
        console.log("TestInput:\t" + d12.Main.start(readInput("12.test")));
        console.log("Input:\t\t" + d12.Main.start(readInput("12.in")));
        break;
    case 13:
        console.log("TestInput:\t" + d13.Main.start(readInput("13.test")));
        console.log("Input:\t\t" + d13.Main.start(readInput("13.in")));
        break;
    case 14:
        console.log("TestInput:\t" + d14.Main.start(readInput("14.test")));
        console.log("Input:\t\t" + d14.Main.start(readInput("14.in")));
        break;
    case 15:
        console.log("TestInput:\t" + d15.Main.start(readInput("15.test")));
        console.log("Input:\t\t" + d15.Main.start(readInput("15.in")));
        break;
    case 16:
        console.log("TestInput:\t" + d16.Main.start(readInput("16.test")));
        console.log("Input:\t\t" + d16.Main.start(readInput("16.in")));
        break;
    case 17:
        console.log("TestInput:\t" + d17.Main.start(readInput("17.test")));
        console.log("Input:\t\t" + d17.Main.start(readInput("17.in")));
        break;
    case 18:
        console.log("TestInput:\t" + d18.Main.start(readInput("18.test")));
        console.log("Input:\t\t" + d18.Main.start(readInput("18.in")));
        break;
    case 19:
        console.log("TestInput:\t" + d19.Main.start(readInput("19.test")));
        console.log("Input:\t\t" + d19.Main.start(readInput("19.in")));
        break;
    case 20:
        console.log("TestInput:\t" + d20.Main.start(readInput("20.test")));
        console.log("Input:\t\t" + d20.Main.start(readInput("20.in")));
        break;
    case 21:
        console.log("TestInput:\t" + d21.Main.start(readInput("21.test"),true));
        console.log("Input:\t\t" + d21.Main.start(readInput("21.in"),false));
        break;
    case 22:
        console.log("TestInput:\t" + d22.Main.start(readInput("22.test")));
        console.log("Input:\t\t" + d22.Main.start(readInput("22.in")));
        break;
    case 23:
        console.log("TestInput:\t" + d23.Main.start(readInput("23.test")));
        console.log("Input:\t\t" + d23.Main.start(readInput("23.in")));
        break;
    case 24:
        console.log("TestInput:\t" + d24.Main.start(readInput("24.test")));
        console.log("Input:\t\t" + d24.Main.start(readInput("24.in")));
        break;
    case 25:
        console.log("TestInput:\t" + d25.Main.start(readInput("25.test")));
        console.log("Input:\t\t" + d25.Main.start(readInput("25.in")));
        break;
}

function readInput(file: string) {
    return fs.readFileSync('inputs/input' + file, 'utf8');
}