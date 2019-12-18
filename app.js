document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);
document.getElementById('btn3').addEventListener('click', getJsonAPI);

// remote API - remote JSON
function getJsonAPI(){
  fetch('https://api.github.com/users')
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    let out = '';
    data.forEach(function(users){
      out = out + `<li>${users.login}</li>`;
      out = out + `<img src="${users.avatar_url}" width="100">`;
      console.log(out);
    });
    document.getElementById('out').innerHTML = out;
  })
  .catch(function(error) {
    console.log(error);
  })
}
// local Json file
function getJsonData(){
  fetch('data.json')
  .then(function(res){
    console.log(res);
    return res.json();
  })
  .then(function(data){
    console.log(data);
    let out = '';
    data.forEach(function(timetable){
      out = out + `<li>${timetable.opetaja} - ${timetable.aine}</li>`;
      console.log(out);
    });
    document.getElementById('out').innerHTML = out;
  })
  .catch(function(error) {
    console.log(error);
  })
}
// local text file
function getTextData() {
  fetch('text.txt')
  .then(function(res) {
    return res.text();
  })
  .then(function(data){
    console.log(data);
    document.getElementById('out').innerHTML = data;
  })
  .catch(function(error) {
    console.log(error);
  })
}