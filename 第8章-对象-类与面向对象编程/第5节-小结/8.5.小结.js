console.log(`
    
    8.5 小结

        对象在代码执行过程中的任何适合都可以被创建和增强，具有极大的动态性，并不是严格定义的实
    体。下面的模式适用于创建对象。

        · 工厂模式就是一个简单的函数，这个函数可以创建对象，为它添加属性和方法，然后返回这个
        对象。这个模式在构造函数模式出现后就很少用了。
        · 使用构造函数模式可以自定义引用类型，可以使用 new 关键字像创建内置类型实例一样创建
        自定义类型的实例。不过，构造函数模式也有不足，主要是其成员无法重用，包括函数。考虑到
        函数本身是松散的、弱类型的，没有理由让函数不能再多个对象实例间共享。
        · 原型模式接近了成员共享的问题，只要是添加到构造函数 prototype 上的属性和方法就可以
        共享。而组合构造函数和原型模式通过构造函数定义实例属性，通过原型定义共享的属性和方法。

        JavaScript 的继承主要通过原型链来实现。原型链涉及把构造函数的原型赋值为另一个类型的实例。
    这样一来，子类就可以访问父类的所有方法属性和方法，就像基于类的继承那样。原型链的问题是所有
    继承的属性和方法都会再对象实例间共享，无法做到实例私有。盗用构造函数模式通过再子类构造函数中
    调用父类构造函数，可以避免这个问题。这样可以让每个实例继承的属性都是私有的，但要求类型只能通过
    构造函数模式来定义（因为子类不能访问父类原型上的方法）。目前最流行的继承模式是组合继承，
    即通过原型链继承共享的属性和方法，通过盗用构造函数继承实例属性。

        除上述模式之外，还有以下几种继承模式。
        · 原型式继承可以无须明确定义构造函数而实现继承，本质上是对给定对象执行浅复制。这种操作
        的结果之后还可以再进一步增强。
        · 与原型式继承紧密相关的是寄生式继承，即先基于一个对象创建一个新对象，然后再增强这个
        新对象，最后返回新对象。这个模式也被用在组合继承中，用于避免重复调用父类构造函数
        导致的浪费。
        · 寄生式组合继承被认为是实现基于类型继承的最有效方法。

        ECMAScript 6 新增的类很大程度上是基于既有原型机制的语法糖。类的语法让开发者可以优雅
    地定义向后兼容的类，既可以继承内置类型，也可以继承自定义类型。类有效地跨域了对象实例、对象
    原型和对象类之间的鸿沟。
    

`);
