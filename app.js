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
  <td><a href="#" class="kustuta">X</a></td>  
  `;
// lisame rea tabelisse
  tabel = document.getElementById('book-list');
  tabel.appendChild(rida);
}

// raamatu kustutamine tabelist
KL.prototype.kustutaRaamatTabelist = function(kustutaElement){
  if(kustutaElement.className === 'kustuta'){
    tabeliRida = kustutaElement.parentElement.parentElement;
    tabeliRida.remove();
    return true;
  }
}

// teate väljastamine
KL.prototype.teade = function(s, stiil){
  // loome div'i, kuhu lisame teate sõnumi
  const div = document.createElement('div');
  div.className = `alert ${stiil}`;
  // lisame sõnumi teksti div'i sisse
  const tekst = document.createTextNode(s);
  div.appendChild(tekst);
  // leiame elemendid, mille suhtes tuleb lisada uus element
  const konteiner = document.querySelector('.container');
  const vorm = document.getElementById('book-form');
  // lisame teate dokumenti
  konteiner.insertBefore(div, vorm);

  // kustutame teate 5 sekundi möödumisel
  setTimeout(function(){
    document.querySelector('.alert').remove()
  }, 5000);
}

// raamatu salvestamine
KL.prototype.salvestaRaamat = function(r){
  // loome raamatute hoidla LS-s (localstorage)
  let raamatud;
  if(localStorage.getItem('raamatud') === null){
    raamatud = [];
  }else{
    // kui raamatud juba olemas, saame need kätte
    raamatud = JSON.parse(localStorage.getItem('raamatud'));
  }
  localStorage.setItem('raamatud', JSON.stringify(raamatud));
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
    kl.teade('Täida kõik väljad!', 'invalid');
  }else {
    kl.lisaRaamatTabelisse(raamat);
    // salvesta raamatu andmed LS-sse
    kl.salvestaRaamat
    kl.teade('Raamatud on lisatud!', 'valid');
  }

  // lisame raamatud tabelisse
  // kl.lisaRaamatTabelisse(raamat);

  // puhastame väljad sisestatud andmed

  kl.puhastaSisend();

}

// raamatu kustutamise sündmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);

function kustutaRaamat(e){
  const kl = new KL();

  // kutsume tabelis oleva raamatu kustutamise funktsiooni
  kl.kustutaRaamatTabelist(e.target);

 //  väljastame vastava teate
onKustutatud = kl.kustutaRaamatTabelist(e.target);


if(onKustutatud){
  kl.teade('Raamat on kustutatud', 'valid');
}

e.preventDefault();
}