// const judul = document.getElementById('judul');
// judul.innerHTML= 'Batutah Academy';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML='Hello World'


// const jusul = document.querySelector('#judul');
// judul.style.color= 'salmon';


// const p2 = document.querySelector('.p2');
// p2.classList.add('name');
// p2.classList.remove('name');

// buat eleman baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);

// simpan di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru,li2);
