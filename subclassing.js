class Animal {
    constructor(name) {
        this._name = name;
    }
    speak() {
        console.log(`${this._name} makes a noise in the class.`);
    }

}

var ani = new Animal("Hemanth");
ani.speak();
