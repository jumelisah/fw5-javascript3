//Program timer
const waktuMundur = (sisa)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(sisa>0){
                resolve(`${sisa} detik`)
            }else{
                resolve("Waktu habis")
            }
        }, 1000)
    })
}

async function sisaWaktu(times){
    try{
        while(times>=0){
            const results = await waktuMundur(times)
            console.log(results)
            times--
        }
    }catch(err){
        console.log(err)
    }
}

sisaWaktu(25)

