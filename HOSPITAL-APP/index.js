// we need hospital in express 

// .get => user to check how many kidneys they have and their health
// .post => users can add new kidney
// .put => users can replace a kidney to make it healthy
// .delete => users to delete kidneys 


// const user ={
//     name: "animesh"
//     kidney:[{
//         healthy: false
//     }]
// }


// full form of req and res is request and response respectively

const express = require("express")
const app = express()



const users = [{
    name: "animesh",                               // this is an array of users as we write within the square brackets
    kidney: [{
        healthy: false
    }]
}] 


app.use(express.json());

app.get("/", function (req, res) {

    const animehKidneys = users[0].kidney;                       // we check index o user and its kidneys 
       
    const numberOfKidneys = animehKidneys.length;                // this line is to check how many kidneys do the user have {.length value of boolean is 1}
 
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < animehKidneys.length; i++) {                    // this for loop is to itrate throug the given arrays data till i th index and find how many healthy kidneys the user have and after that in ans it would add one ,
        if (animehKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;

        }
        
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;                     // here after the for loop ran it just basically do basic arithmatic to find number of unhealthy kidneys 
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})


app.post("/", function (req, res) {             
    const isHealthy = req.body.isHealthy;
    users[0].kidney.push({
        healthy: isHealthy
    })
    res.json ({
        msg: "done"
    })
})



app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy= false 
        
    } res.json({})
})

//removing all unhealthy kidneys 
app.delete("/", function (req, res) {
    if (isThereAnyUnhealthyKidney()) {
        const newkidneys = [];
        for (let i = 0; i < users[0].kidney.length; i++) {
            if (users[0].kidney[i].healthy) {
                newkidneys.push({
                healthy : true
                })
            }
            
        }
        users[0].kidney = newkidneys
        res.json({msg: "done"})
    }
    else{
        res.status(411).json({
            msg: "you entered a wrong information"
        })
    };
   

})

function isThereAnyUnhealthyKidney() {
    let atLeaastOneUnhealthyKidney = false;
    for (let i = 0; i < users[0].kidney.length; i++) {
        if (!users[0].kidney[i].healthy) {
            atLeaastOneUnhealthyKidney= true;
        }
        return atLeaastOneUnhealthyKidney
    }
}


app.listen(3000)


