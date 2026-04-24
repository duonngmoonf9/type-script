console.log("bai 116");
class Animal {
    public name: string;
    private _id: number;

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    constructor(name: string, id: number) {
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

