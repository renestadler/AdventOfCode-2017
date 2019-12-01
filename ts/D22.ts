export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let map: Map<string, string> = new Map();
        for (let i = 0; i < input.length; i++) {
            let innerField = input[i].split("");
            for (let j = 0; j < innerField.length; j++) {
                map.set(i + "," + j, innerField[j]);
            }
        }
        let walker = new Walker(new Position((input.length - 1) / 2, (input.length - 1) / 2), 0);
        let numBursts = 0;
        for (let i = 0; i < 10000; i++) {
            if (!map.has(walker.location.asString()) || map.get(walker.location.asString()) == '.') {
                walker.turnLeft();
                map.set(walker.location.asString(), '#');
                walker.move();
                numBursts++;
            } else {
                walker.turnRight();
                map.set(walker.location.asString(), '.');
                walker.move();
            }
        }
        return numBursts;
    }

    public static part2(input: string[]) {
        let map: Map<string, string> = new Map();
        for (let i = 0; i < input.length; i++) {
            let innerField = input[i].split("");
            for (let j = 0; j < innerField.length; j++) {
                map.set(i + "," + j, innerField[j]);
            }
        }
        let walker = new Walker(new Position((input.length - 1) / 2, (input.length - 1) / 2), 0);
        let numBursts = 0;
        for (let i = 0; i < 10000000; i++) {
            if (!map.has(walker.location.asString()) || map.get(walker.location.asString()) === '.') {
                walker.turnLeft();
                map.set(walker.location.asString(), 'W');
                walker.move();
            } else if (map.get(walker.location.asString()) === 'W') {
                map.set(walker.location.asString(), '#');
                walker.move();
                numBursts++;
            } else if (map.get(walker.location.asString()) === '#') {
                walker.turnRight();
                map.set(walker.location.asString(), 'F');
                walker.move();
            } else if (map.get(walker.location.asString()) === 'F') {
                walker.reverse();
                map.set(walker.location.asString(), '.');
                walker.move();
            }
        }
        return numBursts;
    }
}

class Position {
    public x: number;
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public asString(): string {
        return this.x + "," + this.y;
    }
}

class Walker {
    public location: Position;
    public direction: number;

    constructor(loc: Position, dir: number) {
        this.location = loc;
        this.direction = dir;
    }

    public turnLeft() {
        this.direction--;
        if (this.direction < 0) {
            this.direction = 3;
        }
    }

    public turnRight() {
        this.direction++;
        if (this.direction > 3) {
            this.direction = 0;
        }
    }

    public reverse() {
        this.direction += 2;
        if (this.direction > 3) {
            this.direction -= 4;
        }
    }
    public move() {
        switch (this.direction) {
            case 0:
                this.location.x--;
                break;
            case 1:
                this.location.y++;
                break;
            case 2:
                this.location.x++;
                break;
            case 3:
                this.location.y--;
                break;
        }
    }
}