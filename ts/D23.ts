export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let instructions = input.map(l => l.split(' ').map(r => r.trim()));
        const registers = {};
        let offset = 0, count = 0;
        while(offset >= 0 && offset < instructions.length) {
            const [op, a, b] = instructions[offset];
            switch(op) {
                case 'set':
                    registers[a] = this.getValue(b, registers);
                break;
                case 'sub':
                    registers[a] = this.getValue(a, registers) - this.getValue(b, registers);
                break;
                case 'mul':
                    registers[a] = this.getValue(a, registers) * this.getValue(b, registers);
                    count++;
                break;
                case 'jnz':
                    if(this.getValue(a, registers) !== 0) {
                        offset += this.getValue(b, registers) - 1;
                    }
                break;
            }
            offset++;
        }
    
        return count;
    }
    
    public static getValue(value, registers) {
        if(value.match(/[a-z]/)) {
            return registers[value] || 0;
        }
        return Number(value);
    }

    public static part2(input: string[]) {
        if(!input){
            return 0;
        }
        let b = parseInt(input[0].split(" ")[2]); 
        let h = 0;

        b = b * 100 + 100000;
        for(let i = b; i <= b + 17000; i += 17) {
            for(let j = 2; j < i; j++) {
                if(i % j === 0) {
                    h++;
                    break;
                }
            }
        }
        
        return h;
    }
}