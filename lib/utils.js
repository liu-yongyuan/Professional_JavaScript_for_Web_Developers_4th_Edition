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

export class StringSplitter {
    #str;
    constructor(str) {
        this.#str = str;
    }
    [Symbol.split](target) {
        return target.split(this.#str);
    }
}

export function executeMillionsCount(executeFunction) {
    let start = Date.now();

    executeFunction();

    let stop = Date.now(),
        result = stop - start;
    console.log(start, stop, result);
}

/**
 * 搜索指定字符在字符中的所有位置，并返回所有下标
 * @param {*} sourceString 字符文本 示例："Lorem ipsum dolor sit amet, consectetur adipisicing elit"
 * @param {*} searchString 指定字符串，用于在字符文本中匹配。示例："e"
 * @returns {*} 下标数组 [ 3, 24, 32, 35, 52 ]
 */
export function indexOfAllPosition(sourceString, searchString) {
    const postion = new Array();
    let pos = sourceString.indexOf(searchString);
    while (pos > -1) {
        postion.push(pos);
        pos = sourceString.indexOf(searchString, pos + 1);
    }
    return postion;
}

/**
 * HTML标签转换， <>&" 将会被转义
 * @param {*} text html内容
 * @returns 转义后的 html 内容
 */
export function htmlEscape(text) {
    return text.replace(/[<>"&"]/g, function (match, pos, originalText) {
        switch (match) {
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case "&":
                return "&amp;";
            case '"':
                return "&quot;";
        }
    });
}

export const getGlobal = (function () {
    if (typeof window !== "undefined" && window !== null) {
        return window;
    }

    if (typeof globalThis !== "undefined" && globalThis !== null) {
        return globalThis;
    }

    return this;
})();
