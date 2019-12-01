export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split(","));
        let answer2 = this.part2(input.split(","));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let posx = 0;
        let posy = 0;
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            if (inputs[index] === 'n') {
                posx += 2;
            } else if (inputs[index] === 's') {
                posx -= 2;
            } else if (inputs[index] === 'se') {
                posx -= 1;
                posy += 1;
            } else if (inputs[index] === 'sw') {
                posx -= 1;
                posy -= 1;
            } else if (inputs[index] === 'ne') {
                posx += 1;
                posy += 1;
            } else if (inputs[index] === 'nw') {
                posx += 1;
                posy -= 1;
            }
        }
        let steps = 0;
        do {
            if (posx > 0 && posy > 0) {
                steps++;
                posx--;
                posy--;
            } else if (posx < 0 && posy > 0) {
                steps++;
                posx++;
                posy--;
            } else if (posx > 0 && posy < 0) {
                steps++;
                posx--;
                posy++;
            } else if (posx < 0 && posy < 0) {
                steps++;
                posx++;
                posy++;
            } else if (posx === 0 && posy > 0) {
                steps++;
                posx++;
                posy--;
            } else if (posx === 0 && posy < 0) {
                steps++;
                posx++;
                posy++;
            } else if (posx > 0 && posy === 0) {
                steps++;
                posx -= 2;
            } else if (posx < 0 && posy === 0) {
                steps++;
                posx += 2;
            }
        } while (posx !== 0 || posy !== 0);
        return steps;
    }

    public static part2(inputs: string[]) {
        let posx = 0;
        let posy = 0;
        let max=0;
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            if (inputs[index] === 'n') {
                posx += 2;
            } else if (inputs[index] === 's') {
                posx -= 2;
            } else if (inputs[index] === 'se') {
                posx -= 1;
                posy += 1;
            } else if (inputs[index] === 'sw') {
                posx -= 1;
                posy -= 1;
            } else if (inputs[index] === 'ne') {
                posx += 1;
                posy += 1;
            } else if (inputs[index] === 'nw') {
                posx += 1;
                posy -= 1;
            }
            let steps = 0;
            let curx=posx;
            let cury=posy;
            do {
                if (curx > 0 && cury > 0) {
                    steps++;
                    curx--;
                    cury--;
                } else if (curx < 0 && cury > 0) {
                    steps++;
                    curx++;
                    cury--;
                } else if (curx > 0 && cury < 0) {
                    steps++;
                    curx--;
                    cury++;
                } else if (curx < 0 && cury < 0) {
                    steps++;
                    curx++;
                    cury++;
                } else if (curx === 0 && cury > 0) {
                    steps++;
                    curx++;
                    cury--;
                } else if (curx === 0 && cury < 0) {
                    steps++;
                    curx++;
                    cury++;
                } else if (curx > 0 && cury === 0) {
                    steps++;
                    curx -= 2;
                } else if (curx < 0 && cury === 0) {
                    steps++;
                    curx += 2;
                }
            } while (curx !== 0 || cury !== 0);
            if(steps>max){
                max=steps;
            }
        }
        return max;
    }
}