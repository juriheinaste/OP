// document methods
// multiple element selectors


// klassinime järgi
let sisu = document.getElementsByClassName('collection-item');
console.log(sisu);
console.log(sisu[2]);
sisu[0].style.color ='orange';
sisu[2].textContent = 'Õpi Arvutivõrke';

// querySelector + klassi nime järgi
let nimekirjaElemendid = document.querySelector('ul')
.getElementsByClassName('collection-item');

// elemendi nime järgi
nimekirjaElemendid = document.getElementsByTagName('li');

// teisendamin HTMLCollection massiiviks (Array)
nimekirjaElemendid = Array.from(nimekirjaElemendid);

// massiivi meetodide kasutamine
nimekirjaElemendid.reverse();

//console.log(nimekirjaElemendid);
// massiivi läbimine tsükliga
// for
for(let i = 0; i < nimekirjaElemendid.length; i++){
    nimekirjaElemendid[i].style.background = '#ddd';
    nimekirjaElemendid[1].style.background = '#f4f4f4';
    
}

// forEach
/*nimekirjaElemendid.forEach(element => {
    console.log(element)
    element.style.background = '#ddd'
}); */

let nimeKiriPaaris = document.querySelectorAll('li:nth-child(even)');
console.log(nimeKiriPaaris);