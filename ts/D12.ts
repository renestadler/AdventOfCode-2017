export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input.split("\n"));
        let answer2 = this.part2(input.split("\n"));
        return [answer1, answer2];
    }

    public static part1(inputs: string[]) {
        let connectors: Connector[] = [];
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            let conns = element.split(" <-> ")[1].split(", ");
            let connections: number[] = [];
            for (const object of conns) {
                connections.push(parseInt(object));
            }
            connectors.push(new Connector(parseInt(element.split(" <-> ")[0]), connections));
        }
        connectors.sort((a, b) => (a.id - b.id));
        let connected: Connector[] = [];
        connected.push(connectors[0]);
        for (let index = 0; index < connected.length; index++) {
            for (let index2 = 0; index2 < connected[index].connections.length; index2++) {
                const element = connected[index].connections[index2];
                if (connected.findIndex(a => a.id === element) === -1) {
                    connected.push(connectors.find(a => a.id === element));
                }

            }
        }
        return connected.length;
    }

    public static part2(inputs: string[]) {
        let connectors: Connector[] = [];
        for (let index = 0; index < inputs.length; index++) {
            const element = inputs[index];
            let conns = element.split(" <-> ")[1].split(", ");
            let connections: number[] = [];
            for (const object of conns) {
                connections.push(parseInt(object));
            }
            connectors.push(new Connector(parseInt(element.split(" <-> ")[0]), connections));
        }
        let numGroups = 0;
        do {
            connectors.sort((a, b) => (a.id - b.id));
            let connected: Connector[] = [];
            connected.push(connectors[0]);
            connectors.splice(0, 1);
            for (let index = 0; index < connected.length; index++) {
                for (let index2 = 0; index2 < connected[index].connections.length; index2++) {
                    const element = connected[index].connections[index2];
                    if (connected.findIndex(a => a.id === element) === -1) {
                        connected.push(connectors.splice(connectors.findIndex(a => a.id === element), 1)[0]);
                    }

                }
            }
            numGroups++;
        } while (connectors.length > 0);
        return numGroups;
    }
}

class Connector {
    public id: number;
    public connections: number[] = [];
    constructor(id: number, connections: number[]) {
        this.id = id;
        this.connections = connections;
    }
}