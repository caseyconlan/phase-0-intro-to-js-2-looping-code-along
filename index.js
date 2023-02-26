const names = ['Guadalupe', 'Ollie', "Aki"]
function writeCards(names, event) {
    return  names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
 }
 
 console.log(writeCards(names, "birthday"))

function countDown(i) {
    let countDown = i; //typically use a different variable name than function name. i.e., don't use "countDown" for both function and variable
    while (countDown >= 0) { //> is different from >=
      console.log(countDown--);
    }
}