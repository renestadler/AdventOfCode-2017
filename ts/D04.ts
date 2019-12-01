export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let count = 0;
        loop:
        for (let i = 0; i < inputs.length; i++) {
            let ar = inputs[i].split(" ");
            for (let j = 0; j < ar.length - 1; j++) {
                for (let k = j + 1; k < ar.length; k++) {
                    if (ar[j] === ar[k]) {
                        continue loop;
                    }
                }
            }
            count++;
        }
        return (count);
    }
    public static part2(inputs: string[]) {
        let count = 0;
        loop:
        for (let i = 0; i < inputs.length; i++) {
            let ar = inputs[i].split(" ");
            for (let j = 0; j < ar.length; j++) {
                if (ar.filter(word => {
                    if (ar.findIndex((elem) => { return elem === word; }) === j) {
                        return false;
                    }
                    if (word.localeCompare(ar[j]) === 0) {
                        return true;
                    } else {
                        let first = ar[j].split("").sort((a, b) => { return a.charCodeAt(0) - b.charCodeAt(0); });
                        let second = word.split("").sort((a, b) => { return a.charCodeAt(0) - b.charCodeAt(0); });
                        if (first.length != second.length) {
                            return false;
                        }
                        for (let k = 0; k < first.length; k++) {
                            if (first[k] !== second[k]) {
                                return false;
                            }
                        }
                        return true;
                    }
                }).length !== 0) {
                    continue loop;
                }
            }
            count++;
        }
        return count;
    }
}
