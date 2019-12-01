export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input);
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(input) {
        let tm = TuringMachine.fromString(input);
        tm.run();
        return tm.ones.size;
    }

    public static part2(input: string[]) {
    }
}interface Command {
    valueToWrite: number,
    move: number,
    nextState: string
}

interface State {
    name: string,
    [command: number]: Command
}

type StateCollection = { [name: string]: State };

class TuringMachine {

    currentState: State;
    position = 0;
    ones = new Set<number>();

    constructor(public states: StateCollection, public runtime: number, initialState: string) {
        this.currentState = this.states[initialState];
    }

    private execute() {
        let currentValue = this.ones.has(this.position) ? 1 : 0;
        let command = this.currentState[currentValue];
        this.ones[command.valueToWrite ? 'add' : 'delete'](this.position);
        this.position += command.move;
        this.currentState = this.states[command.nextState];
    }

    run() {
        // my util.ts "range" function using generators took this execution time from
        // ~2.5s to ~9.5s for ~12.5M iterations. So I guess the clunky old for loop 
        // isn't going away anytime soon.
        for (let i = 0; i < this.runtime; i++) {
            this.execute();
        }
    }

    static fromString(input: string) {
        let lines = input.split('\r\n');
        let runtime = +(/after (\d+) steps\./.exec(lines[1])[1]);
        let states: StateCollection = {};

        for (let i = 3; i < lines.length; i += 10) {
            let name = /In state (\w):/.exec(lines[i])[1];
            let state: State = { 'name': name };
            for (let j of [i + 1, i + 5]) {
                state[+(/If the current value is (\d):/.exec(lines[j])[1])] = {
                    valueToWrite: +(/Write the value (\d)\./.exec(lines[j + 1])[1]),
                    move: lines[j + 2].indexOf('right') == -1 ? -1 : +1,
                    nextState: /Continue with state (\w)\./.exec(lines[j + 3])[1]
                };
            }
            states[name] = state;
        }

        let initialState = /Begin in state (\w)./.exec(lines[0])[1];
        return new TuringMachine(states, runtime, initialState);
    }
}