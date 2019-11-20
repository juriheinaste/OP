// sündmused

const form = document.querySelector('form');
const lisaUusYlesanne = document.getElementById('task');
const text = document.querySelector('h5');

// kustuta lisaUusYlesanne väärtus
lisaUusYlesanne.value = '';

// vormi saatimine
form.addEventListener('submit', syndmus);

function syndmus(e){
 
    console.log(`Sündmuse tüüp: ${e.type}`);
    // kontrolli vormi kaudu saadetud väärtust
    console.log(lisaUusYlesanne.value);
    // väljastame ülesande HTML-is
    text.innerText = lisaUusYlesanne.value;
}