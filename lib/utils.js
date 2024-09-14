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

/**
 * 生成随机数。
 * 公式：number = Math.floor(Math.random() * total_number_of_choices + first_possible_value)
 * @param {*} lowerValue 最小值，包含该最小值
 * @param {*} upperValue 最大值，包含该最大值
 * @returns 最小值到最大值的随机数。实例：selectForm(2, 10)
 */
export function selectForm(lowerValue, upperValue) {
    let choices = upperValue - lowerValue + 1;
    return Math.floor(Math.random() * choices + lowerValue);
}

/**
 * 定型数组没有原生的拼接能力，但使用定型数组 API 提供的很多工具可以手动构建
 * @param {*} typedArrayConstructor 第一个参数是应该返回的数组类型
 * @param  {...any} typedArrays 其余参数是应该拼接在一起的定型数组
 * @returns 
    const concatArray = typedArrayConcat(
        Int32Array,
        Int8Array.of(1, 2, 3),
        Int16Array.of(4, 5, 6),
        Float32Array.of(7, 8, 9)
    );
    Int32Array(9) [
        1, 2, 3, 4, 5,
        6, 7, 8, 9
    ]
 */
export function typedArrayConcat(typedArrayConstructor, ...typedArrays) {
    const numElements = typedArrays.reduce(
        (x, y) => (x.length || x) + y.length
    );

    const resultArray = new typedArrayConstructor(numElements);

    let currentOffset = 0;
    typedArrays.map((x) => {
        resultArray.set(x, currentOffset);
        currentOffset += x.length;
    });

    return resultArray;
}

/**
 * 用户类对象
 * 私有属性
 */
export const UserData = (() => {
    const wm = new WeakMap();

    class User {
        constructor(id) {
            this.idProperty = Symbol("id");
            this.setId(id);
        }

        setPrivate(property, value) {
            const privateMembers = wm.get(this) || {};
            privateMembers[property] = value;
            wm.set(this, privateMembers);
        }

        getPrivate(property) {
            return wm.get(this)[property];
        }

        setId(id) {
            this.setPrivate(this.idProperty, id);
        }

        getId() {
            return this.getPrivate(this.idProperty);
        }
    }

    return User;
})();
