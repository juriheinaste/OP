 // Raamatu konstruktor
 function Raamat(a, p, i){
   this.autor = a;
   this.pealkiri = p;
   this.isbn = i;
 }

 // kasutajaliides - KL
//  konstruktor
function KL() {

}

// KL funktsioonaal
// väljade puhastamine
KL.prototype.puhastaSisend = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}

//  kirjeldame raamatu lisamise sündmus
document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
  const pealkiri = document.getElementById('title').value;
  const autor = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // loome raamatu andmete põhjal
  const raamat = new Raamat(pealkiri, autor, isbn);
  
  console.log(raamat);

  // loome kasutaja liidese objekti temaga opereerimiseks
  const kl = new KL();

  // puhastame väljad sisestatud andmed

  kl.puhastaSisend();

  e.preventDefault();
}
