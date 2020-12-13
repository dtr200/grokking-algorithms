class HashMap {
    constructor(size) {
        this.initSize = 10;
        this.size = size || this.initSize;
        this.store = new Array(this.size);
    }

    hash(key) {
        if (typeof key == 'string') {
            let sum = 0;
            for (let i = 0; i < key.length; i++)
                sum += key.charCodeAt(i);
            return sum % this.store.length;
        }
        else if (typeof key == 'number') {
            return key % this.store.length;
        };
    }

    add(key, value) {
        this.store[this.hash(key)] = this.store[this.hash(key)] || [];
        this.store[this.hash(key)].push({ key, value });
    }

    get(key) {
        return this.store[this.hash(key)].find(el => el.key === key).value;
    }

    remove(key) {
        //найти значение и удалить
    }

    clear() {
        //очистить таблицу
    }

    each() {
        //пройтись по всем ключам
    }

    increase() {
        // создать массив аналогичной длины и concat
    }
}

const map = new HashMap();
map.add('one', '505');
console.log(map.get('one'));

