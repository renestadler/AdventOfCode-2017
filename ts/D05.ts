export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let ar: number[] = [inputs.length];
        let count = 0;
        let position = 0;
        for (let i = 0; i < inputs.length; i++) {
            ar[i] = parseInt(inputs[i]);
        }
        do {
            if (position >= ar.length) {
                break;
            }
            count++;
            ar[position]++;
            position += ar[position] - 1;
        } while (true);
        return count;
    }

    public static part2(inputs: string[]) {
        let ar: number[] = [inputs.length];
        let count = 0;
        let position = 0;
        for (let i = 0; i < inputs.length; i++) {
            ar[i] = parseInt(inputs[i]);
        }
        do {
            if (position >= ar.length) {
                break;
            }
            count++;
            if (ar[position] >= 3) {
                ar[position]--;
                position += ar[position] + 1;
            } else {
                ar[position]++;
                position += ar[position] - 1;
            }
        } while (true);
        return count;
    }
}
