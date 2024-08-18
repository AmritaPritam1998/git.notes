//promises--
//1.objects representing the eventual completion (or failure)
//of an asynchronous operation.
//2.states:pending,fulfilled,rejected.

// const ticket=new Promise(function(resolve,reject){
//     const isBoarded=false;
//     if(isBoarded){
//         resolve("you are not in the flight");
//     }else{
//         reject("your flight hasbeen cancelled");
//     }
// });
// ticket
//  .then((data)=>{
//     console.log("Hurray",data);
//  })
//  .catch((data)=>{
//     console.log("my Bad",data);
//  })
//  .finally(()=>{
//     console.log("i will be executed always.");
//  });


function getcheese(){
    return new Promise((resolve,reject=>{
        setTimeout(()=>{
            const cheese="🧀";
            resolve(cheese);
        },2000);
    }))
}
function makeDough(cheese){
    return new Promise((resolve,reject=>{
        setTimeout(()=>{
            const dough="🧀"+dough;
            resolve(dough);
        },2000);
    }))
}
function bakePizza(dough){
    return new Promise((resolve,reject=>{
        setTimeout(()=>{
            const pizza="🍕"+dough;
            resolve(pizza);
        },2000);
    }))
}
getcheese()
.then((cheese)=>{
    console.log("here is the cheese",cheese);
    return makeDough(cheese);
})
.then((dough)=>{
    console.log("here is the dough",dough);
    return bakePizza(dough);
})
.then((pizza)=>{
    console.log("got my beautiful pizza",pizza);
})
.catch((data)=>{
    console.log("error occured",data);
})
.finally(()=>{
    console.log("process ended");
});

