const graph = {
    'start': { 'A': 5, 'B': 2 },
    'A': { 'C': 4, 'D': 2 },
    'B': { 'A': 8, 'D': 7 },
    'C': { 'finish': 3, 'D': 6 },
    'D': { 'finish': 1 },
    'finish': {}
};

class Djkstra {
    constructor() {
        this.processed = [];
        this.costs = {};
        this.parents = {};
		this.graph = null;
    }

    createCosts() {
        this.createGraph(this.costs, Infinity, 'costs');
    }

    createParents() {
        this.createGraph(this.parents, null, 'parents');
    }

    createGraph(element, filler, type) {
        const keys = Object.keys(this.graph);
        keys.forEach(el => {
            if (el == 'start') return;
            element[el] = filler;
        });
        Object.keys(this.graph[keys[0]]).forEach(el => {
            if(type == 'parents')
              element[el] = keys[0];
            else if(type = 'costs')
              element[el] = this.graph[keys[0]][el];
        });
    }

    findLowestCostNode() {
        let lowestCost = Infinity,
            lowestCostNode = null;
        for (let i in this.costs) {
            if (this.processed.includes(i)) continue;
            if (this.costs[i] < lowestCost) {
                lowestCost = this.costs[i];
                lowestCostNode = i;
            }
        };
        return lowestCostNode;
    }
	
	findWay(graph){
        if(Object.keys(graph).length){
            this.graph = graph;
			this.createCosts();
			this.createParents();
			console.log(this.costs)
			let node = this.findLowestCostNode();
			
			while(this.processed.length != Object.keys(this.costs).length){
				/* Беру цену самой дешевой ноды */
				const cost = this.costs[node];
				/* Ищу ее соседей */
				const neighbors = this.graph[node];
				/* Иду по соседям и смотрю сколько стоит переход к ним от самой дешевой ноды*/
				Object.keys(neighbors).forEach(el => {
					const newCost = cost + neighbors[el] // Цена от начала до соседней ноды от дешевой ноды
					if(newCost < this.costs[el]){
						this.costs[el] = newCost;
						this.parents[el] = node
					}
				});
				this.processed.push(node);
				node = this.findLowestCostNode();
			}
		}
		return this.costs;
    }
}

const a = new Djkstra();
console.log(a.findWay(graph));