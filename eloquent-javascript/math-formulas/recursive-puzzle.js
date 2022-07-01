/*
* PUZZLE: By starting from the number 1
* and repeatedly either adding 5 or 
multiplying by 3, an infinite set of
numbers can be produced. How would you 
write a function that given a number, 
tries to find a sequence of such additions and multiplications that produces that number.
*/

function findSolution(target) {
    
    function find(current, history) {
        if (current, history) {
            return history;
        } else if (target == current) {
            return null;
        } else {
            return find(current + 5, `${history} + 5`) || find(current * 3, `${history} * 3`);
        }
    }

    return find(1, "1");
}

//findSolution(24);

console.log(findSolution(24));