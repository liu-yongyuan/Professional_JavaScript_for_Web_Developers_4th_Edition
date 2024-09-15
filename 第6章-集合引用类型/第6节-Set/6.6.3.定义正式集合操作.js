console.log(`

    6.6.3 定义正式集合操作

        Set 和 Map 都很相似，只是 API 稍有调整。唯一需要强调的就是集合 API 只
    支持自引用操作。 很多开发者都喜欢使用 Set 操作，但需要手动实现：或者子类化 Set
    或者是定义一个实用函数。
    
        · 某些 Set 操作是由关联性的，因此最好让实现的方法能支持处理任意多个集合实例。
        · Set 保留插入顺序，所有方法返回的集合必须保证顺序。
        · 尽可能高效地实用内存。扩展操作符的语法很简洁，但尽可能避免集合和数组间的相互
    转换能够节省对象初始化成本。
        · 不要修改已有的集合实例。union(a, b) 或 a.union(b) 应该返回包含结果的新集合实例。

`);

class XSet extends Set {
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

    /**
     * 返回一个集合的幂集
     * @param {*} a
     * @returns
     */
    static powerSet(a) {
        const powerSet = new XSet().add(new XSet());
        for (const aValue of a) {
            for (const set of new XSet(powerSet)) {
                powerSet.add(new XSet(set)).add(aValue);
            }
        }
        return powerSet;
    }
}

let xs1 = new XSet([1, 2, 3, 4]);

let xs2 = new XSet([4, 5, 6, 7]);

// XSet(7) [Set] { 1, 2, 3, 4, 5, 6, 7 }
console.log(xs1.union(xs2));
// XSet(1) [Set] { 4 }
console.log(xs1.intersection(xs2));
// XSet(3) [Set] { 1, 2, 3 }
console.log(xs1.difference(xs2));
// XSet(6) [Set] { 1, 2, 3, 5, 6, 7 }
console.log(xs1.symmetricDifference(xs2));
/* 
XSet(16) [Set] {
  [ 1, 4 ],
  [ 1, 5 ],
  [ 1, 6 ],
  [ 1, 7 ],
  [ 2, 4 ],
  [ 2, 5 ],
  [ 2, 6 ],
  [ 2, 7 ],
  [ 3, 4 ],
  [ 3, 5 ],
  [ 3, 6 ],
  [ 3, 7 ],
  [ 4, 4 ],
  [ 4, 5 ],
  [ 4, 6 ],
  [ 4, 7 ]
}
 */
console.log(xs1.cartesianProduct(xs2));
/* 
TypeError: number 1 is not iterable (cannot read property Symbol(Symbol.iterator))
 */
console.log(xs1.powerSet(2));
