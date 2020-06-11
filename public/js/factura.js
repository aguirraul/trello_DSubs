
var Promise = TrelloPowerUp.Promise;

/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();

//carga de los valores almacenados
t.render(function(elementos){
  return Promise.all([
    t.get('card', 'shared','factura_si_no'),
    t.get('card', 'shared','factura_mes'), 
    t.get('card', 'shared','factura_horas'),
  ])
  .spread(function(sfactura_si_no, sfactura_mes, sfactura_horas){
      if(sfactura_si_no != null){window.factura_si_no.value = sfactura_si_no};
      if(sfactura_mes != null){window.factura_mes.value = sfactura_mes};
      if(sfactura_horas != null){window.factura_horas.value = sfactura_horas};
  })
  .then(function(){
    t.sizeTo('#factura')
    .done();
  })
});
// almacenamiento de la info


function guarda_factura(){
 return t.set('card', 'shared', 
              {'factura_si_no': window.factura_si_no.value,
                'factura_mes': window.factura_mes.value,
                 'factura_horas': window.factura_horas.value
              });
  };
