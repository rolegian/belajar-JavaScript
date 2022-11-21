
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
function mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`halo ${this.nama}, selamat makana`);
    }
    return mahasiswa;
}

let asep = mahasiswa('asep', 10);