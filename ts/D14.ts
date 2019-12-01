export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input);
        let answer2 = this.part2(input);
        return [answer1, answer2];
    }

    public static part1(input) {
        let ergs: string[] = [];
        for (let k = 0; k < 128; k++) {
            let inputs = (input + "-" + k).split("");
            let elems = [];
            for (let index = 0; index < 256; index++) {
                elems.push(index);
            }

            let string = String.fromCharCode(17, 31, 73, 47, 23).split('');
            for (let index = 0; index < string.length; index++) {
                inputs.push(string[index]);
            }

            let pos = 0;
            let skip = 0;

            for (let j = 0; j < 64; j++) {
                for (let index = 0; index < inputs.length; index++) {
                    const element = inputs[index].charCodeAt(0);
                    for (let i = 0; i < element / 2; i++) {
                        let temp = elems[(pos + i) % elems.length];
                        elems[(pos + i) % elems.length] = elems[(element + pos - 1 - i) % elems.length];
                        elems[(element + pos - 1 - i) % elems.length] = temp;
                    }
                    pos += element + skip;
                    pos %= elems.length;
                    skip++;
                }
            }

            let erg = '';
            for (let index = 0; index < 16; index++) {
                let mult = index * 16;
                let sol = elems[mult] ^ elems[1 + mult] ^ elems[2 + mult]
                    ^ elems[3 + mult] ^ elems[4 + mult] ^ elems[5 + mult] ^ elems[6 + mult] ^ elems[7 + mult] ^ elems[8 + mult] ^ elems[9 + mult] ^ elems[10 + mult] ^ elems[11 + mult]
                    ^ elems[12 + mult] ^ elems[13 + mult] ^ elems[14 + mult] ^ elems[15 + mult];
                erg += (sol.toString(16));
            }
            ergs.push(erg);
        }
        let count = 0;
        for (let index = 0; index < ergs.length; index++) {
            for (let i = 0; i < ergs[index].length; i++) {
                let sol = (parseInt(ergs[index][i], 16).toString(2));

                if (parseInt(sol) % 10000 < 1000) {
                } else {
                    count++;
                }
                if (parseInt(sol) % 1000 < 100) {
                } else {
                    count++;
                }
                if (parseInt(sol) % 100 < 10) {
                } else {
                    count++;
                }
                if (parseInt(sol) % 10 < 1) {
                } else {
                    count++;
                }
            }
        }
        return count;
    }

    public static part2(input) {

        let ergs: string[] = [];
        for (let k = 0; k < 128; k++) {
            let inputs = (input + "-" + k).split("");
            let elems = [];
            for (let index = 0; index < 256; index++) {
                elems.push(index);
            }

            let string = String.fromCharCode(17, 31, 73, 47, 23).split('');
            for (let index = 0; index < string.length; index++) {
                inputs.push(string[index]);
            }

            let pos = 0;
            let skip = 0;

            for (let j = 0; j < 64; j++) {
                for (let index = 0; index < inputs.length; index++) {
                    const element = inputs[index].charCodeAt(0);
                    for (let i = 0; i < element / 2; i++) {
                        let temp = elems[(pos + i) % elems.length];
                        elems[(pos + i) % elems.length] = elems[(element + pos - 1 - i) % elems.length];
                        elems[(element + pos - 1 - i) % elems.length] = temp;
                    }
                    pos += element + skip;
                    pos %= elems.length;
                    skip++;
                }
            }

            let erg = '';
            for (let index = 0; index < 16; index++) {
                let mult = index * 16;
                let sol = elems[mult] ^ elems[1 + mult] ^ elems[2 + mult]
                    ^ elems[3 + mult] ^ elems[4 + mult] ^ elems[5 + mult] ^ elems[6 + mult] ^ elems[7 + mult] ^ elems[8 + mult] ^ elems[9 + mult] ^ elems[10 + mult] ^ elems[11 + mult]
                    ^ elems[12 + mult] ^ elems[13 + mult] ^ elems[14 + mult] ^ elems[15 + mult];
                if (sol.toString(16).length === 0) {
                    erg += "00";
                } else if (sol.toString(16).length === 1) {
                    erg += "0" + sol.toString(16);
                } else {
                    erg += sol.toString(16);
                }
            }
            ergs.push(erg);
        }
        let answer = '';
        for (let index = 0; index < ergs.length; index++) {
            for (let i = 0; i < ergs[index].length; i++) {
                let sol = (parseInt(ergs[index][i], 16).toString(2));
                if (parseInt(sol) % 10000 < 1000) {
                    answer += '.';
                } else {
                    answer += "#";
                }
                if (parseInt(sol) % 1000 < 100) {
                    answer += '.';
                } else {
                    answer += "#";
                }
                if (parseInt(sol) % 100 < 10) {
                    answer += '.';
                } else {
                    answer += "#";
                }
                if (parseInt(sol) % 10 < 1) {
                    answer += '.';
                } else {
                    answer += "#";
                }
            }
            answer += "\n";
        }
        let inputs = answer.split("\n");
        let ar: Position[][] = [];
        let count = 0;
        for (let index = 0; index < inputs.length - 1; index++) {
            ar[index] = [];
            let digit = inputs[index].split("");
            for (let index2 = 0; index2 < digit.length; index2++) {
                ar[index].push(new Position(index, index2, digit[index2] === '.' ? false : true));
                count++;
            }
        }
        let numGroups = 0;
        for (let index = 0; index < ar.length; index++) {
            for (let index2 = 0; index2 < ar[index].length; index2++) {
                if (!ar[index][index2].used && ar[index][index2].occupied) {
                    numGroups++;
                    ar[index][index2].used = true;
                    let pos: Position[] = [];
                    pos.push(ar[index][index2]);
                    do {
                        let current = pos.splice(0, 1)[0];
                        let curX = current.posx;
                        let curY = current.posy;
                        if (curX !== 0 && ar[curX - 1][curY].occupied && !ar[curX - 1][curY].used
                            && pos.findIndex(a => a.posx == curX - 1 && a.posy === curY) == -1) {
                            ar[curX - 1][curY].used = true;
                            pos.push(ar[curX - 1][curY]);
                        }
                        if (curY !== 0 && ar[curX][curY - 1].occupied && !ar[curX][curY - 1].used
                            && pos.findIndex(a => a.posx == curX && a.posy === curY - 1) == -1) {
                            ar[curX][curY - 1].used = true;
                            pos.push(ar[curX][curY - 1]);
                        }
                        if (curX !== ar.length - 1 && ar[curX + 1][curY].occupied && !ar[curX + 1][curY].used
                            && pos.findIndex(a => a.posx == curX + 1 && a.posy === curY) == -1) {
                            ar[curX + 1][curY].used = true;
                            pos.push(ar[curX + 1][curY]);
                        }
                        if (curY !== ar[curX].length - 1 && ar[curX][curY + 1].occupied && !ar[curX][curY + 1].used
                            && pos.findIndex(a => a.posx == curX && a.posy === curY + 1) == -1) {
                            ar[curX][curY + 1].used = true;
                            pos.push(ar[curX][curY + 1]);
                        }
                    } while (pos.length != 0);
                }
            }
        }
        return numGroups;
    }
}

class Position {
    public posx: number
    public posy: number;
    public occupied: boolean;
    public used: boolean = false;

    constructor(posx: number, posy: number, occupied: boolean) {
        this.posx = posx;
        this.posy = posy;
        this.occupied = occupied;
    }
}