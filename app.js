 // inimese kirjeldus OOP abil
 // inimses konstruktor
//  function Isik(n, skp){
function Isik(e, p, skp){
  this.eesnimi = e;
  this.perenimi = p;
}

Isik.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi}`;
}

// kliendi konstruktor
function Klient(e, p, t, s){
  Isik.call(this, e, p); // konstruktori kasutamine
  this.telefon = t;
  this.staatus = s;
}

// teiste meetodide/funktsioonide kasutamine
Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

// määrame täisnime funktsiooni kliendi objektile
Klient.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi} - sinul on ${this.staatus} tase`; 
}

const kadi = new Klient('Kadi', 'Tamm', '1234 5678', 'Hõbe');
console.log(kadi.taisNimi());