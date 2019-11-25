/* let ees = 'Jüri'
let pere = 'Heinaste'
let year = 1984;
let month = 12;
let day = 8;

let vanus = new Date(year, month, day);
let praegu = Date.now();

console.log(vanus)
*/

/*let eesnimi, perenimi;
let sunnikuupaev;

function taisNimi(eesnimi, perenimi){
  return `${eesnimi} ${perenimi}`;
}

function arvutaVanus(sunnikuupaev){
  sunnikuupaev = new Date(sunnikuupaev);
  vaheSekundites = Date.now() - sunnikuupaev.getTime();
  vanusDate = new Date(vaheSekundites);
  aastaDate = vanusDate.getUTCFullYear();
  vanus = aastaDate - 1970;
  return `Vanus: ${vanus}`;
}
  console.log(taisNimi("Minu", "Nimi"));
  console.log(arvutaVanus("1984-11-24"));
*/
 
  // inimese kirjeldus OOP abil
 // inimses konstruktor
 /*function Isik(n, skp){
  this.nimi = n;
  this.synniKuupaev = new Date(skp);
 
// arvuta vanus
  this.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synniKuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
  }
}

 const anna = new Isik('Anna', '11-27-1980');
 const kadi = new Isik('Kadi', '07-30-1995');
 console.log(anna.arvutaVanus());
 console.log(kadi.arvutaVanus());
 */

 // väljasta täisnimi
function Isik(e, p, skp){
  this.eesnimi = e;
  this.perenimi = p;
  this.synniKuupaev = new Date(skp);
}

// arvuta vanus

Isik.prototype.taisNimi = function(){
  return `${this.eesnimi} ${this.perenimi}`;
}

  // arvuta vanus
  Isik.prototype.arvutaVanus = function(){
    const vaheSekundites = Date.now() - this.synniKuupaev.getTime();
    const vanusDateKujul = new Date(vaheSekundites);
    const taisAasta = vanusDateKujul.getUTCFullYear();
    const vanus = taisAasta - 1970;
    return vanus;
  }

// objektid 
const anna = new Isik('Anna', 'Karutina', '11-27-1980');
 const kadi = new Isik('Kadi', 'Tamm', '07-30-1995');
 console.log(anna.taisNimi(), anna.arvutaVanus());
 console.log(kadi.taisNimi(), kadi.arvutaVanus());