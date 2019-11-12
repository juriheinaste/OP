//document methods
// single element selectors
sisu = document.getElementById('add-task'); //html
id = document.getElementById('add-task').id;  //id
klass = document.getElementById('add-task').className;

sisu.style.background = '#333';
sisu.style.padding = '5px';

sisu.textContent = 'Minu ülesanded'
sisu.innerText = 'Just minu ülesanded'
sisu.innerHTML = '<span style="color:green">Vabad ülesanded</span>'
console.log(sisu);