const fetch = require('cross-fetch')

const url = "https://jsonplaceholder.typicode.com/users"

/*then catch

fetch(url).then(res => {
    res.json().then(data => {
        data.forEach(element => {
            console.log(element.name)
        })
    }).catch(err => {
        console.log("Error 2")
    })
}).catch(err => {
  console.log("Error 1");
})*/


//try catch
let listOfNames = async () =>{
    try {
        const data = await fetch(url)
        const result = await data.json()
        result.forEach(element =>{
            console.log(element.name)
        })
    }catch(err){
        console.log("error")
    }
}

listOfNames()