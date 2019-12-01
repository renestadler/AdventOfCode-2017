export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split(","));
        let answer2 = this.part2(input.split(""));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let elems = [];
        for (let index = 0; index < 256; index++) {
            elems.push(index);
        }

        let pos = 0;
        let skip = 0;

        for (let index = 0; index < inputs.length; index++) {
            const element = parseInt(inputs[index]);
            for (let i = 0; i < element / 2; i++) {
                let temp = elems[(pos + i) % elems.length];
                elems[(pos + i) % elems.length] = elems[(element + pos - 1 - i) % elems.length];
                elems[(element + pos - 1 - i) % elems.length] = temp;
            }
            pos += element + skip;
            pos %= elems.length;
            skip++;
        }
        return (elems[0] * elems[1]);
    }

    public static part2(inputs: string[]) {
        let elems = [];
        for (let index = 0; index < 256; index++) {
            elems.push(index);
        }

        let string = String.fromCharCode(17, 31, 73, 47, 23).split('');
        for (let index = 0; index < string.length; index++) {
            inputs.push(string[index]);
        }

        let pos = 0;
        let skip = 0;

        for (let j = 0; j < 64; j++) {
            for (let index = 0; index < inputs.length; index++) {
                const element = inputs[index].charCodeAt(0);
                for (let i = 0; i < element / 2; i++) {
                    let temp = elems[(pos + i) % elems.length];
                    elems[(pos + i) % elems.length] = elems[(element + pos - 1 - i) % elems.length];
                    elems[(element + pos - 1 - i) % elems.length] = temp;
                }
                pos += element + skip;
                pos %= elems.length;
                skip++;
            }
        }

        let erg = '';
        for (let index = 0; index < 16; index++) {
            let mult = index * 16;
            let sol = elems[mult] ^ elems[1 + mult] ^ elems[2 + mult]
                ^ elems[3 + mult] ^ elems[4 + mult] ^ elems[5 + mult] ^ elems[6 + mult] ^ elems[7 + mult] ^ elems[8 + mult] ^ elems[9 + mult] ^ elems[10 + mult] ^ elems[11 + mult]
                ^ elems[12 + mult] ^ elems[13 + mult] ^ elems[14 + mult] ^ elems[15 + mult];
            erg += (sol.toString(16));
        }
        return erg;
    }
}