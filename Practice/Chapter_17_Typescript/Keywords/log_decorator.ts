function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
const originalMethod = descriptor.value;
descriptor.value = function (...args: any[]) {
    console.log(`Method ${propertyKey} called with arguments: ${args.join(", ")}`);
    return originalMethod.apply(this, args);
};}