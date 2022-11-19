const p3 = document.querySelector('.p3');

// function ubahWarnaP2 (){
//     p2.style.backgroundColor = ' blue';
// }

// function ubahWarnaP3 (){
//     p3.style.backgroundColor = ' blue';
// }

// const p2 =document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue'
});

p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'lightgreen'
});
