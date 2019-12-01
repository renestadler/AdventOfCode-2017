export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let field: string[][] = [];
        for (let i = 0; i < input.length; i++) {
            field[i] = input[i].split("");
        }
        let posX = 0;
        let posY = 0;
        for (let i = 0; i < field[0].length; i++) {
            if (field[0][i] == '|') {
                posY = i;
            }
        }
        let direction = 0;
        let result = '';
        do {
            switch (field[posX][posY]) {
                case '+':
                    switch (direction) {
                        case 0:
                            if (field[posX][posY - 1] != ' ') {
                                direction = 3;
                            } else {
                                direction = 1;
                            }
                            break;
                        case 1:
                            if (field[posX - 1][posY] != ' ') {
                                direction = 2;
                            } else {
                                direction = 0;
                            } break;
                        case 2:
                            if (field[posX][posY - 1] != ' ') {
                                direction = 3;
                            } else {
                                direction = 1;
                            } break;
                        case 3:
                            if (field[posX - 1][posY] != ' ') {
                                direction = 2;
                            } else {
                                direction = 0;
                            } break;
                    }
                    break;
                case '-': case '|': break;
                default: result += field[posX][posY];
            }
            switch (direction) {
                case 0: posX++; break;
                case 1: posY++; break;
                case 2: posX--; break;
                case 3: posY--; break;
            }

        } while (field[posX][posY] != ' ');
        return result;
    }

    public static part2(input: string[]) {
        let field: string[][] = [];
        for (let i = 0; i < input.length; i++) {
            field[i] = input[i].split("");
        }
        let posX = 0;
        let posY = 0;
        for (let i = 0; i < field[0].length; i++) {
            if (field[0][i] == '|') {
                posY = i;
            }
        }
        let direction = 0;
        let result = '';
        let steps=0;
        do {
            switch (field[posX][posY]) {
                case '+':
                    switch (direction) {
                        case 0:
                            if (field[posX][posY - 1] != ' ') {
                                direction = 3;
                            } else {
                                direction = 1;
                            }
                            break;
                        case 1:
                            if (field[posX - 1][posY] != ' ') {
                                direction = 2;
                            } else {
                                direction = 0;
                            } break;
                        case 2:
                            if (field[posX][posY - 1] != ' ') {
                                direction = 3;
                            } else {
                                direction = 1;
                            } break;
                        case 3:
                            if (field[posX - 1][posY] != ' ') {
                                direction = 2;
                            } else {
                                direction = 0;
                            } break;
                    }
                    break;
                case '-': case '|': break;
                default: result += field[posX][posY];
            }
            switch (direction) {
                case 0: posX++; break;
                case 1: posY++; break;
                case 2: posX--; break;
                case 3: posY--; break;
            }
            steps++;

        } while (field[posX][posY] != ' ');
        return steps;
    }
}