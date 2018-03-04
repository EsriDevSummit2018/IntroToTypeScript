/*
 * Module 14 - TypeScript Modules
 * Topics: 
 *      Using Modules in TypeScript
 *      module Keyword
 *      namespace Keyword
 *      export Keyword
 *      Dynamic import Expressions
 */
console.log("Module 14 - TypeScript Modules complete.js loaded...");

 
namespace Complete {
console.log("");
console.log("****************************************************************");
console.log("Topic - Using Modules in TypeScript");
console.log("****************************************************************");
console.log("");
console.log("****************************************************************");
console.log("Topic - module Keyword");
console.log("****************************************************************");
console.log("****************************************************************");
console.log("Topic - namespace Keyword");
console.log("****************************************************************");

// Prior to TypeScript 1.5, module was for external modules and namespace was for internal modules
// Might need chrome://flags to enable


console.log("");
console.log("****************************************************************");
console.log("Topic - import Keyword");
console.log("****************************************************************");

// import { exportConst } from './completeExports.js'
// console.log(exportConst);

// import * as exports from './completeExports.js'
// console.log(exports.exportConst);
// let exportType1: exports.exportType;
// let exportInterface1: exports.exportInterface;
// let exportClass1: exports.exportClass;


console.log("");
console.log("****************************************************************");
console.log("Topic - Dynamic import Expressions");
console.log("****************************************************************");

// function dynamicImportExpression() {
//     import("./completeExports.js")
//         .then(imports => console.log(imports.exportConst));
// }
// dynamicImportExpression();
}