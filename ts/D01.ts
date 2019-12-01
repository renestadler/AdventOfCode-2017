export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split(''));
        let answer2 = this.part2(input.split(''));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let count: number = 0;
        for (let i = 0; i < inputs.length; i++) {
            if (i == inputs.length - 1) {
                if (parseInt(inputs[inputs.length - 1]) == parseInt(inputs[0])) {
                    count += parseInt(inputs[0]);
                }
            } else {
                if (parseInt(inputs[i]) == parseInt(inputs[i + 1])) {
                    count += parseInt(inputs[i + 1]);
                }
            }
        }
        return count;
    }

    public static part2(inputs: string[]) {
        let count = 0;
        let offset = inputs.length / 2;
        for (let i = 0; i < inputs.length; i++) {
            if (i >= inputs.length - offset) {
                if (parseInt(inputs[i]) == parseInt(inputs[offset-(inputs.length-i)])) {
                    count += parseInt(inputs[offset-(inputs.length-i)]);
                }
            } else {
                if (parseInt(inputs[i]) == parseInt(inputs[i + offset])) {
                    count += parseInt(inputs[i + offset]);
                }
            }
        }
        return count;
    }
}