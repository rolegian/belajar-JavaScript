
// caram membuat object pada Js
// 1. Object Literal
// let mahasiswa ={
//     nama: 'Asep',
//     energi: 10,
//     makan: function(porsi){
//         this.energi = this.energi +porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }

// 2. Function declaration
// const methodMahasiswa = {
//     makan: function(posi){
//         this.energi += porsi ;
//         console.log(`Haki ${this.nama}, selamat makan!`);
//     },

//     main: function(jam){
//         this.energi+= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam){
//         this.energi+= jam*2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// };

// function Mahasiswa (nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama= nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let Asep = Mahasiswa('asep', 20);
// let Ujang = Mahasiswa('Ujang', 10);


// function Mahasiswa (nama, energi) {
//     this.nama= nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan= function(porsi){
//     this.energi+= porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main= function(jam){
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur= function(jam){
//     this.energi += jam *2;
//     return `Halo ${this.nama}, selamat tidur!`;
// }


// Versi Class
class Mahasiswa {
    constructor(nama, energi) {
    this.nama= nama;
    this.energi = energi;
}

  makan(porsi){
    this.energi+= porsi;
    return `Halo ${this.nama}, selamat makan!`;
}

  main(jam){
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
}

  tidur(jam){
    this.energi += jam *2;
    return `Halo ${this.nama}, selamat tidur!`;
}
}

let Ujang = new Mahasiswa('Ujang', 10);