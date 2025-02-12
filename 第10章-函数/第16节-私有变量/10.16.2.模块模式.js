import { logSpace } from "../../lib/utils.js";

console.log(`
    
    10.16.2 模块模式

      模块模式（module pattern）是为单例创建私有变量和特权方法。所谓单例（singleton）是指只有一个实例的对象。
    模块模式通过为单例添加特权方法和私有变量使其得到增强。
`);

let singleton = function () {
  let privateVariable = 10;

  function privateFunction() {
    return false;
  }

  return {
    publicProperty: true,
    publicMethod: function () {
      privateVariable++;
      return privateFunction();
    }
  };
}();

console.log(singleton.publicProperty); // true

console.log(singleton.publicMethod()); // false

logSpace();

let BaseComponent = function(){
  let name = "BaseComponent";

  return {
    getName: function(){
      return name;
    }
  };
}

let application = function(){
  let components = new Array();

  components.push(new BaseComponent());

  return {
    getComponentCount: function(){
      return components.length;
    },
    registerComponent: function(component){
      if (typeof component == "object") {
        components.push(component);
      }
    }
  };
}();
console.log(application.getComponentCount()); // 1

application.registerComponent(new BaseComponent());
console.log(application.getComponentCount()); // 2