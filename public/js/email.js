
var Promise = TrelloPowerUp.Promise;
/* global TrelloPowerUp */
var t = TrelloPowerUp.iframe();
var fecha_sistema = moment().format("L");


//devuelve informacion corriente


//carga de los valores almacenados
t.render(function(elementos){
  return Promise.all([

    t.get('card', 'shared','fna'),
    t.get('card', 'shared','appname'),
    t.get('card', 'shared','area'),
    t.get('card', 'shared','nro_ticket'),
    /*descripcion*/t.get('card', 'shared','name'),
    t.get('card', 'shared','severidad'),
    t.get('card', 'shared','urgencia'),
    /*analista*/t.get('card', 'shared','labels'),
    t.get('card', 'shared','expert'),
    /*fecha*/t.get('card', 'shared','registro'),
    t.get('card', 'shared','kind1'),
    t.get('card', 'shared','user'),

     /*fecha    name, shortUrl,dateLastActivity,idMembers*/

  ])
  .spread(function(sfna,sappname,sarea,snro_ticket,sdetail,sseveridad,surgencia,sanalista,sexpert,sregistro,skind1,suser){
    if(sfna != null){document.getElementById("fna").innerHTML =sfna;
                    document.getElementById("fna0").innerHTML =sfna};
    if(sappname != null){document.getElementById("appname").innerHTML =sappname;
                        document.getElementById("appname0").innerHTML =sappname};
    if(sarea != null){document.getElementById("area").innerHTML =sarea};
    if(snro_ticket != null){document.getElementById("nro_ticket").innerHTML =snro_ticket;
                            document.getElementById("nro_ticket0").innerHTML =snro_ticket};
    if(sdetail != null){document.getElementById("detail").innerHTML =sdetail};
    if(sseveridad != null){document.getElementById("severidad").innerHTML =sseveridad};
    if(surgencia != null){document.getElementById("urgencia").innerHTML =surgencia};
    if(sanalista != null){document.getElementById("analista").innerHTML =sanalista};
    if(sexpert != null){document.getElementById("expert").innerHTML =sexpert};
    if(sregistro != null){document.getElementById("date").innerHTML =moment(sregistro).tz("EST").format("DD-MM-YYYY")}else{document.getElementById("date").innerHTML =fecha_sistema};
    if(skind1 != null){
                        if(skind1 =="Requerimiento"){skind1="Orden de Trabajo"};
                        document.getElementById("kind1").innerHTML =skind1.toUpperCase()+":"
                      };
    if(suser != null){document.getElementById("user").innerHTML =suser};
  })
  .then(function(){
    t.sizeTo('#email')
    .done();
  })
});



