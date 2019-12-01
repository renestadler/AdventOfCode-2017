export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split('\r\n'));
        let answer2 = this.part2(input.split('\r\n'));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let count: number = 0;
        for (let i = 0; i < inputs.length; i++) {
            let cur = inputs[i].split(" ");
            let min: number = 10000, max: number = 0;
            for (let j = 0; j < cur.length; j++) {
                if (parseInt(cur[j]) > max) {
                    max = parseInt(cur[j]);
                }
                if (parseInt(cur[j]) < min) {
                    min = parseInt(cur[j]);
                }
            }
            count += (max - min);
        }
        return count;
    }

    public static part2(inputs: string[]) {
        let count: number = 0;
        for (let i = 0; i < inputs.length; i++) {
            let cur = inputs[i].split(" ");
            for (let j = 0; j < cur.length; j++) {
                for (let k = 0; k < cur.length; k++) {
                    if (k != j) {
                        if (parseInt(cur[j]) % parseInt(cur[k]) === 0) {
                            count += parseInt(cur[j]) / parseInt(cur[k]);
                        }
                    }
                }
            }
        }
        return count;
    }
}