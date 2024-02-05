    class Country{
        constructor(name, independenceOn) {
            this.name = name
            this.independenceOn = independenceOn
        }
    describe() {
        console.log(`${this.name} got its independence on ${this.independenceOn}.`)
    }
}
const india = new Country('The Country India',1947)
india.describe()