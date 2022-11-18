var angka= 1;
if (angka<2){
    console.log(angka+ 'lebih kecil dari 2');
    angka++;
}

var jmlAngkot= 10;
var angkotBeroprasi= 6;
var noAngkot= 1;

for(var noAngkot=1; noAngkot<= jmlAngkot;noAngkot++){
    if(noAngkot<=6){
        console.log('Angkot no. '+noAngkot+' beroprasi baik');
    } else{
        console.log('Angkot no. '+noAngkot+ ' sedang tidak beroprasi');
    }
}