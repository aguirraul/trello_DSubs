var lista  = [
{"AE": "","FNA": "COBR","unidad": "A. Cobranzas Banca Minorista","nombre_app": "COBRA","especialista": "Roberto Vallejos","criticidad": "No Crítico"},
{"AE": "AE1011","FNA": "E349","unidad": "A. Infraestructura Y Operaciones De Ti","nombre_app": "Google Desk","especialista": "Erika Ochoa Milla","criticidad": "No Crítico"},

];

var Promise = TrelloPowerUp.Promise;
var fecha_sistema = moment().format("DD/MM/YYYY");

function searchbyfna(){
var s_area=lista.find(x=>x.FNA===window.fna.value).unidad;
var s_expert=lista.find(x=>x.FNA===window.fna.value).especialista;
var s_appname=lista.find(x=>x.FNA===window.fna.value).nombre_app;
  
  window.area.value=s_area;
  window.expert.value=s_expert;
  window.appname.value=s_appname;
};

    
/* global TrelloPowerUp */

var t = TrelloPowerUp.iframe();
// almacenamiento de la info
window.formulario.addEventListener('submit', function(event){
  // Stop the browser trying to submit the form itself.
  event.preventDefault();
  return t.set('card', 'shared', 
               {'capa': window.capa.value, 
                'tipo': window.tipo.value,
                'nro_ticket': window.nro_ticket.value,
                'criticidad': window.criticidad.value,
                'nro_rlm': window.nro_rlm.value,
               })

  .then(function(){
    t.closePopup();
  });
});


//carga de los valores almacenados
t.render(function(elementos){
  return Promise.all([
    t.get('card', 'shared','capa'),
    t.get('card', 'shared','tipo'), 
    t.get('card', 'shared','nro_ticket'),
    t.get('card', 'shared','criticidad'),
    t.get('card', 'shared','nro_rlm')

  ])
  .spread(function(scapa,stipo,snro_ticket,scriticidad,snro_rlm){
      if(scapa != null){window.capa.value = scapa};
      if(stipo != null){window.tipo.value = stipo};
      if(snro_ticket != null){window.nro_ticket.value = snro_ticket};
      if(scriticidad != null){window.criticidad.value = scriticidad};
      if(snro_rlm != null){window.nro_rlm.value = snro_rlm};

  })
  .then(function(){
    t.sizeTo('#formulario')
    .done();
  })
});

