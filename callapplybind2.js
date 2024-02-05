var car = {
    registrationNumber : "FT1234",
    brand: "Benz",

    displayDetails: function(){
        console.log(this.registrationNumber+" "+ this.brand);
    }
}

car.displayDetails();

var myCarDetails =  car.displayDetails.bind(car);
myCarDetails();