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

        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        
        }
    }

    return find(1, "1");
}

/*
* (1) If the current number is the target number, the current history
* is way to reach the target, the solution is returned here.
*
* (2) If the current number is greater thatn the target, there is no
* sense in continuing, so we return null.
*
* (3) Finally, if we're still below the target number, the function tries
* both possible paths using (||), so this history is kept for the next 
* subequent recursion.
*/

//console.log(findSolution(24)); // (((1 * 3) + 5) * 3)

// Let's try 100
//console.log(findSolution(100)); // we get null

// Let's try 48
console.log(findSolution(48)); // ((((1 + 5) + 5) + 5) * 3)

// Conclusion - This exercise takes a bit of time to understand, basically when the arithmetic is run through the function each time to get close to the solution, its computation is housed in yet another set of parenthesis and then that operation is run till the solution is found. 