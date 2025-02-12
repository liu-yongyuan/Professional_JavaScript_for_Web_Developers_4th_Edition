import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.16.3 模块增强模式

      利用模块模式的做法是在返回对象之前加入对其增强的代码。这种模式可以给单例添加新方法，而不会破坏单例的实例。
`);

let CustomType = function () {
  this.name = "CustomType";
}

let singleton = function () {
  let privateVariable = 10;

  function privateFunction() {
    return false;
  }

  let object = new CustomType();

  object.publicProperty = true;

  object.publicMethod = function () {
    privateVariable++;
    return privateFunction();
  }

  return object;
}();

console.log(singleton.name);  // "CustomType"


logSpace();

let BaseComponent = function () {
  let name = "BaseComponent";

  return {
    getName: function () {
      return name;
    }
  };
}

let application = function () {
  // 私有变量和私有函数
  let components = new Array();

  // 初始化应用程序
  components.push(new BaseComponent());

  // 创建应用程序的一个副本
  let app = new BaseComponent();

  app.getComponentCount = function () {
    return components.length;
  };

  app.registerComponent = function (component) {
    if (typeof component == "object") {
      components.push(component);
    }
  };

  return app;
}();

console.log(application.getComponentCount()); // 1

application.registerComponent(new BaseComponent());


console.log(application.getComponentCount()); // 2

console.log(application.getName()); // BaseComponent