var car = {
    registrationNumber : "FT1234",
    brand: "Benz",

    displayDetails: function(ownerName){
        console.log(ownerName+",this is your car:" + this.registrationNumber+" "+ this.brand);
    }
}

var myCarDetails =  car.displayDetails.bind(car,"KVH");
myCarDetails();