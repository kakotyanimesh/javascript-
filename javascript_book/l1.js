function factorial2(n) {
    var i, product = 1; 
    for(i=2; i <= n; i++)
    product *= i; 
    return product; }

    console.log(factorial2(5) );