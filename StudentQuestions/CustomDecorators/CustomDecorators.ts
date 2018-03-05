// Reminder: tsconfig.json "experimentalDecorators": true,

function classDecorator(target: Function) {
    console.log(`classDecorator: target is`);
    console.log(target);
    console.log(typeof target);
    console.log(`classDecorator: target.prototype is`);
    console.log(target.prototype);
    console.log("");
} 

function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(`methodDecorator: target is`);
    console.log(target);
    console.log(`methodDecorator: propertyKey is    `);
    console.log(propertyKey);
    console.log(`methodDecorator: descriptor is`);
    console.log(descriptor);
    console.log("");
}

function propertyDecorator(target: any, propertyKey: string) {
    console.log(`propertyDecorator: target is`);
    console.log(target);
    console.log(`propertyDecorator: propertyKey is`);
    console.log(propertyKey);
    console.log("");
}

function paramDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`paramDecorator: target is`);
    console.log(target);
    console.log(`paramDecorator: propertyKey is`);
    console.log(propertyKey);
    console.log(`paramDecorator: parameterIndex is`);
    console.log(parameterIndex);
    console.log("");
}

@classDecorator
class DecoratorTarget {

    @propertyDecorator
    prop1: string;

    constructor(@paramDecorator param1: string) {
        this.prop1 = param1;
    }

    @methodDecorator
    method1() { return this.prop1; }
}