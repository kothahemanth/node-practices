var car = {
    year : 2002,
    model : "GLS360",
    brand: "Benz",

    calculate: function(year){
        let currentyear=2023;
        console.log("cars age : "+(currentyear-this.year));
    }
   
}

var myCarAge =  car.calculate.bind(car,"2023");
myCarAge();
