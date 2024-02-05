const india = {
    name:'The Country India',
    independenceOn:1947,
    details: {
        flag: 'Tricolored',
        currency: 'INR',
        printDetails() {
            console.log(`The flag is ${this.flag} and the currency is ${this.currency}`)
        }
    }
}

india.details.printDetails()