class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }

    remove(key) {
        if (this.map.hasOwnProperty(key)) {
            delete this.map[key];
        }
    }
}

const map = new HashMap();
map.put('a', 1);
console.log(map.get('a')); 
map.put('b', 2);
console.log(map.get('b'))
map.remove('a');
console.log(map.get('a')); 
