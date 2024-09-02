export const logSpace = () => {
    console.log("==== ==== ====");
};

export const zipTag = (strings, ...expressions) => {
    return expressions.map((e, i) => `${e}${strings[i + 1]}`).join("");
};

export class AsyncEmitter {
    #max = 0;
    #asyncIdx = 0;

    constructor(max) {
        this.#max = max;
    }

    /* 创建待响应的 promise
    async function asyncCount() {
        let emitter = new Emitter(5);
        for await (const x of emitter) {
            console.log(x);
        }
    } */
    async *[Symbol.asyncIterator]() {
        while (this.#asyncIdx < this.#max) {
            yield new Promise((resolve) => resolve(this.#asyncIdx++));
        }
    }

    /* 
        Emitter[Symbol.hasInstance](emitter) false
        emitter instanceof Emitter           false
     */
    static [Symbol.hasInstance]() {
        return false;
    }
}

export class Emitter {
    #max = 0;
    #idx = 0;
    constructor(max) {
        this.#max = max;
    }
    *[Symbol.iterator]() {
        while (this.#idx < this.#max) {
            yield this.#idx++;
        }
    }
}

export class StringMatcher {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.match](target) {
        return target.includes(this.#str);
    }
}
