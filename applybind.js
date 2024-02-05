var car = {
    registrationNumber : "FT1234",
    brand: "Benz",
}

    function displayDetails(ownerName){
        console.log(ownerName+",this is your car:" + this.registrationNumber+" "+ this.brand);
    }

displayDetails.apply(car,["KVH"]);