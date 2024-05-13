/*
Inheritnce is the method to create a hierarchy between classes by inheriting from other classes.
Java Inheritance is transitive - so if Sedan extends Car and Car extends Vehicle
*/

class person{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        return (`Hello ${this.name}`);
    }
}

class students extends person{
    constructor(name,id){
        super(name);
        this.id = id;
    }
    sayHello(){
        return (`Hello, ${this.name}, ID: ${this.id}`);
    }
}

let student1 = new students('Joy' , 21);
console.log(student1.sayHello());

