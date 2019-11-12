//document methods
// single element selectors
sisu = document.querySelector('#title');    //id järgi
sisu = document.querySelector('.card-title');   //klassi järgi
sisu = document.querySelector('h5');    //elemendi järgi

// stiili muutmine
sisu = document.querySelector('li').style.color = 'red';
sisu = document.querySelector('ul li').style.color = 'blue';
sisu = document.querySelector('li:last-child').style.color = 'red';
sisu = document.querySelector('li:nth-child(2)').style.color = 'orange';
console.log(sisu);