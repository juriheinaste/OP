// sündmused

// lehe kaardi pealkiri
// document.querySelector('.card-title').addEventListener('click', function(e){
// console.log('card-title');
// });

// lehe kaardi sisu 
// document.querySelector('.card-content').addEventListener('click', function(e){
    // console.log('card-content');
// });

// delegeerimine

const kustutaYlesanne = document.querySelector('.delete-item');
kustutaYlesanne.addEventListener('click', kustuta);

function kustuta(e){
console.log('Hakkame kustutama');
console.log(e.target.parentElement.parentElement);
if(e.target.parentElement.classList.contains('delete-item')){
e.target.parentElement.parentElement.remove();
}
}
