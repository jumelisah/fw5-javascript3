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

//function cekHariKerja akan dijalankan, kemudian setelah di-resolve akan mereturn hasil (results)
//lalu then akan menjalankan kode yang telah ditetapkan
//jika terjadi error, catch akan menangkapnya dan menjalankan kode error


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

/*program akan memanggil async function. Pada bagian try, dengan menggunakan keyword await,
program diminta untuk menunggu sampai promise selesai dijalankan lalu mereturn hasil ke dalam
variabel hasil. Jika ada error, program akan menghentikan kode di bagian try dan menjalankan kode
error di bagian catch

*/