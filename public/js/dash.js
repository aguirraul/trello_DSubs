var Promise = TrelloPowerUp.Promise;

/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

//carga de los valores almacenados
t.render(function(){
  return t.get('card', 'shared','solution')
  .then(function(solution){window.solution1.value = solution  || 'Pendiente a detallar...'})
});