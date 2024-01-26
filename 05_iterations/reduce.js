const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, cur) {
    console.log(`acc: ${acc} and cur : ${cur}`)                  // first value of accumulator is 0 as we passed o and current value is 1 
                                                                // in second case as we got one after return so accumulator value became 1 and current value is 2 from myNums array 
                                                                // in third case as we got three from return (1+2 = 3) so accumalator value is 3 and current value is 3 from myNums
    return acc + cur 
    
}, 0)

console.log(myTotal);

// reduce use for shopping cart price calculation

const myTotalWithArrowFn = myNums.reduce( (acc, cur) => acc + cur, 0)

console.log(myTotalWithArrowFn);

 
//shoppingcart js 


const shoppingCart = [
    {
        itemName : "js course",
        price : 599

    },
    {
        itemName : "python course",
        price : 599

    },
    {
        itemName : "datascience course",
        price : 599

    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);