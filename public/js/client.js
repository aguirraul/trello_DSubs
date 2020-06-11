
var GREY_ICON = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fgray.png?1550095177939';
var GREY_EMAIL = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fmessage.png?1559248479348';
var WHITE_ICON = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fwhite.png?1550095183054';
var TAG_GREY = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Ftag_gray.png?1550696167708';
var BOX_GREY = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fbox_gray.png?1550696847098';
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var LOGO_EVERIS='https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fuit2.png?1550698757710';
var GREY_TYPE=null;
var GREY_LAYERS='https://cdn.glitch.com/23a7b04a-d82e-4ad3-ab89-890b2e78362e%2Flayers.png?v=1588125134954';

var randomBadgeColor = function() {
  return ['green', 'orange', 'red'][0];
};
var color_tipo=null;
var color_capa=null;
var color_progress=null;
var nombre_app_t=null;
var kind2_t=null;
var color_kind=null;
var jiraurl=null;
var color_causaraiz=null;
var color_pase=null;
var color_factura=null;
var r=null;
var Promise = window.TrelloPowerUp.Promise;

var WHITE_ICON_DASH = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fdashboard_white.png?1552337147599';
var BLACK_ICON_DASH = 'https://cdn.glitch.com/e33d69f3-9a38-44a3-8532-62f1ee30392d%2Fdashboard_gray.png?1552337145355';

		var getCorrelloMenuCallback = function(boardId) {
			var modalActions = [{
				alt: "Full dashboard",
				position: 'left',
				icon: BLACK_ICON_DASH,
				url: 'www.google.com'
			}]

			return function(t) {
				var global = function(t){
					t.modal({
            fullscreen: true,
            /*url:'https://app.powerbi.com/reportEmbed?reportId=9a6ad874-e9a3-4b93-b241-586b8cda245c&autoAuth=true&ctid=3048dc87-43f0-4100-9acb-ae1971c79395',
						*/url: 'https://app.powerbi.com/view?r=eyJrIjoiNmE4ZTRlNzYtMDBiZS00NDA1LWJiNzktZDRmMmUyNjY3MzljIiwidCI6IjMwNDhkYzg3LTQzZjAtNDEwMC05YWNiLWFlMTk3MWM3OTM5NSIsImMiOjh9',
						title: 'Resultados Globales',
						actions: modalActions
					})
				};
				var analista = function(t){
					t.modal({
            /*fullscreen: true,*/
						url: './dash-analistas.html',
						title: 'Control de Horas',
						actions: modalActions
					})
				};

				return t.popup({
					title: "Selecciona tipo de Reporte",
					items: [
						{
							text: "Resultados Globales",
							callback: global
						},
					]
				});
			}
		}


//se levanta el formulario
window.TrelloPowerUp.initialize({
  
  //permite mostrar boton en la opciones de lar tarjetas
      'card-buttons': function(t, options) {
    return [
      {
      icon: GREY_ICON,
      text: 'Stopper',
      callback: function(t) {
        return t.popup({
          title: "Detallar frente Responsable",
          url: 'actividad.html',
        });
      }
      },
      {
      icon: GREY_ICON,
      text: 'Detalles',
      callback: function(t) {
        return t.popup({
          title: "Información Complementaria",
          url: 'formulario.html',
        });
      }
    },

      ];
    
    },
  
  //añade un boton para el reporte
  'board-buttons': function(t, board) {
				return [
					{
						icon: {
                  dark: WHITE_ICON_DASH,
                  light: BLACK_ICON_DASH
                  },
						text: "Dashboard",
						callback: getCorrelloMenuCallback(board.context.board)
					},
				];
			},
  
  //cartillas resumen de una variable en la miniatura de la tarjeta
    'card-badges': function(t, options) {
    return Promise.all([
         t.get('card', 'shared','nro_ticket'),
          t.get('card', 'shared','criticidad'),
          t.get('card', 'shared','capa'),
          t.get('card', 'shared','tipo'),
          t.get('card', 'shared','progress'),
          t.get('card', 'shared','nro_rlm'),
          t.get('card', 'shared','pase_si_no'),
          t.get('card', 'shared','pase_fecha'),
          t.get('card', 'shared','pase_fecha2'),
          t.get('card', 'shared','pase_fecha3'),
          t.get('card', 'shared','pase_fecha4'),
          t.get('card', 'shared','pase_fecha5'),
    ])
    .spread(function(snro_ticket,scriticidad,scapa,stipo,sprogress,snro_rlm,spase_si_no, spase_fecha, spase_fecha2, spase_fecha3, spase_fecha4, spase_fecha5){
        /*if(sappname.length>28){nombre_app_t=sappname.substring(0,28)+".."}else{nombre_app_t=sappname+" ".repeat(28-sappname.length)}*/
        if(stipo=="DATA"){color_tipo="orange"}else{color_tipo="sky"}
        if(scapa=="RDV"){color_capa="sky"}else{if(scapa=="UDV"){color_capa="blue"}else{color_capa="purple"}}
        if(sprogress*100>=80){color_progress="lime"}else{color_progress="light-gray"}
        if(stipo=='DATA'){GREY_TYPE='https://cdn.glitch.com/23a7b04a-d82e-4ad3-ab89-890b2e78362e%2Fupload-cloud.png?v=1588125134632'}
        else{GREY_TYPE='https://cdn.glitch.com/23a7b04a-d82e-4ad3-ab89-890b2e78362e%2Fsettings.png?v=1588117893080'}

            return [
                    {
                      icon: TAG_GREY,
                      text:(snro_ticket||'TA00000XXXX')+' | '+(snro_rlm||'RLM00000000XXXX'),
                    },
                    {
                      icon: scapa ? GREY_LAYERS:'',
                      text: scapa? scapa.toUpperCase() :'',
                      color: scapa ? color_capa : null,
                    },
                    {
                      icon: stipo ? GREY_TYPE:'',
                      text: stipo? stipo.toUpperCase().substring(0,6) :'',
                      /*color: stipo ? color_tipo : null,*/
                    },
                    {
                      text: sprogress? "STATUS: "+Math.round(sprogress*100)+'%':'',
                      color: sprogress ? color_progress : null,
                    },
                    {
                      text: spase_si_no? "FECHA PASE: "+moment(spase_fecha).locale('es').tz("EST").format("DD-MMMM-YY h:mm a").toUpperCase():'',
                      color: spase_si_no?"light-gray":null,
                    },
                    
                  ];
      })
    },
  
  // devuleve comentarios en un texto más amplio--ventana de comentarios de solucion!!
 /* 'card-back-section': function(t, options){
    return {
      title: 'Solución Planteada',
			icon: GRAY_ICON, // Must be a gray icon, colored icons not allowed.
			content: {
				type: 'iframe',
				url: t.signUrl('./solucion.html'),
				height: 150 // Max height is 500
			}
		};
	},*/

  //permite resumir la informacion ingresada desde cada una de las cartillas--Ventana grande!
  'card-detail-badges': function(t, options){
      return Promise.all([
          t.get('card', 'shared','nro_ticket'),
          t.get('card', 'shared','criticidad'),
          t.get('card', 'shared','capa'),
          t.get('card', 'shared','tipo'),
          t.get('card', 'shared','progress'),
          t.get('card', 'shared','nro_rlm'),
          t.get('card', 'shared','pase_si_no'),
          /*t.get('card', 'shared','jiralink'),*/
      ])
      .spread(function(snro_ticket,scriticidad,scapa,stipo,sprogress,snro_rlm,spase_si_no){
          if(stipo=="DATA"){color_tipo="orange"}else{color_tipo="sky"}
          if(scapa=="RDV"){color_capa="blue"}else{if(scapa=="UDV"){color_capa="purple"}else{color_capa="lime"}}
          if(spase_si_no==null||spase_si_no==""){color_pase="red"}else{color_pase="blue"}
          /*if(sjiralink==null){ jiraurl="https://steps.everis.com/jiralatam/browse/"}else {jiraurl=sjiralink}*/
        return [ {
              title:'CAPA',
              text: scapa||"Ingresar..",
              condition: 'always',
              color: scapa  ? color_capa : null,
              }, 
              {
              title:'TIPO',
              text: stipo||"...",
              condition: 'always',
              color: scapa  ? color_tipo : null,
              },
              {
              title:'ClearQuest',
              text: snro_ticket||"...",
              condition: 'always',
              },
              {
              title:'Remedy',
              text: snro_rlm||"...",
              condition: 'always',
              },
              {
              title:'Criticidad',
              text: scriticidad   || "...",
              condition: 'always',
              },
    
              {
              title:'STATUS',
              text: Math.round(sprogress*100)+'%',
              condition: 'always',
              callback: function(t) {
                                    return t.popup({
                                    title: "Estado de la atención",
                                    url: 'progreso.html',
                                    });
                                    }
              },
              {
              title:'PASE PROD',
              text: spase_si_no || "Detallar...",
              condition: 'always',
              color:spase_si_no?color_pase:"red",
              callback: function(t) {
                                    return t.popup({
                                    title: "Detalle de Pase",
                                    url: 'pase_produccion.html',
                                    });
                                    }
              },
               ];
    });
    }
});




