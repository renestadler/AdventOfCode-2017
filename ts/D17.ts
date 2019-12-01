export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input);
        let answer2 = this.part2(input);
        return [answer1, answer2];
    }

    public static part1(input: string) {
        let steps = parseInt(input);
        let circularBuffer: BufferElement = new BufferElement(0, null);
        circularBuffer.nextElement = circularBuffer;
        for (let i = 1; i < 2018; i++) {
            for (let j = 0; j < steps; j++) {
                circularBuffer = circularBuffer.nextElement;
            }
            let nextElement = circularBuffer.nextElement;
            circularBuffer.nextElement = new BufferElement(i, nextElement);
            circularBuffer = circularBuffer.nextElement;
        };
        return (circularBuffer.nextElement.value);
    }

    public static part2(input: string) {
        let steps = parseInt(input);
        let currPos = 0;
        let result = 0;
        let limit = 50000000;
        let n = 0;
        while (n < limit) {
            if (currPos == 1)
                result = n;
            let fits = Math.floor((n - currPos) / steps);
            n += (fits + 1);
            currPos = ((currPos + ((fits + 1) * (steps + 1)) - 1) % n) + 1;
        }
        return result;
    }
}

class BufferElement {
    public value: number;
    public nextElement: BufferElement;

    constructor(value: number, nextElement: BufferElement) {
        this.value = value;
        this.nextElement = nextElement;
    }
}