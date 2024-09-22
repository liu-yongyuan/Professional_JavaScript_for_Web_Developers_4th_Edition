import { logSpace } from "../../lib/utils.js";

console.log(`
    
    7.3.2
        4.使用 yield* 实现递归算法
        yield* 最有用的地方是实现递归操作，此时生成器可以产生自身。
    
`);
function* nTimes(n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}
/* 
0
1
2
 */
for (const x of nTimes(3)) {
    console.log(x);
}

logSpace();

console.log(`
    
        使用递归生成器结构和 yield* 可以优雅地表达递归算法。下面是一个图的实现，用于生成一个
    随机的双向图

`);
class Node {
    constructor(id) {
        this.id = id;
        this.neighbors = new Set();
    }

    connect(node) {
        if (node !== this) {
            this.neighbors.add(node);
            this.neighbors.add(this);
        }
    }
}

class RandomGraph {
    constructor(size) {
        this.nodes = new Set();

        // 创建节点
        for (let i = 0; i < size; ++i) {
            this.nodes.add(new Node(i));
        }

        const threshold = 1 / size;
        for (const x of this.nodes) {
            for (const y of this.nodes) {
                if (Math.random() < threshold) {
                    x.connect(y);
                }
            }
        }
    }

    print() {
        for (const node of this.nodes) {
            const ids = [...node.neighbors].map((n) => n.id).join(",");
            console.log(`${node.id}: ${ids}`);
        }
    }
}

const g = new RandomGraph(6);
/* 
0: 2,0
1: 
2: 
3: 1,3
4: 1,4
5: 
 */
g.print();

logSpace();

console.log(`
    
        图数据结构非常适合递归遍历，而递归生成器恰好非常合用。为此，生成器函数必须接收一个可迭代
    对象，产出该对象中的每一个值，并且对每个值进行递归。这个实现可以用来测试某个图是否联通，
    即使是否没有不可到达的节点。只要从一个节点开始，然后尽力访问每个节点就可以了。结果就得到了
    一个非常简洁的深度优先遍历：
    
`);
class Node1 {
    constructor(id) {
        this.id = id;
        this.neighbors = new Set();
    }

    connect(node) {
        if (node !== this) {
            this.neighbors.add(node);
            this.neighbors.add(this);
        }
    }
}

class RandomGraph1 {
    constructor(size) {
        this.nodes = new Set();

        // 创建节点
        for (let i = 0; i < size; ++i) {
            this.nodes.add(new Node1(i));
        }

        const threshold = 1 / size;
        for (const x of this.nodes) {
            for (const y of this.nodes) {
                if (Math.random() < threshold) {
                    x.connect(y);
                }
            }
        }
    }

    print() {
        for (const node of this.nodes) {
            const ids = [...node.neighbors].map((n) => n.id).join(",");
            console.log(`${node.id}: ${ids}`);
        }
    }

    isConnected() {
        const visitedNodes = new Set();

        function* traverse(nodes) {
            for (const node of nodes) {
                if (!visitedNodes.has(node)) {
                    yield node;
                    yield* traverse(node.neighbors);
                }
            }
        }

        // 取得集合中的第一个节点
        const firstNode = this.nodes[Symbol.iterator]().next().value;

        // 使用递归生成器迭代每个节点
        for (const node of traverse([firstNode])) {
            visitedNodes.add(node);
        }

        return visitedNodes.size === this.nodes.size;
    }
}
const g1 = new RandomGraph1(6);
/* 
0: 2,0,4,5
1: 2,1
2: 
3: 
4: 
5: 
 */
g1.print();
// 检查是否已经连接
// false
console.log(g1.isConnected());
