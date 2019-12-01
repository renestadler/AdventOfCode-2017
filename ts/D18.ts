export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input: string[]) {
        let registers: Register[] = [];
        let frequencies: Register[] = [];
        let pos = 0;
        do {
            let args = input[pos].split(" ");
            switch (args[0]) {
                case 'set':
                    if (isNaN(parseInt(args[2]))) {
                        if (registers.findIndex(r => r.name === args[2].trim()) !== -1) {
                            let index2 = registers.findIndex(r => r.name === args[2].trim());
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value = registers[index2].value;
                            } else {
                                registers.push(new Register(args[1].trim(), registers[index2].value));
                            }
                        } else {
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value = 0;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        }
                    }
                    else {
                        if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index = registers.findIndex(r => r.name === args[1].trim());
                            registers[index].value = parseInt(args[2]);
                        } else {
                            registers.push(new Register(args[1].trim(), parseInt(args[2])));
                        }
                    }
                    break;
                case 'mul':
                    if (isNaN(parseInt(args[2]))) {
                        if (registers.findIndex(r => r.name === args[2].trim()) !== -1) {
                            let index2 = registers.findIndex(r => r.name === args[2].trim());
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value *= registers[index2].value;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        } else {
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value = 0;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        }
                    }
                    else {
                        if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index = registers.findIndex(r => r.name === args[1].trim());
                            registers[index].value *= parseInt(args[2]);
                        } else {
                            registers.push(new Register(args[1].trim(), 0));
                        }
                    }
                    break;
                case 'add':
                    if (isNaN(parseInt(args[2]))) {
                        if (registers.findIndex(r => r.name === args[2].trim()) !== -1) {
                            let index2 = registers.findIndex(r => r.name === args[2].trim());
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value += registers[index2].value;
                            } else {
                                registers.push(new Register(args[1].trim(), registers[index2].value));
                            }
                        } else {
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value += 0;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        }
                    }
                    else {
                        if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index = registers.findIndex(r => r.name === args[1].trim());
                            registers[index].value += parseInt(args[2]);
                        } else {
                            registers.push(new Register(args[1].trim(), parseInt(args[2])));
                        }
                    }
                    break;
                case 'mod':
                    if (isNaN(parseInt(args[2]))) {
                        if (registers.findIndex(r => r.name === args[2].trim()) !== -1) {
                            let index2 = registers.findIndex(r => r.name === args[2].trim());
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value %= registers[index2].value;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        } else {
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                registers[index].value %= 0;
                            } else {
                                registers.push(new Register(args[1].trim(), 0));
                            }
                        }
                    }
                    else {
                        if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index = registers.findIndex(r => r.name === args[1].trim());
                            registers[index].value %= parseInt(args[2]);
                        } else {
                            registers.push(new Register(args[1].trim(), 0));
                        }
                    }
                    break;
                case 'jgz':
                    if (isNaN(parseInt(args[2]))) {
                        if (registers.findIndex(r => r.name === args[2].trim()) !== -1) {
                            let index2 = registers.findIndex(r => r.name === args[1].trim());
                            if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                                let index = registers.findIndex(r => r.name === args[1].trim());
                                if (registers[index].value > 0) {
                                    pos += registers[index2].value;
                                    pos--;
                                }
                            }
                        }
                    } else {
                        if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index = registers.findIndex(r => r.name === args[1].trim());
                            if (registers[index].value > 0) {
                                pos += parseInt(args[2]);
                                pos--;
                            }
                        }
                    }
                    break;
                case 'snd':
                    if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                        let index = registers.findIndex(r => r.name === args[1].trim());
                        if (frequencies.findIndex(r => r.name === args[1].trim()) !== -1) {
                            let index2 = frequencies.findIndex(r => r.name === args[1].trim());
                            frequencies[index2].value = registers[index].value;
                        } else {
                            frequencies.push(new Register(args[1].trim(), registers[index].value));
                        }
                    }
                    break;
                case 'rcv':
                    if (registers.findIndex(r => r.name === args[1].trim()) !== -1) {
                        let index = registers.findIndex(r => r.name === args[1].trim());
                        if (registers[index].value > 0) {
                            if (frequencies.findIndex(r => r.name === args[1].trim()) !== -1) {
                                return frequencies.find(r => r.name === args[1].trim()).value;
                            }
                        }
                    }
                    break;
            }
            pos++;
        } while (pos < input.length);
    }

    public static part2(input: string[]) {

        let instr = input.map(l => l.split(' ').map(r => r.trim()));

        let registersP0 = { p: 0 };
        let registersP1 = { p: 1 };

        let totalSendsP1 = 0;

        let rcvQueueP0 = [];
        let rcvQueueP1 = [];

        let pc0 = 0;
        let pc1 = 0;

        function step(pc, registers, rcvQueue, sendQueue) {
            function get(x) {
                var y = Number(x);

                return isNaN(y) ? (registers[x] || 0) : y;
            }

            var pieces = instr[pc];

            var sentValue = false;
            var waiting = false;

            switch (pieces[0]) {
                case 'set':
                    registers[pieces[1]] = get(pieces[2]);
                    break;
                case 'add':
                    registers[pieces[1]] += get(pieces[2]);
                    break;
                case 'mul':
                    registers[pieces[1]] *= get(pieces[2]);
                    break;
                case 'mod':
                    registers[pieces[1]] %= get(pieces[2]);
                    break;
                case 'snd':
                    sendQueue.push(get(pieces[1]));
                    sentValue = true;
                    break;
                case 'rcv':
                    if (rcvQueue.length != 0) {
                        registers[pieces[1]] = rcvQueue[0];
                        rcvQueue.splice(0, 1);
                    } else {
                        pc--;
                        waiting = true;
                    }
                    break;
                case 'jgz':
                    if (get(pieces[1]) > 0) {
                        pc += get(pieces[2]) - 1;
                    }
                    break;
                default:
                    console.log('Invalid instruction: ' + pieces[0]);
                    break;
            }

            return <any>{ pc: pc + 1, sentValue: sentValue, waiting: waiting };
        }

        while (true) {
            var state0 = pc0 < instr.length ? step(pc0, registersP0, rcvQueueP0, rcvQueueP1) : { waiting: true };
            var state1 = pc1 < instr.length ? step(pc1, registersP1, rcvQueueP1, rcvQueueP0) : { waiting: true };

            pc0 = state0.pc;
            pc1 = state1.pc;

            if (state1.sentValue) {
                totalSendsP1++;
            }

            if (state0.waiting && state1.waiting) {
                break;
            }
        }
        return totalSendsP1;
    }
}

class Register {
    public name: string;
    public value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}