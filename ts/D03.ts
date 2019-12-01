export class Main {
    public static start(input: string) {
        let answer1 = this.part1(parseInt(input));
        let answer2 = this.part2(parseInt(input));
        return [answer1, answer2];
    }

    public static part1(inputs: number) {
        let count = 1;
        do {
            count += 2;
        } while (count * count < inputs);
        count -= 2;
        return (((inputs - count * count) % (((count - 1) / 2) + 1)) + (count - 1) / 2 + 1);
    }
    public static part2(inputs: number) {
        let points: Point[] = [];
        points.push(new Point(0, 0, 1));
        points.push(new Point(1, 0, 1));
        let direction = 0;
        let x = 1, y = 0;
        let count = 0;
        let repetition = 2;
        do {
            count++;
            if (count % repetition == 0) {
                direction++;
                if (direction == 4) {
                    direction = 0;
                    x++;
                    y++;
                    repetition += 2;
                }
            }
            switch (direction) {
                case 0:
                    y--;
                    break;
                case 1:
                    x--;
                    break;
                case 2:
                    y++;
                    break;
                case 3:
                    x++;
                    break;
            }
            let newPoints = points.filter(point => point.x <= x + 1 && point.x >= x - 1 && point.y <= y + 1 && point.y >= y - 1);
            let mass = 0;
            for (let j = 0; j < newPoints.length; j++) {
                mass += newPoints[j].value;
            }
            points.push(new Point(x, y, mass));
            if (mass > inputs) {
                return (mass);
            }
        } while (true);
    }
}

class Point {
    public x: number;
    public y: number;
    public value: number;

    constructor(x, y, value) {
        this.x = x;
        this.y = y;
        this.value = value;
    }
}