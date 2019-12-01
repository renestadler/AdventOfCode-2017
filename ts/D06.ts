export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\t"));
        let answer2 = this.part2(input.split("\t"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let ar: number[] = [inputs.length];
        for (let i = 0; i < inputs.length; i++) {
            ar[i] = parseInt(inputs[i]);
        }
        let ar2: string[] = [];
        let count = 0;
        do {
            count++;
            let maxIndex = 0;
            for (let i = 1; i < ar.length; i++) {
                if (ar[i] > ar[maxIndex]) {
                    maxIndex = i;
                }
            }
            let all = Math.floor(ar[maxIndex] / ar.length);
            let rest = ar[maxIndex] % ar.length;
            ar[maxIndex] = 0;
            for (let i = 0; i < ar.length; i++) {
                if (i + maxIndex + 1 < ar.length) {
                    ar[i + maxIndex + 1] += all;
                    if (rest > 0) {
                        ar[i + maxIndex + 1]++;
                        rest--;
                    }
                } else {
                    ar[(i + maxIndex + 1) - ar.length] += all;
                    if (rest > 0) {
                        ar[(i + maxIndex + 1) - ar.length]++;
                        rest--;
                    }
                }
            }
            if (ar2.indexOf(ar.toString()) != -1) {
                return count;
            }
            ar2.push(ar.toString());
        } while (true);
    }

    public static part2(inputs: string[]) {
        let ar: number[] = [inputs.length];
        for (let i = 0; i < inputs.length; i++) {
            ar[i] = parseInt(inputs[i]);
        }
        let ar2: string[] = [];
        let count = 0;
        do {
            count++;
            let maxIndex = 0;
            for (let i = 1; i < ar.length; i++) {
                if (ar[i] > ar[maxIndex]) {
                    maxIndex = i;
                }
            }
            let all = Math.floor(ar[maxIndex] / ar.length);
            let rest = ar[maxIndex] % ar.length;
            ar[maxIndex] = 0;
            for (let i = 0; i < ar.length; i++) {
                if (i + maxIndex + 1 < ar.length) {
                    ar[i + maxIndex + 1] += all;
                    if (rest > 0) {
                        ar[i + maxIndex + 1]++;
                        rest--;
                    }
                } else {
                    ar[(i + maxIndex + 1) - ar.length] += all;
                    if (rest > 0) {
                        ar[(i + maxIndex + 1) - ar.length]++;
                        rest--;
                    }
                }
            }
            if (ar2.indexOf(ar.toString()) != -1) {
                return count - ar2.indexOf(ar.toString()) - 1;
            }
            ar2.push(ar.toString());
        } while (true);
    }
}
