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

class Bfs {
    /**
     * Создаю очередь и массив проверенных.
     */

    constructor() {
        this.queue = [];
        this.searched = [];
    };
    /**
     *  Проверяю последнюю букву в имени. Если == 'm', тогда это продавец.
     */

    isSeller(person) {
        return person.charAt(person.length - 1) === 'm';
    }

    /** 
     *  Вызываю функцию с текущим человеком.
     *  Добавляю в очередь его друзей.
     *  Беру первого друга и проверяю продавец ли он. 
     *  Если да, тогда вывожу продавца в консоль.
     *  Иначе добавляю его в this.searched, а в this.queue ставлю его друзей.
    */

    findSeller(name) {
        if (!Array.isArray(name)) return;
        this.queue = this.queue.concat(name);
        while (this.queue.length > 0) {
            const person = this.queue.shift();
            if (this.searched.indexOf(person) === -1) {
                if (this.isSeller(person)) {
                    console.log(`${person} is seller`);
                    return person;
                }
                else {
                    this.searched.push(person);
                    this.queue = this.queue.concat(graph[person]);
                };
            }
        }
    }
}

const search = new Bfs();
search.findSeller(graph.you)