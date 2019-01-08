
var $login = $('#p-login');
var $box = $('.link-init');
var $p_init = $('#p-inicio ');
var $p_individual = $('#p-individual');
var $p_general = $('#p-general');
var $p_operativa = $('#p-operativa');
var $p_panel =$('#panel-lateral');
var $p_toolbox =$('#panel-herramientas');
var $panel_admin =$('#panel-admin');
var $buscador = $('#buscador');
var $panel_mensajes = $('#panel-mensajes');

var $p_bloqueo = $('#p-bloqueo');
var $es_bloqueo = $('#es-bloqueo');
var $es_ine = $('#es-ine');
var $tb_bloqueo = $('#panel-herramientas-bloqueo');
var $p_ine = $('#p-ine');
var $agregar = $('#agregar');

var modal_usr = document.getElementById('modal-usr');

var $u_plantilla=$("#usr-plantilla");
var $u_columnas=$("#usr-columnas");
var $u_bitacora=$("#usr-bitacora");
var $u_lineas=$("#usr-lineas");
var $u_candados=$("#usr-candados");


var $Close = document.getElementById('bt-close-all');

var $setMenu;

$(document).ready(function(){
    //loader();
    inicializa();
    init();


    var tl = new TimelineMax();
            removeloader();
            tl.to( $login , 0.1, { display: "flex" , opacity:0, xPercent:-50, yPercent:-50, left:"50%", top:"40%"}, 0.5 )
            .to( $login , 0.8, { top:"50%", opacity:1, ease:Back.easeOut} );

            $( "#btn_inicio" ).click(function() {
                var t2 = new TimelineMax();

                var storedName = localStorage.getItem('usuarios','user');
                var storedPw = localStorage.getItem('usuarios','pass');

                var User = document.getElementById('user_app').value;
                var Pass = document.getElementById('pass_app').value;

                    if(User == storedName && Pass == storedPw || User == "Admin" && Pass == "1234"){
                        init();
                        console.log("Acceso a: " + User );

                        localStorage.setItem("User", User);
                    }else{
                        console.log("NO");
                        t2.to( $login , 0.1, { x:10,  ease:Back.easeOut} )
                        .to( $login , 0.1, { x:-10,  ease:Back.easeOut} )
                        .to( $login , 0.1, { x:10,  ease:Back.easeOut} )
                        .to( $login , 0.2, { x:0,  ease:Back.easeOut} );
                    }


            });

    /*
        $.ajax({
            dataType: "json",
            url: '/users.json'

        }).done(function (response) {
            var users = JSON.stringify(response);
            localStorage.setItem('usuarios', users);


            console.log(response);

            $( "#btn_inicio" ).click(function() {
                var t2 = new TimelineMax();

                var storedName = localStorage.getItem('usuarios','user');
                var storedPw = localStorage.getItem('usuarios','pass');

                var User = document.getElementById('user_app').value;
                var Pass = document.getElementById('pass_app').value;

                    if(User == storedName && Pass == storedPw || User == "Admin" && Pass == "1234"){
                        init();
                        console.log("Acceso a: " + User );

                        localStorage.setItem("User", User);
                    }else{
                        console.log("NO");
                        t2.to( $login , 0.1, { x:10,  ease:Back.easeOut} )
                        .to( $login , 0.1, { x:-10,  ease:Back.easeOut} )
                        .to( $login , 0.1, { x:10,  ease:Back.easeOut} )
                        .to( $login , 0.2, { x:0,  ease:Back.easeOut} );
                    }


            });

            var tl = new TimelineMax();
            removeloader();
            tl.to( $login , 0.1, { display: "flex" , opacity:0, xPercent:-50, yPercent:-50, left:"50%", top:"40%"}, 0.5 )
            .to( $login , 0.8, { top:"50%", opacity:1, ease:Back.easeOut} );
        });
        */

});


var loader = function() {

    $("<div id='modal-load'>").prependTo('body');

    $("<div class='overloader'><div class='txt_load'>Cargando...</div></div>").appendTo('#modal-load');
        var pageLimit = 9;

        $("<div>")
          .addClass("sk-cube-grid")
          .prependTo(".overloader");

        for (var i = 1; i <= pageLimit; i++) {
            $("<div>")
                .addClass("sk-cube sk-cube" + i)
                .appendTo(".sk-cube-grid");
        }

};

var removeloader = function() {

    $('#modal-load').remove();

};

var inicializa = function (){
    $p_init.css("display", "none");
    $p_individual.css("display", "none");
    $p_general.css("display", "none");
    $p_operativa.css("display", "none");
    $buscador.css("display", "none");
    $p_panel.css("display", "none");
    $p_toolbox.css("display", "none");
    $panel_admin.css('display','none')
    $login.css("display", "none");
    $panel_mensajes.css("display", "none");

    $p_bloqueo.css("display", "none");
    $p_ine.css("display", "none");
    $agregar.css("display", "none");

    $u_plantilla.css("display", "none");
    $u_columnas.css("display", "none");
    $u_bitacora.css("display", "none");
    $u_lineas.css("display", "none");
    $u_candados.css("display", "none");


}

$box.hover(
    function() {
        TweenLite.to($(this), 0.2, {scale:1.1});
    },
    function() {
        TweenLite.to($(this), 0.1, {scale:1});
    }
);

var init = function(){

  $login.css("display", "none");

  loader();

  setTimeout(function(){
    $login.css("display", "none");
    removeloader();

    console.log("------- INICIO")
    $p_init.css("display", "block");
    TweenMax.staggerFromTo( $(".link-init"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );
    //$(".link-init").css("opacity","1");
    $(".footer-init").css("opacity","1");
    var tl = new TimelineLite();
    /*
    tl.to(".footer-init", 0.3, {y:200})
        .to("#a", 0.6, { opacity:1, y:-170})
        .to("#b", 0.3, {x:108 , y:-170, opacity:1})
        .to("#c", 0.3, {x:-270, y:-170, opacity:1})
        .to(".footer-init", 0.3, {y:0,opacity:1});
    */
    }, 1000);

}

var estructuraA = function (){
   loader();

   setTimeout(function(){
       removeloader();
       $("#es-general").css("display","block");

       $(document).ready(function() {

        var element = $('#table-g thead tr th');
        var i;
        var list = [];

        function allofthem(){

            for(i = 1; i < element.length; ++i) {
                // Do stuff with element[i]
                list.add(   i  + ", 'nada'"   );

            }
        };

        allofthem();

        console.log(list);


        $('#table-g').Tabledit({
            editButton: false,
            removeButton: false,
            columns: {
                identifier: [0, 'id'],
                editable: [ [1, "demo"]]
            }
        });
      });

    }, 3000);
}

    //init();

$( $Close ).click(function() {
    loader();
    inicializa();
});

$(".close-admin").click(function(){
    $("#panel-admin").css("display", "none");
    $(".modal-30").remove();
});

$( ".p-i-bar" ).click(function() {
    $($p_panel).css("display","block");
    $($p_panel).css("opacity","0");
    $('<div class="modal-all"></div>').prependTo('body');

    var tl = new TimelineLite();

    tl.to($p_panel, 0.3, {opacity:1, x:0})
      .to(".modal-all", 0.3, {opacity:1,});

});

$( ".close-panel" ).click(function() {

    var tl = new TimelineLite();

    tl.to($p_panel, 0.3, {opacity:1, x:-500});

    $(".modal-all").remove();

});

$( "#exit" ).click(function() {
    $(".modal-all").remove();
    inicializa();
    init();

});

$( ".p-g-bar" ).click(function() {
    $(".modal-all").remove();
    inicializa();
    init();

});

$('#demo').click(function(){
    var tl = new TimelineLite();
    tl.to($buscador, 0.3, {opacity:1, y:-90, onComplete:function(){
        $buscador.css("display", "none");
        $('.modal-30').remove();
    }});

    estructuraA();

});

$("#panel-mensajes .close-panel").click(function(){
    $panel_mensajes.css("display", "none");
})


$(".close-usr-lat").click(function(){
    $("#modal-usr").remove();

    $u_plantilla.css("display", "none");
    $u_columnas.css("display", "none");
    $u_bitacora.css("display", "none");
    $u_lineas.css("display", "none");
    $u_candados.css("display", "none");

})

$( "#b" ).click(function() {
    $p_init.css("display", "none");

    $p_individual.css("display", "none");
    $p_operativa.css("display", "block");
    $p_general.css("display", "none");
    $p_toolbox.css("display", "block");

    $p_bloqueo.css("display", "none");
    $p_ine.css("display", "none");

    TweenMax.staggerFromTo( $("#p-operativa>div,#panel-herramientas"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

});

$('body').on('click', '.close-panel', function () {
    $('.modal-30, .mod').remove();
    $buscador.css("display", "none");
    $agregar.css("display", "none");
});

$( "#btn-mensajes" ).click(function() {
    $('<div class="modal-30" style="z-index:101;"></div>').prependTo('body');
    TweenMax.staggerFromTo( $("#panel-mensajes"), 0.3, {display:"block", y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

});



var InitButtons = (function(){

    $('#main-contenedor .link-init').click(function () {

        var index = $(this).index();

                switch (index) {
                    case 0:
                    console.log("Administración");
                    $('<div class="modal-30"></div>').prependTo('body');
                    $panel_admin.css('display','block');
                    $("#panel-admin").css('display','block')
                    //$('<div id="panel-admin" class="p-middle"><div class="close-panel fas fa-times"></div><h4><strong>Administración</strong></h4></div>').prependTo('body');
                    break;

                    case 1:
                    console.log("Estructura General");
                    $setMenu = false;
                    $p_init.css("display", "none");
                    $p_individual.css("display", "none");
                    $p_operativa.css("display", "none");
                    $p_general.css("display", "block");
                    $p_toolbox.css("display", "block");

                    $p_bloqueo.css("display", "none");
                    $p_ine.css("display", "none");
                    $p_bloqueo.css("display", "none");
                    $tb_bloqueo.css("display","none");

                    TweenMax.staggerFromTo( $("#p-general>div,#panel-herramientas"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

                    if($( ".tool-down li" ).hasClass( "item-ii" )){
                        $('.item-ii').hide();
                    }



                    break;

                    case 2:
                    console.log("Estructura Individual");

                    $p_init.css("display", "none");

                    $p_individual.css("display", "block");
                    $p_general.css("display", "none");
                    $p_operativa.css("display", "none");
                    $p_toolbox.css("display", "block");

                    $p_bloqueo.css("display", "none");
                    $p_ine.css("display", "none");
                    $p_bloqueo.css("display", "none");
                    $tb_bloqueo.css("display","none");

                    TweenMax.staggerFromTo( $("#p-individual>div,#panel-herramientas"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

                    if($( ".tool-down li" ).hasClass( "item-ii" )){
                        $('.item-ii').show();
                    }

                    break;

                    case 3:
                    console.log("Bloqueo");

                    $p_init.css("display", "none");
                    $p_individual.css("display", "none");
                    $p_general.css("display", "none");
                    $p_operativa.css("display", "none");
                    $p_toolbox.css("display", "none");

                    $p_bloqueo.css("display", "block");
                    $es_bloqueo.css("display", "block");                    
                    $tb_bloqueo.css("display", "block");
                    $p_ine.css("display", "none");

                    TweenMax.staggerFromTo( $("#p-bloqueo>div,#panel-herramientas-bloqueo"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

                    if($( ".tool-down li" ).hasClass( "item-ii" )){
                        $('.item-ii').show();
                    }

                    break;

                    case 4:
                    console.log("INE");

                    $p_init.css("display", "none");
                    $p_individual.css("display", "none");
                    $p_general.css("display", "none");
                    $p_operativa.css("display", "none");
                    $p_toolbox.css("display", "none");

                    $tb_bloqueo.css("display","block");
                    $p_bloqueo.css("display", "none");
                    $es_ine.css("display", "block");
                    $p_ine.css("display", "block");

                    TweenMax.staggerFromTo( $("#p-ine>div,#panel-herramientas-bloqueo"), 0.3, { y:-50, opacity:0}, { y:0, opacity:1,ease:Back.easeOut},0.3 );

                    if($( ".tool-down li" ).hasClass( "item-ii" )){
                        $('.item-ii').show();
                    }

                    break;
                }
    });

})();


var ToolButtons = (function(){

    $('.tool-box ul li').click(function () {


            var index = $(this).index();

            switch (index) {
                case 0:
                $('<div class="modal-30"></div>').prependTo('body');
                $buscador.css("display", "block");
                var tl = new TimelineLite();
                tl.to($buscador, 0.3, {opacity:1, y:48});

                break;

                case 1:
                $('<div class="modal-30"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Descargar</strong></h4></div>').prependTo('body');
                break;

                case 2:
                $('<div class="modal-30"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Guardar</strong></h4></div>').prependTo('body');

                 break;

                 case 3:
                 $('<div class="modal-30"></div>').prependTo('body');
                 $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Mandar Correo</strong></h4></div>').prependTo('body');

                 break;

                 case 4:
                 $('<div class="modal-30"></div>').prependTo('body');
                 $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Copiar version</strong></h4></div>').prependTo('body');

                 break;

                 case 5:
                 $('<div class="modal-30"></div>').prependTo('body');
                 $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Generar Version</strong></h4></div>').prependTo('body');

                 break;

                 case 6:
                 $('<div class="modal-30"></div>').prependTo('body');
                 $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Bloquear</strong></h4></div>').prependTo('body');

                 break;

                default:
                    break;
            }
        });
})();

var ToolButtonsBloq = (function(){

    $('.tool-box-bloq ul li').click(function () {

            var index = $(this).index();

            switch (index) {
                case 0:
                $('<div class="modal-30"></div>').prependTo('body');
                $agregar.css("display", "block");
                var tl = new TimelineLite();
                tl.to($agregar, 0.3, {opacity:1, y:48});

                break;

                case 1:
                $('<div class="modal-30"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Guardar</strong></h4></div>').prependTo('body');
                break;

                case 2:
                $('<div class="modal-30"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Eliminar</strong></h4></div>').prependTo('body');

                 break;

                 case 3:
                 $('<div class="modal-30"></div>').prependTo('body');
                 $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Replicar rango de fechas</strong></h4></div>').prependTo('body');

                 break;

                default:
                    break;
            }
    });
})();

var UserMenu = (function(){

    $('.lat-list li').click(function () {


            var index = $(this).index();

            switch (index) {
                case 0:
                //PLANTILLAS
                TweenMax.staggerFromTo( $("#usr-plantilla"), 0.3, { x:0, opacity:0}, { x:280, "display":"block", opacity:1,ease:Back.easeOut},0.3 );
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                break;

                case 1:
               //COLUMNAS
               TweenMax.staggerFromTo( $("#usr-columnas"), 0.3, { x:0, opacity:0}, { x:280, "display":"block", opacity:1,ease:Back.easeOut},0.3 );
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');



                break;

                case 2:
                //BITACORA
                TweenMax.staggerFromTo( $("#usr-bitacora"), 0.3, { x:0, opacity:0}, { x:280, "display":"block", opacity:1,ease:Back.easeOut},0.3 );
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                 break;

                 case 3:
                 //LINEAS
                 TweenMax.staggerFromTo( $("#usr-lineas"), 0.3, { x:0, opacity:0}, { x:280, "display":"block", opacity:1,ease:Back.easeOut},0.3 );
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                 break;

                 case 4:
                 //CANDADOS
                 TweenMax.staggerFromTo( $("#usr-candados"), 0.3, { x:0, opacity:0}, { x:280, "display":"block", opacity:1,ease:Back.easeOut},0.3 );
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                 break;

                default:
                    break;
            }
        });
})();


var btnsDropdowns = (function(){

    $( ".btn-group" ).each(function() {

      var $thisDrop = $( this );

      $thisDrop.click(function() {
        $thisDrop.find( ".dropdown-menu" ).toggleClass( "selected");

      });
    });

})();


var popUpsEmbebed = (function(){

    $('div[data-popup], button[data-popup], span[data-popup]').each(function(idx){

       var popdata = $(this).data('popup');
       var tooltitulo = $(this).data('popup-titulo');
       var toolcontenido = $(this).data('popup-cont');


        function popCont(){

            $("<div class='popover " + idx + "' id='" + popdata + "'><div class='arrow'></div><div class='btn-close "+ idx +"'><div class='fa fa-times'></div></div><h3 class='popover-title'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div>").appendTo('body');

            $(".popover .btn-close").click(function(){

                    $(this).parent().remove();

            });
        }


        $( this ).click(function() {


          switch ( popdata ) {
            case 'normal' :


              break;
            case 'arriba' :

                  popCont();
                  $( ".popover-title").addClass('warning');

                  TweenLite.to( ".popover#arriba" , 0.4, { top:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });


              break;
            case 'abajo' :

                 popCont();

                TweenLite.to( '.popover#abajo' , 0.4, { bottom:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });

              break;
            case 'derecha' :

                popCont();

                TweenLite.to( '.popover#derecha' , 0.4, { right:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });

              break;

            case 'izquierda' :

                 popCont();

                TweenLite.to( '.popover#izquierda' , 0.4, { left:'4%', opacity: 1, display: 'block', ease: Sine.easeIn });

              break;
            case 'modal' :


                  $("<div id ='temp-modal' class='bkg-modal'><div class='popover popcenter' id='center'><div class='btn-close'><div class='fa fa-times'></div></div><h3 class='popover-title success'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div></div>").appendTo('body');

                  TweenLite.to('.popover#center', 0.4, { top:'40%',display: 'block', ease: Sine.easeIn });


                  $('.bkg-modal, #btn-close').click(function() {
                      SetTimeextendBtn(this);
                    });

                    function SetTimeextendBtn() {
                      $('#temp-modal').remove();
                    }

              break;
          }

        });

    });


})();


var toolTips = (function(){



    $( 'div[data-tooltip], li[data-tooltip], button[data-tooltip], span[data-tooltip]' ).each(function() {

        var tooldata = $(this).data('tooltip');

        $(this).hover(function(e) {

            $(this).append("<div class='pop-up'>" + tooldata + "</div>");

        }, function() {

            $('.pop-up' ).remove();

        });



    });


})();



var intpanel = (function (){

    var $botonusuario = document.getElementById("btn-usuario");

    $(".bt-user").on('click', function (){

      $("<div class='bkg-modal mols' id='user-bkg'></div><div class='user-menu mols'><div class='user-img'><div class='txt-bt fa fa-user' ></div></div><div class='user-txt'>" + localStorage.getItem("User") + "</div><div class='user-line'></div><button class='user-btn' id='bt-close-all'>Cerrar Sesion</button></div>").prependTo('body');

      var openmodalTl = new TimelineMax();
      var $userdiv = ".user-menu div, .user-menu button";

      openmodalTl.staggerTo(".mols", 0.4, {opacity:1, right:0, delay:0.2, ease:Expo.easeOut}, 0.3)

      .staggerFromTo($userdiv, 0.8, {opacity:0, y:-10},{y:0,opacity:1, ease:Expo.easeOut }, 0.2);


      $('#user-bkg').on('click', function () {

        function quitaModals () {
           $("#user-bkg, .user-menu").remove();
        }

        var modalTl = new TimelineMax();


        modalTl
          .to(".bkg-modal", 0.2, {right:-3000,  ease:Expo.easeOut})
          .to(".user-menu", 0.8, {opacity:0 ,right:-500, delay:0.2, ease:Expo.easeOut})
          .call(quitaModals, null, "+=1.5");



      });

      $('#user-exit').on('click', function () {

        function quitaModals () {
           $("#user-bkg, .user-menu").remove();
        }

        var modalTl = new TimelineMax();

        modalTl
          .to(".bkg-modal", 0.2, {right:-3000,  ease:Expo.easeOut})
          .to(".user-menu", 0.8, {opacity:0 ,right:-500, delay:0.2, ease:Expo.easeOut})
          .call(quitaModals, null, "+=1.5");


      });

    });


})();
