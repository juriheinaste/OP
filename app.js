 // inimese kirjeldus OOP abil
 // klasside kasutus

 /*class Isik {
   // konstruktor
   constructor(e, p, skp){
     this.eesnimi = e;
     this.perenimi = p;
     this.synniKuupaev = new Date(skp);
   }
   // tervitus meetod
   tervitus() {
     return `Tere, ${this.eesnimi} ${this.perenimi} !`;
   }
  // vanuse arvutamine
  vanusearvutamine(){
   const vahe = Date.now() - this.synniKuupaev.getTime();
   const vanus = new Date (vahe);
   return vanus.getUTCFullYear() - 1970;
  }
  // uus perekonnanimi
  abiellus(uusPerenimi) {
    this.perenimi = uusPerenimi;
  }

 }
 
 const kadi = new Isik('Kadi', 'Tamm', '01-01-1995');
 console.log(kadi.tervitus(), kadi.vanusearvutamine());
 kadi.abiellus('Vaher')
 console.log(kadi.tervitus());
 */




//  klasside pärilus

class Isik {
  // konstruktor
  constructor(e, p){
    this.eesnimi = e;
    this.perenimi = p;
  }
  // tervitus meetod
  tervitus() {
    return `Tere, ${this.eesnimi} ${this.perenimi}!`;
  }
 }

//  kliendi klass
class Klient extends Isik {
  // konstruktor
  constructor(e,p,t,s){
    super(e,p);
    this.telefon = t;
    this.staatus = s;
  }
// staatiline meetod
static kuutasu(){
  return 5;
}

}

const kadi = new Klient('Kadi', 'Tamm', '1234 5678', 'hõbe');
console.log(kadi.tervitus());
console.log(Klient.kuutasu());