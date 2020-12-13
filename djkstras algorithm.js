const graph = {
    'start': { 'A': 5, 'B': 2 },
    'A': { 'C': 4, 'D': 2 },
    'B': { 'A': 8, 'D': 7 },
    'C': { 'finish': 3, 'D': 6 },
    'D': { 'finish': 1 },
    'finish': {}
};

const costs = {
    'A': 5,
    'B': 2,
    'C': Infinity,
    'D': Infinity,
    'finish': Infinity
};

const parents = {
    'A': 'start',
    'B': 'start',
    'C': null,
    'D': null,
    'finish': null
};

class Djkstra {
    constructor(graph) {
        this.processed = [];
        this.graph = graph || null;
        this.costs = {};
        this.parents = {};
    }

    createCosts(graph) {
        const keys = Object.keys(graph);

        keys.forEach(el => {
            if (el == 'start') return;
            this.costs[el] = Infinity;
        });

        Object.keys(graph[keys[0]]).forEach(el => {
            this.costs[el] = graph[keys[0]][el];
        });
    }

    createParents(graph) {
        //this.createGraph(this.parents, null, keys[0]);
        const keys = Object.keys(graph);

        keys.forEach(el => {
            if (el == 'start') return;
            this.parents[el] = null;
        });

        Object.keys(graph[keys[0]]).forEach(el => {
            this.parents[el] = keys[0];
        });
    }

    createGraph(element, filler, initial) {
        const keys = Object.keys(this.graph);

        keys.forEach(el => {
            if (el == 'start') return;
            element[el] = filler;
        });

        Object.keys(graph[keys[0]]).forEach(el => {
            element[el] = initial;
        });
    }

    findLowestCostNode(costs) {
        let lowestCost = Infinity,
            lowestCostNode = null;
        for (let i in costs) {
            if (this.processed.includes(i)) continue;
            if (costs[i] < lowestCost) {
                lowestCost = costs[i];
                lowestCostNode = i;
            }
        };
        return lowestCostNode;
    }
}

const a = new Djkstra();
a.createCosts(graph);
a.createParents(graph);