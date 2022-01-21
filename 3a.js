//Program menghitung volume balok
const sisiBalok = [12, 10, 3]

const volumeBalok = (sisi) =>{
    return new Promise((resolve, reject)=>{
        let volume = 1
        setTimeout(()=>{
            if(sisi.length==3){
                sisi.forEach(element =>{
                    if(typeof element=="number" && element>0){
                        volume *= element
                    }else{
                        volume = 0
                    }
                })
            }
            if(volume!==0){
                resolve(`Volume Balok = ${volume}`)
            }else{
                reject("Data tidak sesuai")
            }
        }, 3000)
    })
}

volumeBalok(sisiBalok).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

console.log(sisiBalok)