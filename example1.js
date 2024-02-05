const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on("Order_Delivered_Successfully",()=>{
    console.log("Logic to  send mail to customer");
});

myEmitter.on("Order_Delivered_Successfully",()=>{
    console.log("Write Logic to send a SMS to customer");
});

myEmitter.on("Order_Delivered_Successfully",()=>{
    console.log("Remove the item from Amazon Inventory");
});

myEmitter.emit("Order_Delivered_Successfully");