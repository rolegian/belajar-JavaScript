// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener ('click', function() {
//     card.style.display = 'none'
// })


const close = document.querySelectorAll('.close');

for( let i=0; i < close.length; i++){
    close[i].addEventListener('click', function(e) {
        // close[i].parentElement.style.display='none';
        e.target.parentElement.style.display ='none';
    });
}