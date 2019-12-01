export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split(","));
        let answer2 = this.part2(input.split(","));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let pools: string[] = [];
        for (let index = 0; index < 16; index++) {
            pools[index] = String.fromCharCode('a'.charCodeAt(0) + index);
        }

        for (let index = 0; index < input.length; index++) {
            switch (input[index][0]) {
                case 's':
                    let number = parseInt(input[index].substr(1));
                    for (let index2 = 0; index2 < number; index2++) {
                        pools.unshift(pools.pop());
                    }
                    break;
                case 'p':
                    let ap = pools.findIndex(a => (input[index].split("/")[0].substr(1)) === a);
                    let bp = pools.findIndex(b => (input[index].split("/")[1]) === b);
                    let tempp = pools[ap];
                    pools[ap] = pools[bp];
                    pools[bp] = tempp;
                    break;
                case 'x':
                    let ax = (parseInt(input[index].split("/")[0].substr(1)));
                    let bx = (parseInt(input[index].split("/")[1]));
                    let tempx = pools[ax];
                    pools[ax] = pools[bx];
                    pools[bx] = tempx;
                    break;

            }
        }
        let s = '';
        for (let index = 0; index < pools.length; index++) {
            s += pools[index];
        }
        return s;
    }

    public static part2(input: string[]) {
        let pools: string[] = [];
        for (let index = 0; index < 16; index++) {
            pools[index] = String.fromCharCode('a'.charCodeAt(0) + index);
        }

        let offset = 0;
        let allPools: string[][] = [];
        for (let k = 0; k < 1000; k++) {
            let tempPool = [];
            for (let j = 0; j < pools.length; j++) {
                tempPool[j] = pools[j];
            }
            if (allPools.findIndex((a) => {
                for (let i = 0; i < a.length; i++) {
                    if (a[i] != tempPool[i]) {
                        return false;
                    }
                }
                return true;
            }) === -1) {
                allPools.push(tempPool);
            }
            else {
                offset = (k - allPools.findIndex(a => {
                    for (let i = 0; i < a.length; i++) {
                        if (a[i] != tempPool[i]) {
                            return false;
                        }
                    }
                    return true;
                }));
                break;
            }
            for (let index = 0; index < input.length; index++) {
                switch (input[index][0]) {
                    case 's':
                        let number = parseInt(input[index].substr(1));
                        for (let index2 = 0; index2 < number; index2++) {
                            pools.unshift(pools.pop());
                        }
                        break;
                    case 'p':
                        let ap = pools.findIndex(a => (input[index].split("/")[0].substr(1)) === a);
                        let bp = pools.findIndex(b => (input[index].split("/")[1]) === b);
                        let tempp = pools[ap];
                        pools[ap] = pools[bp];
                        pools[bp] = tempp;
                        break;
                    case 'x':
                        let ax = (parseInt(input[index].split("/")[0].substr(1)));
                        let bx = (parseInt(input[index].split("/")[1]));
                        let tempx = pools[ax];
                        pools[ax] = pools[bx];
                        pools[bx] = tempx;
                        break;

                }
            }
        }
        offset = 1000000000 % offset;
        for (let k = 0; k < offset; k++) {
            for (let index = 0; index < input.length; index++) {
                switch (input[index][0]) {
                    case 's':
                        let number = parseInt(input[index].substr(1));
                        for (let index2 = 0; index2 < number; index2++) {
                            pools.unshift(pools.pop());
                        }
                        break;
                    case 'p':
                        let ap = pools.findIndex(a => (input[index].split("/")[0].substr(1)) === a);
                        let bp = pools.findIndex(b => (input[index].split("/")[1]) === b);
                        let tempp = pools[ap];
                        pools[ap] = pools[bp];
                        pools[bp] = tempp;
                        break;
                    case 'x':
                        let ax = (parseInt(input[index].split("/")[0].substr(1)));
                        let bx = (parseInt(input[index].split("/")[1]));
                        let tempx = pools[ax];
                        pools[ax] = pools[bx];
                        pools[bx] = tempx;
                        break;

                }
            }
        }
        let s = '';
        for (let index = 0; index < pools.length; index++) {
            s += pools[index];
        }
        return s;
    }
}