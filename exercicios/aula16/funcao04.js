function factorial(n) {
    let firstFactorial = 1
    for (let counter = n; counter > 1; counter--) {
        firstFactorial *= counter 
    }
    return firstFactorial
}

console.log(factorial(5))

// 5! = 5 x 4 x 3 x 2 x 1 = 120