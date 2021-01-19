const graph = {
    'you': ['alice', 'bob', 'claire'],
    'bob': ['anuj', 'peggy'],
    'alice': ['peggy'],
    'claire': ['thom', 'jonny'],
    'anuj': [],
    'peggy': [],
    'thom': [],
    'jonny': [],
}

class Graph {
    /**
     * Список вершин и вершин смежных с ними
    */

    constructor(list) {
        this.store = list || {};
    };

    /**
     * Вывод списка смежных вершин
    */

    getList() {
        return this.store();
    }

    /** Добавить вершину */

    addVertex(key, value) {
        if (!Array.isArray(value) || !key) return;
        this.store[key] = value;
    }

    /** Добавить ребро между вершинами first и second */

    addEdge(first, second) {
        if (!this.store[first] || !this.store[second]) return;

        const firstValid = this.isValid(second, first),
            secondValid = this.isValid(first, second);

        if (firstValid)
            this.addFriends(second, first);
        if (secondValid)
            this.addFriends(first, second);
    }

    /** Проверка есть ли среди смежных вершин first 
     * вершина second и наоборот */

    isValid(key, value) {
        return this.store[key].indexOf(value) === -1
    }

    /** Добавляет вершину name в список key */

    addFriends(key, name) {
        this.store[key].push(name)
    }

    /** Возвращает список смежных вершин у key */

    getVertex(key) {
        return this.store[key]
    }
}

const mates = new Graph(graph);
mates.addVertex('jimm', [])
mates.addEdge('claire', 'peggy');
console.log(mates.getVertex('claire'));
console.log(mates.getVertex('peggy'));