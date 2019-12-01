export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\n"));
        let answer2 = this.part2(input.split("\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let pos: Position[] = [];
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index].split(": ");
            pos.push(new Position(parseInt(element[0]), parseInt(element[1])));
        }
        let count = 0;
        let curPos = -1;
        for (let index = 0; index <= pos[pos.length - 1].id; index++) {

            curPos++;
            let cur = pos.find(a => a.id == curPos);
            if (cur !== undefined && cur.positon === 0) {
                count += cur.id * cur.length;
            }
            for (let i = 0; i < pos.length; i++) {
                if (pos[i].revert) {
                    pos[i].positon--;
                    if (pos[i].positon === 0) {
                        pos[i].revert = false;
                    }
                } else {
                    pos[i].positon++;
                    if (pos[i].positon === pos[i].length - 1) {
                        pos[i].revert = true;
                    }
                }
            }
        }
        return count;
    }

    public static part2(inputs: string[]) {
        let pos: Position[] = [];
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index].split(": ");
            pos.push(new Position(parseInt(element[0]), parseInt(element[1])));
        }
        let count = 0;
        let delay = 0;
        let curPos = -1;
        do {
            count = 0;
            curPos = -1;
            for (let i = 0; i < pos.length; i++) {
                pos[i].revert = false;
                pos[i].positon = 0;
            }
            for (let i = 0; i < pos.length; i++) {
                let curDelay = delay % (pos[i].length-1);
                if ((Math.floor(delay / (pos[i].length-1)) % 2) == 0) {
                    pos[i].positon = curDelay;
                    pos[i].revert = false;
                } else {
                    pos[i].positon = pos[i].length-1-curDelay;
                    pos[i].revert = true;
                }
            }
            for (let index = 0; index <= pos[pos.length - 1].id; index++) {
                curPos++;
                let cur = pos.find(a => a.id == curPos);
                if (cur !== undefined && cur.positon === 0) {
                    count = 1;
                    break;
                }
                for (let i = 0; i < pos.length; i++) {
                    if (pos[i].revert) {
                        pos[i].positon--;
                        if (pos[i].positon === 0) {
                            pos[i].revert = false;
                        }
                        if (pos[i].positon === -1) {
                            pos[i].positon += 2;
                            pos[i].revert = false;
                        }
                    } else {
                        pos[i].positon++;
                        if (pos[i].positon === pos[i].length - 1) {
                            pos[i].revert = true;
                        }
                        if (pos[i].positon === pos[i].length) {
                            pos[i].positon -= 2;
                            pos[i].revert = true;
                        }
                    }
                }
            }
            delay++;
        } while (count > 0);
        return delay - 1;
    }
}

class Position {
    public id: number;
    public positon: number;
    public length: number;
    public revert: boolean = false;

    constructor(id: number, length: number) {
        this.id = id;
        this.positon = 0;
        this.length = length;
    }
}