const getMonth = (callback) => {
    setTimeout(() => {
        let error = false
        let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        if(!error){
            callback(null, month)
        }else{
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000)
}

function bulan(stat, arrMonth){
    if(stat==null){
        const namaBulan = arrMonth.map(x => "Bulan "+x);
        console.log(namaBulan)
    }else{
        console.log(stat.toString())
    }
}

getMonth(bulan)