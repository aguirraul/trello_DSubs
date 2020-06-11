
var Promise = TrelloPowerUp.Promise;

/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

//carga de los valores almacenados
t.render(function(){
  return t.get('card', 'shared','progress')
  .then(function(progress){window.progress.value = progress})
  .then(function(){
    t.sizeTo('#progreso')
    .done();
  })
});

// almacenamiento de la info


function guarda_progreso(){
 return t.set('card', 'shared', 'progress',window.progress.value);
  };

