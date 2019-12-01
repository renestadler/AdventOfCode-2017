export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input);
        let answer2 = this.part2(input);
        return [answer1, answer2];
    }

    public static part1(inputs: string) {
        let s = '';
        let bufferStarted = false;
        for (let index = 0; index < inputs.length; index++) {
            let a = inputs[index];
            if (a === '!') {
                index++;
            } else if (a === '<' && !bufferStarted) {
                bufferStarted = true;;
            } else if (a === '>') {
                bufferStarted = false;
            } else if (a === ',') {
            } else if (bufferStarted) {
            } else {
                s += a;
            }
        }

        let depth = 0;
        let sum = 0;
        for (let index = 0; index < s.length; index++) {
            if (s[index] == "{") {
                depth++;
            } else if (s[index] == "}") {
                sum += depth;
                depth--;
            }

        }
        return sum;
    }

    public static part2(inputs: string) {
        let s = '';
        let count = 0;
        let bufferStarted = false;
        for (let index = 0; index < inputs.length; index++) {
            let a = inputs[index];
            if (a === '!') {
                index++;
            } else if (a === '<' && !bufferStarted) {
                bufferStarted = true;;
            } else if (a === '>') {
                bufferStarted = false;
            } else if (bufferStarted) {
                count++;
            } else if (a === ',') {
            } else {
                s += a;
            }
        }

        return count;
    }
}