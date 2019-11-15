// document methods
// node omadused ja meetodid

let nimekiri = document.querySelectorAll('ul.collection');
let nimekirjaElement = document.querySelectorAll('li.collection-item');

console.log(nimekiri);
console.log(nimekirjaElement);

nimekiri = document.querySelector('ul.collection');
console.log(nimekiri);

sisu = nimekiri.childNodes;
sisu = nimekiri.childNodes[0];
sisu = nimekiri.childNodes[0].nodeName;
sisu = nimekiri.childNodes[3].nodeType;

/*
erinevad node tüübid
1 - element
2 - attribute
3 - text
8 - comment
9 - document itself
1+ - doctype
*/

sisu = nimekiri.children;
sisu = nimekiri.children[1];
nimekiri.children[1].textContent = 'Õpi rohkem JS';
sisu = nimekiri.children[2].children[0].id = 'katse';

console.log(sisu);
console.log(nimekiri.children[2].children[0]);

sisu = nimekiri.firstChild; // node type
sisu = nimekiri.firstElementChild; //value
console.log(sisu);

sisu = nimekiri.childElementCount;
console.log(sisu);

nimekirjaElement = document.querySelector('li.collection-item');
sisu = nimekirjaElement.parentNode;
sisu = nimekirjaElement.parentElement;
sisu = nimekirjaElement.parentElement.parentElement;

sisu = nimekirjaElement.nextSibling; // node type
sisu = nimekirjaElement.nextElementSibling;
console.log(sisu);