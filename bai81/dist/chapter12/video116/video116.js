"use strict";
console.log("bai 116");
class Animal {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    constructor(name, id) {
        this.name = name;
        this._id = id;
    }
    sleep() {
        console.log(`Name = ${this.name} ==== ID= ${this.id}`);
    }
}
const dog = new Animal("dog", 1);
dog.sleep();
console.log("=========================");
dog.id = 2;
dog.sleep();
