const { returns } = require("chai-spies");

 function receivesfunction(callback){
    callback();
 }

 
function returnsaNamedFunction(){
    return function namedFunction(){}
    function returnsAnAnonymousFunction(){
    return function(){};
}
}
module.exports = {
    receivesfunction,
    returnsaNamedFunction,
    returnsAnAnonymousFunction
};