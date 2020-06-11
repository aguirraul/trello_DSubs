
var Promise = TrelloPowerUp.Promise;
/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();

function habilitar_detalle(){
  var condicion=window.pase_si_no.value
  if(condicion!="Sí"){
    document.getElementById('pase_rati_tipo').disabled = true;
    document.getElementById('pase_rati_obs').disabled = true;
    document.getElementById('pase_fecha').disabled = true;
    
    document.getElementById('pase_rati_tipo').style.backgroundColor = "rgb(235, 235, 228)";
    document.getElementById('pase_rati_obs').style.backgroundColor = "rgb(235, 235, 228)";
    
    document.getElementsByClassName('tablinks')[0].style.backgroundColor = "#dfe3e6";
    document.getElementsByClassName('tablinks')[0].style.color = "gray";
    
  }else{
    document.getElementById('pase_rati_tipo').disabled = false;
    document.getElementById('pase_rati_obs').disabled = false;
    document.getElementById('pase_fecha').disabled = false;
    
    document.getElementById('pase_rati_tipo').style.backgroundColor = "white";
    document.getElementById('pase_rati_obs').style.backgroundColor = "white";
    
    document.getElementsByClassName('tablinks')[0].style.backgroundColor = "rgba(62, 132, 173,0.6)";
    document.getElementsByClassName('tablinks')[0].style.color = "white";
  };
};

function habilitar_detalle2(){
  var condicion=window.pase_si_no2.value
  if(condicion!="Sí"){
    document.getElementById('pase_rati_tipo2').disabled = true;
    document.getElementById('pase_rati_obs2').disabled = true;
    document.getElementById('pase_fecha2').disabled = true;
    
    document.getElementById('pase_rati_tipo2').style.backgroundColor = "rgb(235, 235, 228)";
    document.getElementById('pase_rati_obs2').style.backgroundColor = "rgb(235, 235, 228)";
    
    document.getElementsByClassName('tablinks')[1].style.backgroundColor = "#dfe3e6";
    document.getElementsByClassName('tablinks')[1].style.color = "gray";
  }else{
    document.getElementById('pase_rati_tipo2').disabled = false;
    document.getElementById('pase_rati_obs2').disabled = false;
    document.getElementById('pase_fecha2').disabled = false;
    
    document.getElementById('pase_rati_tipo2').style.backgroundColor = "white";
    document.getElementById('pase_rati_obs2').style.backgroundColor = "white";
    
    document.getElementsByClassName('tablinks')[1].style.backgroundColor = "rgba(62, 132, 173,0.6)";
    document.getElementsByClassName('tablinks')[1].style.color = "white";
  };
};

function habilitar_detalle3(){
  var condicion=window.pase_si_no3.value
  if(condicion!="Sí"){
    document.getElementById('pase_rati_tipo3').disabled = true;
    document.getElementById('pase_rati_obs3').disabled = true;
    document.getElementById('pase_fecha3').disabled = true;
    
    document.getElementById('pase_rati_tipo3').style.backgroundColor = "rgb(235, 235, 228)";
    document.getElementById('pase_rati_obs3').style.backgroundColor = "rgb(235, 235, 228)";
    
    document.getElementsByClassName('tablinks')[2].style.backgroundColor = "#dfe3e6";
    document.getElementsByClassName('tablinks')[2].style.color = "gray";
  }else{
    document.getElementById('pase_rati_tipo3').disabled = false;
    document.getElementById('pase_rati_obs3').disabled = false;
    document.getElementById('pase_fecha3').disabled = false;
    
    document.getElementById('pase_rati_tipo3').style.backgroundColor = "white";
    document.getElementById('pase_rati_obs3').style.backgroundColor = "white";

    document.getElementsByClassName('tablinks')[2].style.backgroundColor = "rgba(62, 132, 173,0.6)";
    document.getElementsByClassName('tablinks')[2].style.color = "white";
  };
};

function habilitar_detalle4(){
  var condicion=window.pase_si_no4.value
  if(condicion!="Sí"){
    document.getElementById('pase_rati_tipo4').disabled = true;
    document.getElementById('pase_rati_obs4').disabled = true;
    document.getElementById('pase_fecha4').disabled = true;
    
    document.getElementById('pase_rati_tipo4').style.backgroundColor = "rgb(235, 235, 228)";
    document.getElementById('pase_rati_obs4').style.backgroundColor = "rgb(235, 235, 228)";
    
    document.getElementsByClassName('tablinks')[3].style.backgroundColor = "#dfe3e6";
    document.getElementsByClassName('tablinks')[3].style.color = "gray";
  }else{
    document.getElementById('pase_rati_tipo4').disabled = false;
    document.getElementById('pase_rati_obs4').disabled = false;
    document.getElementById('pase_fecha4').disabled = false;
    
    document.getElementById('pase_rati_tipo4').style.backgroundColor = "white";
    document.getElementById('pase_rati_obs4').style.backgroundColor = "white";
    
    document.getElementsByClassName('tablinks')[3].style.backgroundColor = "rgba(62, 132, 173,0.6)";
    document.getElementsByClassName('tablinks')[3].style.color = "white";
  };
};

function habilitar_detalle5(){
  var condicion=window.pase_si_no5.value
  if(condicion!="Sí"){
    document.getElementById('pase_rati_tipo5').disabled = true;
    document.getElementById('pase_rati_obs5').disabled = true;
    document.getElementById('pase_fecha5').disabled = true;
    
    document.getElementById('pase_rati_tipo5').style.backgroundColor = "rgb(235, 235, 228)";
    document.getElementById('pase_rati_obs5').style.backgroundColor = "rgb(235, 235, 228)";
    
    document.getElementsByClassName('tablinks')[4].style.backgroundColor = "#dfe3e6";
    document.getElementsByClassName('tablinks')[4].style.color = "gray";
  }else{
    document.getElementById('pase_rati_tipo5').disabled = false;
    document.getElementById('pase_rati_obs5').disabled = false;
    document.getElementById('pase_fecha5').disabled = false;
    
    document.getElementById('pase_rati_tipo5').style.backgroundColor = "white";
    document.getElementById('pase_rati_obs5').style.backgroundColor = "white";
    
    document.getElementsByClassName('tablinks')[4].style.backgroundColor = "rgba(62, 132, 173,0.6)";
    document.getElementsByClassName('tablinks')[4].style.color = "white";
  };
};

function habilitar_rati(){
  var condicion=window.pase_rati_tipo.value
  if(condicion=="Reversión Total" ||condicion=="Reversión Parcial"||condicion=="Reversión Administrativa"){
    document.getElementById('pase_rati_obs').style.visibility="visible";
    document.getElementById('pase_rati_obs').disabled = false;
    document.getElementById('pase_rati_obs').placeholder= "Detalle los motivos de la reversión...";
  }else if(condicion=="Ratificación Parcial"){
    document.getElementById('pase_rati_obs').style.visibility="visible";
    document.getElementById('pase_rati_obs').disabled = false;
    document.getElementById('pase_rati_obs').placeholder= "Detalle lo pendiente...";
  }else{
    document.getElementById('pase_rati_obs').style.visibility="hidden";
  };
};



//carga de los valores almacenados
t.render(function(elementos){
  return Promise.all([
    t.get('card', 'shared','pase_si_no'),
    t.get('card', 'shared','pase_fecha'),
    t.get('card', 'shared','pase_rati_tipo'),
    t.get('card', 'shared','pase_rati_obs'),
    
    t.get('card', 'shared','pase_si_no2'),
    t.get('card', 'shared','pase_fecha2'),
    t.get('card', 'shared','pase_rati_tipo2'),
    t.get('card', 'shared','pase_rati_obs2'),
    
    t.get('card', 'shared','pase_si_no3'),
    t.get('card', 'shared','pase_fecha3'),
    t.get('card', 'shared','pase_rati_tipo3'),
    t.get('card', 'shared','pase_rati_obs3'),
    
    t.get('card', 'shared','pase_si_no4'),
    t.get('card', 'shared','pase_fecha4'),
    t.get('card', 'shared','pase_rati_tipo4'),
    t.get('card', 'shared','pase_rati_obs4'),
    
    t.get('card', 'shared','pase_si_no5'),
    t.get('card', 'shared','pase_fecha5'),
    t.get('card', 'shared','pase_rati_tipo5'),
    t.get('card', 'shared','pase_rati_obs5')
  ])
  .spread(function(spase_si_no, spase_fecha, spase_rati_tipo, spase_rati_obs,
                   spase_si_no2,spase_fecha2,spase_rati_tipo2,spase_rati_obs2,
                   spase_si_no3,spase_fecha3,spase_rati_tipo3,spase_rati_obs3,
                   spase_si_no4,spase_fecha4,spase_rati_tipo4,spase_rati_obs4,
                   spase_si_no5,spase_fecha5,spase_rati_tipo5,spase_rati_obs5){
    
      if(spase_si_no != null){window.pase_si_no.value = spase_si_no; habilitar_detalle()};
      if(spase_fecha != null){window.pase_fecha.value = spase_fecha};
      if(spase_rati_tipo != null){window.pase_rati_tipo.value = spase_rati_tipo};
      if(spase_rati_obs != null){window.pase_rati_obs.value = spase_rati_obs};
    
      if(spase_si_no2 != null){window.pase_si_no2.value = spase_si_no2; habilitar_detalle2()}else{window.pase_si_no2.value = 'No'};
      if(spase_fecha2 != null){window.pase_fecha2.value = spase_fecha2};
      if(spase_rati_tipo2 != null){window.pase_rati_tipo2.value = spase_rati_tipo2};
      if(spase_rati_obs2 != null){window.pase_rati_obs2.value = spase_rati_obs2};
    
      if(spase_si_no3 != null){window.pase_si_no3.value = spase_si_no3; habilitar_detalle3()}else{window.pase_si_no3.value = 'No'};
      if(spase_fecha3 != null){window.pase_fecha3.value = spase_fecha3};
      if(spase_rati_tipo3 != null){window.pase_rati_tipo3.value = spase_rati_tipo3};
      if(spase_rati_obs3 != null){window.pase_rati_obs3.value = spase_rati_obs3};
    
      if(spase_si_no4 != null){window.pase_si_no4.value = spase_si_no4; habilitar_detalle4()}else{window.pase_si_no4.value = 'No'};
      if(spase_fecha4 != null){window.pase_fecha4.value = spase_fecha4};
      if(spase_rati_tipo4 != null){window.pase_rati_tipo4.value = spase_rati_tipo4};
      if(spase_rati_obs4 != null){window.pase_rati_obs4.value = spase_rati_obs4};
    
      if(spase_si_no5 != null){window.pase_si_no5.value = spase_si_no5; habilitar_detalle5()}else{window.pase_si_no5.value = 'No'};
      if(spase_fecha5 != null){window.pase_fecha5.value = spase_fecha5};
      if(spase_rati_tipo5 != null){window.pase_rati_tipo5.value = spase_rati_tipo5};
      if(spase_rati_obs5 != null){window.pase_rati_obs5.value = spase_rati_obs5};
    
  })
  .then(function(){
    t.sizeTo('#pase_produccion')
    .done();
  })
});
// almacenamiento de la info
function saveandexit(){
    event.preventDefault();
  return t.set('card', 'shared', 
               {'pase_si_no': window.pase_si_no.value, 
                'pase_fecha': window.pase_fecha.value,
                'pase_rati_tipo': window.pase_rati_tipo.value,
                'pase_rati_obs': window.pase_rati_obs.value,
                
                'pase_si_no2': window.pase_si_no2.value, 
                'pase_fecha2': window.pase_fecha2.value,
                'pase_rati_tipo2': window.pase_rati_tipo2.value,
                'pase_rati_obs2': window.pase_rati_obs2.value,
                
                'pase_si_no3': window.pase_si_no3.value, 
                'pase_fecha3': window.pase_fecha3.value,
                'pase_rati_tipo3': window.pase_rati_tipo3.value,
                'pase_rati_obs3': window.pase_rati_obs3.value,
                
                'pase_si_no4': window.pase_si_no4.value, 
                'pase_fecha4': window.pase_fecha4.value,
                'pase_rati_tipo4': window.pase_rati_tipo4.value,
                'pase_rati_obs4': window.pase_rati_obs4.value,
                
                'pase_si_no5': window.pase_si_no5.value, 
                'pase_fecha5': window.pase_fecha5.value,
                'pase_rati_tipo5': window.pase_rati_tipo5.value,
                'pase_rati_obs5': window.pase_rati_obs5.value
               })
  
.then(function(){
    t.closePopup();
  })
};


window.pase_produccion.addEventListener('submit', function(event){
  event.preventDefault()
});
