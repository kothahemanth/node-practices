class User {
    constructor(name) {
        this._name = name;
    }
    sayHi() {
        console.log(this._name);
    }

}
var user = new User("NIKIL");
user.sayHi();
