//document.getElementById()
const judul = document.getElementById('judul');
judul.style.color = 'blue';
judul.style.backgroundColor = '#fff';
judul.innerHTML = "Belajar Javascript";


const p = document.getElementsByTagName('p');

for( let i=0; i<p.length; i++){
    p[i].style.backgroundColor= 'lightblue';
}

const p1= document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini diubah dengan Javascript';