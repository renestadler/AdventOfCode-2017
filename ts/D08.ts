export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let registers: Register[] = [];
        for (let i = 0; i < inputs.length; i++) {
            let change = inputs[i].split(" if ")[0];
            let cause = inputs[i].split(" if ")[1];

            let currentRegister: Register;
            if (registers.find(item => { return item.name === change.split(" ")[0] }) === undefined) {
                currentRegister = new Register(change.split(" ")[0], 0);
                registers.push(currentRegister);
            } else {
                currentRegister = registers.find(item => { return item.name === change.split(" ")[0] });
            }
            if (cause.includes(" < ")) {
                let condition = parseInt(cause.split(" < ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" < ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" < ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" < ")[0] });
                }
                if (checkRegister.value < condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" <= ")) {
                let condition = parseInt(cause.split(" <= ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" <= ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" <= ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" <= ")[0] });
                }
                if (checkRegister.value <= condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" >= ")) {
                let condition = parseInt(cause.split(" >= ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" >= ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" >= ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" >= ")[0] });
                }
                if (checkRegister.value >= condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" > ")) {
                let condition = parseInt(cause.split(" > ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" > ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" > ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" > ")[0] });
                }
                if (checkRegister.value > condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" == ")) {
                let condition = parseInt(cause.split(" == ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" == ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" == ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" == ")[0] });
                }
                if (checkRegister.value === condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" != ")) {
                let condition = parseInt(cause.split(" != ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" != ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" != ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" != ")[0] });
                }
                if (checkRegister.value !== condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else {
                console.log(cause);
            }
        }
        registers.sort((a,b)=>b.value-a.value);
        return registers[0].value;
    }

    public static part2(inputs: string[]) {
        
        let registers: Register[] = [];
        let globalMax=0;
        for (let i = 0; i < inputs.length; i++) {
            registers.sort((a,b)=>b.value-a.value);
            if(registers.length!==0&&registers[0].value>globalMax){
                globalMax=registers[0].value;
            }
            let change = inputs[i].split(" if ")[0];
            let cause = inputs[i].split(" if ")[1];

            let currentRegister: Register;
            if (registers.find(item => { return item.name === change.split(" ")[0] }) === undefined) {
                currentRegister = new Register(change.split(" ")[0], 0);
                registers.push(currentRegister);
            } else {
                currentRegister = registers.find(item => { return item.name === change.split(" ")[0] });
            }
            if (cause.includes(" < ")) {
                let condition = parseInt(cause.split(" < ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" < ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" < ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" < ")[0] });
                }
                if (checkRegister.value < condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" <= ")) {
                let condition = parseInt(cause.split(" <= ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" <= ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" <= ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" <= ")[0] });
                }
                if (checkRegister.value <= condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" >= ")) {
                let condition = parseInt(cause.split(" >= ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" >= ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" >= ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" >= ")[0] });
                }
                if (checkRegister.value >= condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" > ")) {
                let condition = parseInt(cause.split(" > ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" > ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" > ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" > ")[0] });
                }
                if (checkRegister.value > condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" == ")) {
                let condition = parseInt(cause.split(" == ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" == ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" == ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" == ")[0] });
                }
                if (checkRegister.value === condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else if (cause.includes(" != ")) {
                let condition = parseInt(cause.split(" != ")[1]);
                let checkRegister: Register;
                if (registers.find(item => { return item.name === cause.split(" != ")[0] }) === undefined) {
                    checkRegister = new Register(cause.split(" != ")[0], 0);
                    registers.push(checkRegister);
                } else {
                    checkRegister = registers.find(item => { return item.name === cause.split(" != ")[0] });
                }
                if (checkRegister.value !== condition) {
                    if (change.includes("inc")) {
                        currentRegister.value += parseInt(change.split(" inc ")[1]);
                    }
                    if (change.includes("dec")) {
                        currentRegister.value -= parseInt(change.split(" dec ")[1]);
                    }
                }
            } else {
                console.log(cause);
            }
        }
        return globalMax;
    }
}

class Register {
    public name: string;
    public value: number;

    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}