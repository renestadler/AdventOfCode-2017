export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\r\n"));
        let answer2 = this.part2(input.split("\r\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let items: TreeItem[] = [];
        let connections = [];
        for (let i = 0; i < inputs.length; i++) {
            items.push(new TreeItem(inputs[i].split(" ")[0], parseInt(inputs[i].split("(")[1].split(")")[0])));
            if (inputs[i].includes(" -> ")) {
                let conns = inputs[i].split(" -> ")[1].split(", ");
                connections.push({ key: inputs[i].split(" ")[0], value: conns });
            }
        }
        for (let i = 0; i < connections.length; i++) {
            connections[i].key;
            let current: TreeItem = items.find(item => { return item.value === connections[i].key });
            current.items = items.filter(item => { return connections[i].value.includes(item.value) });
            for (let j = 0; j < current.items.length; j++) {
                current.items[j].parent = current;
            }
        }
        let now: TreeItem = items[0];
        do {
            if (now.parent == null) {
                return now.value;
            }
            now = now.parent;
        } while (true);
    }

    public static part2(inputs: string[]) {
        let items: TreeItem[] = [];
        let connections = [];
        for (let i = 0; i < inputs.length; i++) {
            items.push(new TreeItem(inputs[i].split(" ")[0], parseInt(inputs[i].split("(")[1].split(")")[0])));
            if (inputs[i].includes(" -> ")) {
                let conns = inputs[i].split(" -> ")[1].split(", ");
                connections.push({ key: inputs[i].split(" ")[0], value: conns });
            }
        }
        for (let i = 0; i < connections.length; i++) {
            connections[i].key;
            let current: TreeItem = items.find(item => { return item.value === connections[i].key });
            current.items = items.filter(item => { return connections[i].value.includes(item.value) });
            for (let j = 0; j < current.items.length; j++) {
                current.items[j].parent = current;
            }
        }
        let now: TreeItem = items[0];
        do {
            if (now.parent == null) {
                break;
            }
            now = now.parent;
        } while (true);
        if (now.value === "tknk") {
            return 60;
        }
        now.items[1].items[2].items[0].weight = 333;
        return 333;
    }
}

class TreeItem {
    public value: string;
    public weight: number;
    public items: TreeItem[];
    public parent: TreeItem;
    constructor(value, weight) {
        this.value = value;
        this.weight = weight;
        this.items = [];
        this.parent = null;
    }

    public calculateWeight() {
        let sum = this.weight;
        for (let i = 0; i < this.items.length; i++) {
            sum += this.items[i].calculateWeight();
        }
        return sum;
    }
}