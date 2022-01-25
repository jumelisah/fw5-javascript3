const fetch = require('cross-fetch')

const url = "https://jsonplaceholder.typicode.com/user"

//then catch

fetch(url).then(res => {
    res.json().then(data => {
        data.forEach(element => {
            console.log(element.name)
        })
    }).catch(err => {
        console.log("Periksa kembali URL!")
    })
}).catch(err => {
  console.log("Only absolute URLs are supported");
})


//try catch
let listOfNames = async () =>{
    try {
        const data = await fetch(url)
        const result = await data.json()
        result.forEach(element =>{
            console.log(element.name)
        })
    }catch(err){
        console.log(err)
    }
}

listOfNames()