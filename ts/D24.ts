export class Main {
    public static start(input: string) {
        let answer1 = this.part1(input);
        let answer2 = this.part2(input);
        return [answer1, answer2];
    }

    public static part1(input: string) {
        let nodes = makeJunkTree(input);
        return nodes
            .filter(n => n.isLeaf)
            .reduce((a, c) => Math.max(c.strength, a), 0);
    }

    public static part2(input: string) {
        return makeJunkTree(input)
            .filter(n => n.isLeaf)
            .sort((x,y) => (y.height - x.height) || (y.strength - x.strength))[0]
            .strength;
    }

}

type Component = [number, number];

// it's a festive pile of old garbage!
export function makeJunkTree(input: string) {
    let junk = input.split('\r\n')
        .map(line => line.split('/'))
        .map(pair => <Component>[Number(pair[0]), Number(pair[1])]);

    let root = new JunkTreeNode([0, 0]);
    let result: JunkTreeNode[] = [];
    buildTree(root, junk, result);
    return result;
}

function buildTree(parent: JunkTreeNode, available: Component[], result: JunkTreeNode[]) {
    for (let childComponent of available.filter(j => j.indexOf(parent.availableConnector) != -1)) {
        let child = new JunkTreeNode(childComponent, parent);
        parent.children.push(child);
        let availableToChildren = available.filter(j => j != childComponent);
        buildTree(child, availableToChildren, result);
    }
    result.push(parent);
}

export class JunkTreeNode {

    constructor(public component: Component, public parent: JunkTreeNode = undefined) { }
    children: JunkTreeNode[] = [];

    get availableConnector(): number {
        if (this.isRoot) return 0;
        return this.parent.availableConnector == this.component[0] ? this.component[1] : this.component[0];
    }

    get strength(): number {
        return this.component[0] + this.component[1] + (this.isRoot ? 0 : this.parent.strength);
    }

    get height(): number {
        return this.isRoot ? 0 : this.parent.height + 1;
    }

    get isRoot() { return !this.parent; }
    get isLeaf() { return !this.children.length; }
}