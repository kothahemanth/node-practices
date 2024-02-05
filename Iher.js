class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise in the class.`);
    }
}

class Dog extends Animal {
    constructor(name){
        super(name);
    }

barks(){
    console.log(`${this.name} barks.`);
}
}
var d = new Dog('pug');
d.speak();
d.barks();