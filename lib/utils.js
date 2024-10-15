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

export const logSize = (referenceObject) => {
    if (typeof referenceObject === "undefined" || referenceObject === null) {
        return console.log(0);
    }
    if (referenceObject instanceof Array) {
        return console.log(referenceObject.length);
    }
    if (referenceObject instanceof Map || referenceObject instanceof Set) {
        return console.log(referenceObject.size);
    }
};

export const logHasElement = (referenceObject) => {
    if (typeof referenceObject === "undefined" || referenceObject === null) {
        return console.log(false);
    }
    if (referenceObject instanceof Map || referenceObject instanceof Set) {
        return console.log(referenceObject.has(referenceObject));
    }
};

export const logGetElement = (referenceObject, key) => {
    if (typeof referenceObject === "undefined" || referenceObject === null) {
        return console.log(undefined);
    }
    if (referenceObject instanceof Map || referenceObject instanceof Set) {
        return console.log(referenceObject.get(key));
    }
};

export class XSet extends Set {
    union(...sets) {
        return XSet.union(this, ...sets);
    }

    intersection(...sets) {
        return XSet.intersection(this, ...sets);
    }

    difference(set) {
        return XSet.difference(this, set);
    }

    symmetricDifference(set) {
        return XSet.symmetricDifference(this, set);
    }

    cartesianProduct(set) {
        return XSet.cartesianProduct(this, set);
    }

    powerSet() {
        return XSet.powerSet(this);
    }

    /**
     * 返回两个或更多集合的并集
     * @param {*} a
     * @param  {...any} bSets
     * @returns
     */
    static union(a, ...bSets) {
        const unionSet = new XSet(a);
        for (const b of bSets) {
            for (const bValue of b) {
                unionSet.add(bValue);
            }
        }
        return unionSet;
    }

    /**
     * 返回两个或更多集合的交集
     * @param {*} a
     * @param  {...any} bSets
     * @returns
     */
    static intersection(a, ...bSets) {
        const intersectionSet = new XSet(a);
        for (const aValue of intersectionSet) {
            for (const b of bSets) {
                if (!b.has(aValue)) {
                    intersectionSet.delete(aValue);
                }
            }
        }
        return intersectionSet;
    }

    /**
     * 返回两个集合的差集
     * @param {*} a
     * @param {*} b
     * @returns
     */
    static difference(a, b) {
        const differenceSet = new XSet(a);
        for (const bValue of b) {
            if (a.has(bValue)) {
                differenceSet.delete(bValue);
            }
        }
        return differenceSet;
    }

    /**
     * 返回两个集合的对称差集
     * @param {*} a
     * @param {*} b
     * @returns
     */
    static symmetricDifference(a, b) {
        // 按照定义，对称差集可以表达为
        return a.union(b).difference(a.intersection(b));
    }

    /**
     * 返回两个集合（数组对形式）的迪卡儿积
     * 必须返回数组集合，因为笛卡尔积可能包含相同值的对
     * @param {*} a
     * @param {*} b
     * @returns
     */
    static cartesianProduct(a, b) {
        const cartesianProductSet = new XSet();
        for (const aValue of a) {
            for (const bValue of b) {
                cartesianProductSet.add([aValue, bValue]);
            }
        }
        return cartesianProductSet;
    }
}

/**
 * 范围生成
 * range(4, 7) => [4,5,6]
 * @param {*} start 开始
 * @param {*} end  结束
 */
export function* range(start, end) {
    while (end > start) {
        yield start++;
    }
}

/**
 * 根据次数生成 0
 * Array.from(zeroes(8)) =》  [0,0,0,0,0,0,0,0]
 * @param {*} n
 */
export function* zeroes(n) {
    while (n--) {
        yield 0;
    }
}
/**
 * 假设我们想定义一个生成器函数，它会根据配置的值迭代相应次数并产生迭代的索引。
 * @param {*} n 迭代的次数
 */
export function* nTimes(n) {
    for (let i = 0; i < n; ++i) {
        yield i;
    }
}

/**
 * 检查超过两个值，递归的利用相等性传递
 * @param {*} x
 * @param  {...any} rest
 * @returns
 */
export function recursivelyCheckEqual(x, ...rest) {
    return (
        Object.is(x, rest[0]) &&
        (rest.length < 2 || recursivelyCheckEqual(...rest))
    );
}

/**
 * 确定对象上的原型是否存在指定属性
 * @param {*} object
 * @param {*} name
 * @returns
 */
export function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && name in object;
}
