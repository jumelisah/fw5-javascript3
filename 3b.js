//Program timer
const waktuMundur = (sisa)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(typeof sisa=="number"){
                if(sisa>0){
                    resolve(`${sisa} detik`)
                }else{
                    reject("Waktu habis")
                }
            }else{
                reject("Data bukan number")
            }
        }, 1000)
    })
}

async function sisaWaktu(times){
    try{
        const results = await waktuMundur(times)
        console.log(results)
        times--
        sisaWaktu(times)
    }catch(err){
        console.log(err)
    }
}

sisaWaktu(25)

