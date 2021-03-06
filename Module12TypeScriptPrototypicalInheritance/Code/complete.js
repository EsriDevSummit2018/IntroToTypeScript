/*
 * Module 12 - TypeScript Prototypical Inheritance
 * Topics:
 *      Extending Interfaces
 *      Interfaces Extending Classes
 *      Extending Classes
 *      Hybrid Types
 *      Intersection Types
 *      Union Types
 *      Type Guards
 */
console.log("Module 12 - TypeScript Prototypical Inheritance complete.js loaded...");
var Complete;
(function (Complete) {
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Extending Interfaces");
    console.log("****************************************************************");
    class ExtendsClass {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        displayName() { console.log(`Name is ${this.firstName} ${this.lastName}`); }
    }
    let extendsClass1 = new ExtendsClass("Stewie", "Griffin");
    extendsClass1.displayName();
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Interfaces Extending Classes");
    console.log("****************************************************************");
    ;
    class ExtendsClass2 {
        constructor(firstName, lastName, age) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
        }
        displayName() {
            console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
        }
    }
    let extendsClass2 = new ExtendsClass2("Stewie", "Griffin", 1);
    extendsClass2.displayName();
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Extending Classes");
    console.log("****************************************************************");
    class ExtendsClass3 extends ExtendsClass {
    }
    let extendsClass3 = new ExtendsClass3("Stewie", "Griffin");
    extendsClass3.displayName();
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Hybrid Types");
    console.log("****************************************************************");
    function HybridFactory() {
        let hybrid = function (p1, p2) { this.p1 = p1; this.p2 = p2; };
        hybrid.factor = 10;
        hybrid.displayResult = () => { console.log((this.p1 + this.p2) * hybrid.factor); };
        return hybrid;
    }
    let hybrid1 = HybridFactory();
    hybrid1(1, 3);
    hybrid1.displayResult();
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Intersection Types");
    console.log("****************************************************************");
    let loggablePerson1 = {
        firstName: "Brian",
        lastName: "Griffin",
        log: () => { console.log(`${loggablePerson1.firstName} ${loggablePerson1.lastName}`); }
    };
    loggablePerson1.log();
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Union Types");
    console.log("****************************************************************");
    let stringnum = "Ten";
    stringnum = 10;
    console.log(`typeof stringnum is ${typeof stringnum}`);
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Type Guards");
    console.log("****************************************************************");
    function typeGuard(param1) {
        if (typeof param1 === "number")
            console.log(param1 * 100);
        else
            console.log(param1.toUpperCase());
    }
    typeGuard("Ten");
    typeGuard(10);
})(Complete || (Complete = {}));
