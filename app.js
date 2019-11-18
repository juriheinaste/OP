// document methods
// elementide loomine
const liElement = document.createElement('li');
// lisame klassi
liElement.className = 'collection-item';
// lisa id
liElement.id = 'new-item';
// lisa atribuut
liElement.setAttribute('title', 'Uus element');
// lisa teksti väljund
// liElement.innerHTML = 'Uus element'
liElement.textContent = 'Uus element';
// loome lingi elemendi
const link = document.createElement('a');
// lisame vajalikud klassid
link.className = 'delete-item secondary-content';
// lisame kustutamisikooni
link.innerHTML = '<i class="fa fa-remove"></i>';
// lisame lingi listi elemendi sisse
liElement.appendChild(link);
// leiame ul elemendi DOM-ist
ulElement = document.querySelector('ul.collection');
// lisa liElemen ul elemendile
ulElement.appendChild(liElement);
console.log(liElement);