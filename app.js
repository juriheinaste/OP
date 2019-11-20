// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

// kustuta lisaUusYlesanne väärtus
lisaUusYlesanne.value = '';

// klaviatuur
// key down
// lisaUusYlesanne.addEventListener('keydown', syndmus);
// key up
// lisaUusYlesanne.addEventListener('keyup', syndmus);
// key press
// lisaUusYlesanne.addEventListener('keypress', syndmus);
// focus
// lisaUusYlesanne.addEventListener('focus', syndmus);
// blur
// lisaUusYlesanne.addEventListener('blur', syndmus);
// paste
// lisaUusYlesanne.addEventListener('paste', syndmus);
// input
lisaUusYlesanne.addEventListener('input', syndmus);


function syndmus(e){
 
    console.log(`Sündmuse tüüp: ${e.type}`);
    // kontrolli vormi kaudu saadetud väärtust
    console.log(lisaUusYlesanne.value);
    // väljastame ülesande HTML-is
    text.innerText = lisaUusYlesanne.value;
}