//!Asynchronous javascript allows you to perform tasks like
//fetching data from an API,reading files,or waiting for user
//interactions without blocking the execution of other code.
//?synchronous vs.asynchronous

//*sync-Executes line by line,waiting for each operation to 
//complete before moving to the next.
//?async-allow the program to continue executing
//without waiting for a task to complete.
// console.log("start");
// setTimeout(()=>{
//     console.log("THIS WILL PRINT LATER");
// },1000);
// console.log("end");

//!callback function-a function passed as an argument to 
//another function and executed after some operation is 
//completed.

function getCheese(callback){
    setTimeout(()=>{
        const cheese="🧀"
        console.log("here is the cheese",cheese);
        callback(cheese);
    },2000);
}
function makeDough(cheese,callback){
    setTimeout(()=>{
        const dough=cheese+"🥧"
        console.log("here is the dough",dough);
        callback(dough);
    },2000);

}
function bakePizza(dough,callback){
    setTimeout(()=>{
        const pizza=dough+"🍕"
        console.log("here is the pizza",pizza);
        callback(pizza);
    },2000);

}
getCheese((cheese)=>{
    makeDough(cheese,(dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log("got my beautiful pizza",pizza);

        });
    });

});
