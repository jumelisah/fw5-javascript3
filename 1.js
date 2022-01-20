const hari = 'kamis'

const cekHariKerja = (day) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item)=>{
                return item === day
            })
            if(cek){
                resolve(cek)
            }else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}

cekHariKerja(hari).then((results) => {
    console.log(results)
}).catch((err)=>{
    console.log(err.toString())
})


/*
async function hariKerja(){
    try{
        const hasil = await cekHariKerja(hari)
        console.log(hasil)
    }catch(err){
        console.log(err.toString())
    }
}

hariKerja()
*/