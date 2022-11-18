var arr = ['a',1, true];
console.log(arr);
console.log(arr[1]);

// menambahkan elemen pada array yang kosong

dataMhs=[ ];
dataMhs[0]= "asep";
dataMhs[1]= 'gani';
console.log(dataMhs)

dataMhs.forEach(function(e,i){
    console.log('mahasiswa ke-'+(i+1)+' adalah '+ e);
})
