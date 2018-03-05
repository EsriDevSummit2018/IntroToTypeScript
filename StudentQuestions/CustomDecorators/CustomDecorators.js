// Reminder: tsconfig.json "experimentalDecorators": true,
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function classDecorator(target) {
    console.log(`classDecorator: target is`);
    console.log(target);
    console.log(typeof target);
    console.log(`classDecorator: target.prototype is`);
    console.log(target.prototype);
    console.log("");
}
function methodDecorator(target, propertyKey, descriptor) {
    console.log(`methodDecorator: target is`);
    console.log(target);
    console.log(`methodDecorator: propertyKey is    `);
    console.log(propertyKey);
    console.log(`methodDecorator: descriptor is`);
    console.log(descriptor);
    console.log("");
}
function propertyDecorator(target, propertyKey) {
    console.log(`propertyDecorator: target is`);
    console.log(target);
    console.log(`propertyDecorator: propertyKey is`);
    console.log(propertyKey);
    console.log("");
}
function paramDecorator(target, propertyKey, parameterIndex) {
    console.log(`paramDecorator: target is`);
    console.log(target);
    console.log(`paramDecorator: propertyKey is`);
    console.log(propertyKey);
    console.log(`paramDecorator: parameterIndex is`);
    console.log(parameterIndex);
    console.log("");
}
let DecoratorTarget = class DecoratorTarget {
    constructor(param1) {
        this.prop1 = param1;
    }
    method1() { return this.prop1; }
};
__decorate([
    propertyDecorator
], DecoratorTarget.prototype, "prop1", void 0);
__decorate([
    methodDecorator
], DecoratorTarget.prototype, "method1", null);
DecoratorTarget = __decorate([
    classDecorator,
    __param(0, paramDecorator)
], DecoratorTarget);
//# sourceMappingURL=CustomDecorators.js.map