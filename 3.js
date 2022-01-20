//1. Program menghitung volume

const sisiBalok = [12, 10, "3"]

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
                resolve(volume)
            }else{
                reject("Data tidak sesuai")
            }
        }, 3000)
    })
}

async function balok(){
    try{
        const results = await volumeBalok(sisiBalok)
        console.log(results)
    }catch(err){
        console.log(err)
    }
}

balok()
console.log(sisiBalok)

//2. Program menhitung waktu
let timeNow = [11, 30]
let whatTime = [18, 17]

const waktuKe = (sekarang, nanti, callback)=>{
    let diff = callback(sekarang, nanti)
    return new Promise((resolve, reject)=>{
        let passOrNot = diff[2]
        setTimeout(()=>{
            if(passOrNot==false){
                resolve(`${diff[0]} jam ${diff[1]} menit menuju pukul ${nanti[0]}:${nanti[1]}`)
            }else{
                reject("Waktu sudah terlewat")
            }
        }, 5000)
    })
}

function timesTo(thisTime, thatTime){
    let lewat = false
    let minutesOne = (thisTime[0]*60)+thisTime[1]
    let minutesTwo = (thatTime[0]*60)+thatTime[1]
    let minDiff = minutesTwo - minutesOne
    if(minDiff<0){
        minDiff = 1440 - minDiff
        lewat = true
    }
    let hourDiff = parseInt(minDiff/60)
    minDiff = minDiff - (hourDiff*60)
    let timeDiff = [hourDiff, minDiff]
    return timeDiff
}

waktuKe(timeNow, whatTime, timesTo).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})