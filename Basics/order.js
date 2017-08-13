function placeAnOrder(orderNumber){
    console.log("Customer Order : " + orderNumber);
    cookAndDeliverFood(function(){
        console.log("Delivered Food for Order : " + orderNumber);
    });
}

// Simulate a 5 seconds operation.
function cookAndDeliverFood(callback){
    setTimeout(callback, 5000);
}

// Simulate Users Web Request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);