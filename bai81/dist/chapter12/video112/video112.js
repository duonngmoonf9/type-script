"use strict";
class Lion {
    // mieu ta hanh vi
    sleep() {
        console.log("lion is sleeping...: ", this.name);
    }
}
const lion1 = new Lion();
lion1.color = "yellow";
lion1.name = "duong";
lion1.sleep();
const lion2 = new Lion();
lion2.color = "red";
lion2.name = "yen";
lion2.sleep();
