// Symbols
const uniqueId = Symbol('Hello');
const obj = {
    [uniqueId]: 'Hello',
    __id: 'Hello'
};
console.log(obj);

// Well known symbols
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';
const it  = arr[Symbol.iterator]();

// Com while 
while (true) {
    let { value, done } = it.next();
    if (done) {
        break;
    }
    console.log(value);
}

// Com for
for (let value of arr) {
    console.log(value);
}

// Com Objetos
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }    
};
for (let value of obj) {
    console.log(value);
}

// Generators
function* hello() {
    console.log('Hello');
    yield 1;
    console.log('From');
    const value = yield 2;
    console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));

function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}
const it = naturalNumbers();

// Generators com objetos
const obj = {
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
};
for (let value of obj) {
    console.log(value);
}