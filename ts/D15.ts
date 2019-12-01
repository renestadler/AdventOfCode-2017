export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split(","));
        let answer2 = this.part2(input.split(","));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let valuea = parseInt(input[0]);
        let valueb = parseInt(input[1]);
        let counter = 0;
        for (let i = 0; i < 40000000; i++) {
            valuea *= 16807;
            valueb *= 48271;
            valuea %= 2147483647;
            valueb %= 2147483647;

            let a = valuea.toString(2);
            let b = valueb.toString(2);
            let found = true;
            if (a.length < 16 || b.length < 16) {
                if (a.length != b.length) {
                    found = false;
                } else {
                    for (let index = 0; index < a.length; index++) {
                        if (a[a.length - index - 1] !== b[b.length - index - 1]) {
                            found = false;
                            break;
                        }
                    }
                }
            } else {
                for (let index = 0; index < 16; index++) {
                    if (a[a.length - index - 1] !== b[b.length - index - 1]) {
                        found = false;
                        break;
                    }
                }
            }
            if (found === true) {
                counter++;
            }
        }
        return counter;
    }

    public static part2(input: string[]) {
        let valuea = parseInt(input[0]);
        let valueb = parseInt(input[1]);
        let counter = 0;
        for (let i = 0; i < 5000000; i++) {
            do {
                valuea *= 16807;
                valuea %= 2147483647;
            } while ((valuea % 4) !== 0);
            do {
                valueb *= 48271;
                valueb %= 2147483647;
            } while ((valueb % 8) !== 0);
            let a = valuea.toString(2);
            let b = valueb.toString(2);
            let found = true;

            for (let index = 0; index < 16; index++) {
                if (a[a.length - index - 1] !== b[b.length - index - 1]) {
                    found = false;
                    break;
                }
            }
            if (i == 1056) {
            }
            if (found === true) {
                counter++;
            }
        }
        return counter;
    }
}