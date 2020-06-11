
var Promise = TrelloPowerUp.Promise;
/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();
var id_card1 = TrelloPowerUp.get('card').id;

//carga de los valores almacenados
t.render(function(elementos){
  return Promise.all([
    t.get('card', 'shared','fna')
  ])
  
  .spread(function(sfna){
    var id_card = "olaaaa"/*trello.get('card').id*/;
    document.getElementById("actividad_detalle").innerHTML =id_card
  })
  
  .then(function(){
    t.sizeTo('#actividad')
    .done();
  })
});

// almacenamiento de la info como comntario
function guarda_actividad(){
  
  var id_card = trello.get('card').id;
  var data = null;
  
  var actividad_fecha = window.actividad_fecha.value;
  var actividad_detalle= window.actividad_detalle.value;

var data = null;
var xhr = new XMLHttpRequest();

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://api.trello.com/1/cards/"+id_card+"/actions/comments?text="+text+"&key=0d0ad0d0f15077a5f2b55d277c51085d&token=3b05c87a3aa6a037b33e159fa527ce7e63c6438c6fd4832348675e68fa8bb810");
xhr.send(data);
    
  };



