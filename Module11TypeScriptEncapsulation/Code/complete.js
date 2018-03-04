/*
 * Module 11 - TypeScript Encapsulation
 * Topics:
 *      IIFEs and Closures in TypeScript
 *      Access Modifiers
 *      namespace Keyword
 */
console.log("Module 11 - TypeScript Encapsulation complete.js loaded...");
var Complete;
(function (Complete) {
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - IIFEs and Closures in TypeScript");
    console.log("****************************************************************");
    let globalLet11 = 1;
    function globalFunction11() { console.log(`globalFunction11(): globalLet11 is ${globalLet11}`); }
    globalFunction11();
    // These cause compiler errors, but work in JavaScrict
    // Note: For node.js change window to global
    // console.log(window.globalLet11);
    // window.globalFunction11();
    // IIFE
    (function () {
        let iifeLet11 = 1;
        function iifeFunction11() { console.log(`iifeFunction11(): iifeLet11 is ${iifeLet11}`); }
        iifeFunction11();
    }());
    // These cause compiler errors, but do not exist on window or global
    // Note: For node.js change window to global
    // console.log(window.iifeLet11);
    // window.iifeFunction11();
    class TSClass1 {
        constructor(property1, property2) {
            this.property2 = property2;
            this.property1 = property1;
        }
        method1() { }
    }
    // View the complete.js to see how TS transpiles this
    // In tsconfig.json change target to ES5 to compare
    // Note the IIFE being used
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Access Modifiers");
    console.log("****************************************************************");
    class TSClass2 {
        constructor(property1, property2) {
            this.property2 = property2;
            this._property1 = property1;
        }
        method1() { }
        method2() { }
    }
    // View the complete.js to see how TS transpiles this
    // Note private did not change anything, TS compiler enforced only
    // In tsconfig.json change target to ES6 to see the same result
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - namespace Keyword");
    console.log("****************************************************************");
    // Avoid polution of global namespace
    let TSNamespace;
    (function (TSNamespace) {
        class TSNamespaceClass {
        }
        TSNamespace.TSNamespaceClass = TSNamespaceClass;
        TSNamespace.tsNamespaceConst = 0;
        TSNamespace.tsNamespaceLet = 0;
        class HiddenClass {
        }
        const hiddenConst = 0;
        let hiddenLet = 0;
    })(TSNamespace || (TSNamespace = {}));
    let globalTSNamespaceInterface = {};
    let globalTSNamespaceClass = new TSNamespace.TSNamespaceClass();
    let globalTSNamespaceConst = TSNamespace.tsNamespaceConst;
    let globalTSNamespaceLet = TSNamespace.tsNamespaceLet;
    // Not exported, so not available outside the namespace
    // let globalHiddenInterface: TSNamespace.HiddenInterface = {};
    // let globalHiddenClass = new TSNamespace.HiddenClass();
    // let globalHiddenConst = TSNamespace.HiddenConst;
    // let globalHiddenLet = TSNamespace.HiddenLet;
    // View the complete.js to see how TS transpiles this
    // In tsconfig.json target should be ES6 when finished
})(Complete || (Complete = {}));
