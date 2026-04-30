function role(roleName: string) {
    return function (constructor: Function) {
        constructor.prototype.role = roleName;
    };
}
    //prototype is used to add properties to the class constructor function
//decorators are functions that can be used to modify the behavior of classes, methods, properties, or parameters. They are denoted by the @ symbol and can be applied to a class, method, property, or parameter.
//they are used to attach to classes,methods , logs get attached using decorators.
  

@role("admin")
    class User {
    }   

    const user1 = new User();
    console.log(user1 as any); // Output: admin