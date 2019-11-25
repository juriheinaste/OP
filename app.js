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

// raamatu lisamine tabelisse
KL.prototype.lisaRaamatTabelisse = function(r){
  // loome tabeli rea
  const rida = document.createElement('tr');
  // täidame rea tabeli andmetega
  rida.innerHTML = `
  <td>${r.pealkiri}</td>
  <td>${r.autor}</td>
  <td>${r.isbn}</td>
  `;
// lisame rea tabelisse
  tabel = document.getElementById('book-list');
  tabel.appendChild(rida);
}

// teate väljastamine
KL.prototype.teade = function(s){
  // loome div'i, kuhu lisame teate sõnumi
  const div = document.createElement('div');
  // lisame sõnumi teksti div'i sisse
  const tekst = createTextNode(s);
  div.appendChild(tekst);
  // leiame elemendid, mille suhtes tuleb lisada uus element
  const konteiner = document.querySelector('.container');
  const vorm = document.getElementById('book-form');
  // lisame teate dokumenti
  konteiner.insertBefore(div, vorm);
}

//  kirjeldame raamatu lisamise sündmus
document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
  const pealkiri = document.getElementById('title').value;
  const autor = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // loome raamatu andmete põhjal
  const raamat = new Raamat(autor, pealkiri, isbn);
  
  console.log(raamat);

  // loome kasutaja liidese objekti temaga opereerimiseks
  const kl = new KL();

  // kui andmed on puudu, siis lisada ei luba
  if(pealkiri == '' | autor == '' | isbn == ''){
    kl.teade('Täida kõik väljad!');
  }else {
    kl.lisaRaamatTabelisse(raamat);
    kl.teade('Raamatud on lisatud!');
  }

  // lisame raamatud tabelisse
  kl.lisaRaamatTabelisse(raamat);

  // puhastame väljad sisestatud andmed

  kl.puhastaSisend();

  e.preventDefault();
}
