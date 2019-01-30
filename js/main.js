var $login = $('#p-login');
var $box = $('.link-init');
var $p_init = $('#p-inicio ');
var $p_individual = $('#p-individual');
var $p_general = $('#p-general');
var $p_panel = $('#panel-lateral');
var $p_panel_der = $('#panel-lateral-der');
var $menu_visualizacion = $('#panel-visualizacion');
var $p_toolbox = $('#panel-herramientas');
var $panel_admin = $('#panel-admin');
var $buscador = $('#buscador');
var $panel_mensajes = $('#panel-mensajes');
var $panel_eliminar = $('#panel-elim-usuario');
var $panle_add_p = $('#panel-add-plantilla');

var $p_bloqueo = $('#p-bloqueo');
var $es_bloqueo = $('#es-bloqueo');
var $es_ine = $('#es-ine');
var $p_ine = $('#p-ine');

var modal_usr = document.getElementById('modal-usr');

var $u_plantilla = $("#usr-plantilla");
var $u_columnas = $("#usr-columnas");
var $u_bitacora = $("#usr-bitacora");
var $u_lineas = $("#usr-lineas");
var $u_candados = $("#usr-candados");

var $m_tiempos = $(".menu-tiempos");


var $Close = document.getElementById('bt-close-all');

var $setMenu;

$(document).ready(function() {
    //loader();
    inicializa();
    init();

    $("#get-programas").load("infodata/programas-slc" + $(this).val() + ".txt");
    $("#get-programas-linea").load("infodata/programas-slc" + $(this).val() + ".txt");



    var tl = new TimelineMax();
    removeloader();
    tl.to($login, 0.1, { display: "flex", opacity: 0, xPercent: -50, yPercent: -50, left: "50%", top: "40%" }, 0.5)
        .to($login, 0.8, { top: "50%", opacity: 1, ease: Back.easeOut });

    $("#btn_inicio").click(function() {
        var t2 = new TimelineMax();

        var storedName = localStorage.getItem('usuarios', 'user');
        var storedPw = localStorage.getItem('usuarios', 'pass');

        var User = document.getElementById('user_app').value;
        var Pass = document.getElementById('pass_app').value;

        if (User == storedName && Pass == storedPw || User == "Admin" && Pass == "1234") {
            init();
            console.log("Acceso a: " + User);

            localStorage.setItem("User", User);
        } else {
            console.log("NO");
            t2.to($login, 0.1, { x: 10, ease: Back.easeOut })
                .to($login, 0.1, { x: -10, ease: Back.easeOut })
                .to($login, 0.1, { x: 10, ease: Back.easeOut })
                .to($login, 0.2, { x: 0, ease: Back.easeOut });
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

var inicializa = function() {
    $p_init.css("display", "none");
    $p_individual.css("display", "none");
    $p_general.css("display", "none");
    $buscador.css("display", "none");
    $p_panel.css("display", "none");
    $p_panel_der.css("display", "none");
    $p_toolbox.css("display", "none");
    $panel_admin.css('display', 'none')
    $login.css("display", "none");
    $panel_mensajes.css("display", "none");
    $panel_eliminar.css("display", "none");
    $panle_add_p.css("display", "none");
    $menu_visualizacion.css("display", "none");

    $p_bloqueo.css("display", "none");
    $p_ine.css("display", "none");

    $u_plantilla.css("display", "none");
    $u_columnas.css("display", "none");
    $u_bitacora.css("display", "none");
    $u_lineas.css("display", "none");
    $u_candados.css("display", "none");

    $m_tiempos.css("display", "none");

    $(".data-load").remove();
    $(".modal-all, .modal-30, #modal-20").remove();

}

$box.hover(
    function() {
        TweenLite.to($(this), 0.2, { scale: 1.1 });
    },
    function() {
        TweenLite.to($(this), 0.1, { scale: 1 });
    }
);

var init = function() {

    $login.css("display", "none");

    loader();

    setTimeout(function() {
        $login.css("display", "none");
        removeloader();

        console.log("------- INICIO")
        $p_init.css("display", "block");
        TweenMax.staggerFromTo($(".link-init"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);
        //$(".link-init").css("opacity","1");
        $(".footer-init").css("opacity", "1");
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

var estructuraGeneral = function() {
    loader();
    $("#es-general").load("infodata/estructura-general.html");

    setTimeout(function() {
        removeloader();
        $("#es-general").css("display", "block");

        $(document).ready(function() {

            var element = $('#table-g thead tr th');
            var i;
            var list = [];

            function allofthem() {

                for (i = 1; i < element.length; ++i) {
                    // Do stuff with element[i]
                    list.add(i + ", 'nada'");

                }
            };

            allofthem();

            console.log(list);


            $('#table-g').Tabledit({
                editButton: false,
                removeButton: false,
                columns: {
                    identifier: [0, 'id'],
                    editable: [
                        [1, "demo"]
                    ]
                }
            });
        });

    }, 2000);

}

//init();
var buscador = function() {
    $('<div class="modal-30"></div>').prependTo('body');
    var tl = new TimelineLite();

    if ($setMenu == "e-general") {
        $buscador.css("display", "block");
        tl.to($buscador, 0.3, { opacity: 1, y: 48 });
        $("#objs-busqueda div").show();
        $("#objs-busqueda div:nth-child(3),#objs-busqueda div:nth-child(6), #objs-busqueda div:nth-child(7),#objs-busqueda div:nth-child(8)").hide();

    } else if ($setMenu == "e-individual") {
        $buscador.css("display", "block");
        tl.to($buscador, 0.3, { opacity: 1, y: 48 });
        $("#objs-busqueda div").show();
        $("#objs-busqueda div:nth-child(6),#objs-busqueda div:nth-child(7),#objs-busqueda div:nth-child(8)").hide();

    } else if ($setMenu == "e-bloqueo") {
        $buscador.css("display", "block");
        tl.to($buscador, 0.3, { opacity: 1, y: 48 });
        $("#objs-busqueda div").show();
        $("#objs-busqueda div:nth-child(3),#objs-busqueda div:nth-child(4),#objs-busqueda div:nth-child(5),#objs-busqueda div:nth-child(6)").hide();

    } else if ($setMenu == "e-ine") {
        $buscador.css("display", "block");
        tl.to($buscador, 0.3, { opacity: 1, y: 48 });
        $("#objs-busqueda div").show();
        $("#objs-busqueda div:nth-child(3), #objs-busqueda div:nth-child(4), #objs-busqueda div:nth-child(5)").hide();

    }
};

$('#btn-search').click(function() {
    var tl = new TimelineLite();
    tl.to($buscador, 0.3, {
        opacity: 1,
        y: -90,
        onComplete: function() {
            $buscador.css("display", "none");
            $('.modal-30').remove();
        }
    });

    if ($setMenu == "e-general") {
        estructuraGeneral();
        $(".tool-down li:nth-child(3)").show();

    } else if ($setMenu == "e-individual") {
        $("#es-individual").load("infodata/estructura-individual.html");
        $("#es-individual").css("display", "block");
        /*var esIndProg = $("#get-programas li input").append();
        var esIndFinal = esIndProg.val();
        console.log(esIndFinal);

        switch (esIndProg) {
            case 'BARRAS DE AJUSTE':
                console.log("primero");
                break;
            case 'snacks':
                vals = data.snacks.split(",");
                break;
            case 'base':
                vals = ['Please choose from above'];
        }*/


    } else if ($setMenu == "e-bloqueo") {
        $("#es-bloqueo").load("infodata/bloqueos.html");
        $("#es-bloqueo").css("display", "block");

    } else if ($setMenu == "e-ine") {
        $("#es-ine").load("infodata/ine.html");
        $("#es-ine").css("display", "block");

    }



});

$("#cls-tiempos").click(function() {
    $(".menu-tiempos").css("display", "none");
    $("#es-individual").css("margin", "65px 30px");
});

$($Close).click(function() {
    loader();
    inicializa();
});

$(".close-admin").click(function() {
    $("#panel-admin").css("display", "none");
    $(".modal-20").remove();
});

$(".p-i-bar").click(function() {
    $($p_panel).css("display", "block");
    $($p_panel).css("opacity", "0");
    $('<div class="modal-all"></div>').prependTo('body');

    var tl = new TimelineLite();

    tl.to($p_panel, 0.3, { opacity: 1, x: 0 })
        .to(".modal-all", 0.3, { opacity: 1, });

});

$(".p-i-not").click(function() {
    $($p_panel_der).css("display", "block");
    $($p_panel_der).css("opacity", "0");
    $('<div class="modal-all"></div>').prependTo('body');

    var tl = new TimelineLite();

    tl.to($p_panel_der, 0.3, { opacity: 1, x: 0 })
        .to(".modal-all", 0.3, { opacity: 1, });

});

$(".close-panel").click(function() {

    var tl = new TimelineLite();

    tl.to($p_panel, 0.3, { opacity: 1, x: -500 });

    $(".modal-all").remove();

});

$(".close-btn-gdr").click(function() {

    var tl = new TimelineLite();

    tl.to($p_panel, 0.3, { opacity: 1, x: -500 });

    $(".modal-all").remove();

});

$(".close-panel-der").click(function() {

    var tl1 = new TimelineLite();

    tl1.to($p_panel_der, 0.3, { opacity: 1, x: 900 });

    $(".modal-all").remove();

});

$("#close-lateral-derecho").click(function() {

    var tl1 = new TimelineLite();

    tl1.to($menu_visualizacion, 0.3, { opacity: 1, x: 900 });

    $(".modal-all").remove();

});

$("#exit").click(function() {
    $(".modal-all").remove();
    inicializa();
    init();

});

$(".p-g-bar").click(function() {
    inicializa();
    init();

});

$("#panel-mensajes .close-panel").click(function() {
    $panel_mensajes.css("display", "none");
})

$("#panel-elim-usuario .close-panel").click(function() {
    $panel_eliminar.css("display", "none");
})


$(".close-usr-lat").click(function() {
    $("#modal-usr").remove();

    $u_plantilla.css("display", "none");
    $u_columnas.css("display", "none");
    $u_bitacora.css("display", "none");
    $u_lineas.css("display", "none");
    $u_candados.css("display", "none");

})

$("#b").click(function() {
    $p_init.css("display", "none");

    $p_individual.css("display", "none");
    $p_general.css("display", "none");
    $p_toolbox.css("display", "block");

    $p_bloqueo.css("display", "none");
    $p_ine.css("display", "none");

    TweenMax.staggerFromTo($("#p-operativa>div,#panel-herramientas"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

});

$("#btn-add-p").click(function() {

    $('<div class="modal-20" style="z-index:590;"></div>').prependTo('body');
    TweenMax.staggerFromTo($("#panel-add-plantilla"), 0.3, { y: -20, opacity: 0 }, { y: 0, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
});

$("#cls-plantilla").click(function() {
    $("#panel-add-plantilla").css("display", "none");
    $("#modal-20").remove();
});

$('body').on('click', '.close-panel', function() {
    $('.modal-30, .mod').remove();
    $buscador.css("display", "none");
});

$("#btn-mensajes").click(function() {
    $('<div class="modal-30" style="z-index:101;"></div>').prependTo('body');
    TweenMax.staggerFromTo($("#panel-mensajes"), 0.3, { display: "block", y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

});

$("#trash").click(function() {
    $('<div class="modal-30" style="z-index:101;"></div>').prependTo('body');
    TweenMax.staggerFromTo($("#panel-elim-usuario"), 0.3, { display: "block", y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

});
$("#trash1").click(function() {
    $('<div class="modal-30" style="z-index:101;"></div>').prependTo('body');
    TweenMax.staggerFromTo($("#panel-elim-usuario"), 0.3, { display: "block", y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

});

$("#get-programas").change(function() {

    var $dropdown = $(this);

    $.getJSON("infodata/programas-slc.json", function(data) {

        var key = $dropdown.val();
        var vals = [];

        switch (key) {
            case 'beverages':
                vals = data.beverages.split(",");
                break;
            case 'snacks':
                vals = data.snacks.split(",");
                break;
            case 'base':
                vals = ['Please choose from above'];
        }

        var $secondChoice = $("#second-choice");
        $secondChoice.empty();
        $.each(vals, function(index, value) {
            $secondChoice.append("<li> <input type='checkbox' value='value'>" + value + "</li>");
        });

    });
});

var InitButtons = (function() {
    var $ul = $('.tool-down');

    $('#main-contenedor .link-init').click(function() {

        var index = $(this).index();

        switch (index) {
            case 0:
                console.log("Administración");
                $('<div class="modal-20"></div>').prependTo('body');
                $panel_admin.css('display', 'block');
                $("#panel-admin").css('display', 'block')
                break;

            case 1:
                console.log("Estructura General");
                $setMenu = "e-general";
                $p_init.css("display", "none");
                $p_individual.css("display", "none");
                $p_general.css("display", "block");
                $p_toolbox.css("display", "block");


                $p_bloqueo.css("display", "none");
                $p_ine.css("display", "none");
                $p_bloqueo.css("display", "none");

                TweenMax.staggerFromTo($("#p-general>div,#panel-herramientas"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);
                $ul.find('li').show();
                $ul.find('li').slice(1, 12).hide();


                break;

            case 2:
                console.log("Estructura Individual");
                $setMenu = "e-individual";

                $p_init.css("display", "none");

                $p_individual.css("display", "block");
                $p_general.css("display", "none");
                $p_toolbox.css("display", "block");
                $p_bloqueo.css("display", "none");
                $p_ine.css("display", "none");
                $p_bloqueo.css("display", "none");

                TweenMax.staggerFromTo($("#p-individual>div,#panel-herramientas"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

                $ul.find('li').show();
                $('.tool-down li:nth-child(10)').hide();
                $('.tool-down li:nth-child(11)').hide();
                $('.tool-down li:nth-child(12)').hide();

                break;

            case 3:
                console.log("Bloqueo");
                $setMenu = "e-bloqueo";

                $p_init.css("display", "none");
                $p_individual.css("display", "none");
                $p_general.css("display", "none");
                $p_toolbox.css("display", "block");
                $p_bloqueo.css("display", "block");

                $es_bloqueo.css("display", "block");


                $p_ine.css("display", "none");

                TweenMax.staggerFromTo($("#p-bloqueo>div,#panel-herramientas"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);
                $ul.find('li').show();
                $ul.find('li').slice(1, 6).hide();
                $('.tool-down li:nth-child(9)').hide();

                break;

            case 4:
                console.log("INE");
                $setMenu = "e-ine";

                $p_init.css("display", "none");
                $p_individual.css("display", "none");
                $p_general.css("display", "none");
                $p_toolbox.css("display", "block");
                $p_bloqueo.css("display", "none");

                $es_ine.css("display", "block");
                $p_ine.css("display", "block");

                TweenMax.staggerFromTo($("#p-ine>div,#panel-herramientas"), 0.3, { y: -50, opacity: 0 }, { y: 0, opacity: 1, ease: Back.easeOut }, 0.3);

                $ul.find('li').show();
                $ul.find('li').slice(1, 6).hide();
                $('.tool-down li:nth-child(10)').hide();


                break;
        }
    });

})();

var ToolButtons = (function() {

    $('.tool-box ul li').click(function() {


        var index = $(this).index();

        switch (index) {
            case 0:

                buscador();

                break;

            case 1:

                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $("#my-element-lin").css("visibility", "visible");

                break;
            case 2:
                if ($setMenu == "e-individual") {
                    $(".menu-tiempos").css("display", "block");
                    $("#es-individual").css("margin", "65px 19% 25px 30px");

                } else if ($setMenu == "e-general") {
                    $($menu_visualizacion).css("display", "block");
                    $($menu_visualizacion).css("opacity", "0");
                    $('<div class="modal-all"></div>').prependTo('body');

                    var tl = new TimelineLite();

                    tl.to($menu_visualizacion, 0.3, { opacity: 1, x: 0 })
                        .to(".modal-all", 0.3, { opacity: 1, });
                }


                break;
            case 3:

                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Exportar</strong></h4></div>').prependTo('body');
                break;

            case 4:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Mandar Correo</strong></h4></div>').prependTo('body');

                break;

            case 5:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Generar Version</strong></h4></div>').prependTo('body');

                break;

            case 6:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Bloquear Version</strong></h4></div>').prependTo('body');

                break;

            case 7:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Guardar</strong></h4><h5 style="text-align:center;">¿Validar información actualizada?</h5> <button class="close-btn-gdr success" style="margin: 0 auto;margin-top: 22px;">ACEPTAR</button></div>').prependTo('body');

                break;

            case 8:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Replicar</strong></h4></div>').prependTo('body');

                break;
            case 9:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $("#my-element-bloq-rep").css("visibility", "visible");
                //$('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Replicar 2</strong></h4></div>').prependTo('body');

                break;
            case 10:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Eliminar</strong></h4></div>').prependTo('body');

                break;
            case 11:
                $('<div class="modal-30" style="z-index:90;"></div>').prependTo('body');
                $('<div id="my-element" class="p-middle mod"><div class="close-panel fas fa-times"></div><h4 class="tit-tut"><strong>Enviar a Ithic</strong></h4></div>').prependTo('body');

                break;

            default:
                break;
        }
    });
})();

var UserMenu = (function() {

    $('.lat-list li').click(function() {


        var index = $(this).index();

        switch (index) {
            case 0:
                //PLANTILLAS
                TweenMax.staggerFromTo($("#usr-plantilla"), 0.3, { x: 0, opacity: 0 }, { x: 280, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                break;

            case 1:
                //COLUMNAS
                TweenMax.staggerFromTo($("#usr-columnas"), 0.3, { x: 0, opacity: 0 }, { x: 280, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');



                break;

            case 2:
                //BITACORA
                TweenMax.staggerFromTo($("#usr-bitacora"), 0.3, { x: 0, opacity: 0 }, { x: 280, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                break;

            case 3:
                //LINEAS
                TweenMax.staggerFromTo($("#usr-lineas"), 0.3, { x: 0, opacity: 0 }, { x: 280, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                break;

            case 4:
                //CANDADOS
                TweenMax.staggerFromTo($("#usr-candados"), 0.3, { x: 0, opacity: 0 }, { x: 280, "display": "block", opacity: 1, ease: Back.easeOut }, 0.3);
                $('<div class="modal-30" id="modal-usr" style="z-index:502;"></div>').prependTo('body');


                break;

            default:
                break;
        }
    });
})();



var LoadPlantilla = (function() {

    $('#load-plantilla>div').click(function() {

        var index = $(this).index();

        switch (index) {
            case 0:
                console.log("0");

                break;

            case 1:

                break;

            case 2:


                break;

            case 3:


                break;

            case 4:


                break;

            default:
                break;
        }
    });
})();


var btnsDropdowns = (function() {

    $(".btn-group").each(function() {

        var $thisDrop = $(this);

        $thisDrop.click(function() {
            $thisDrop.find(".dropdown-menu").toggleClass("selected");

        });
    });

})();


var popUpsEmbebed = (function() {

    $('div[data-popup], button[data-popup], span[data-popup]').each(function(idx) {

        var popdata = $(this).data('popup');
        var tooltitulo = $(this).data('popup-titulo');
        var toolcontenido = $(this).data('popup-cont');


        function popCont() {

            $("<div class='popover " + idx + "' id='" + popdata + "'><div class='arrow'></div><div class='btn-close " + idx + "'><div class='fa fa-times'></div></div><h3 class='popover-title'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div>").appendTo('body');

            $(".popover .btn-close").click(function() {

                $(this).parent().remove();

            });
        }


        $(this).click(function() {


            switch (popdata) {
                case 'normal':


                    break;
                case 'arriba':

                    popCont();
                    $(".popover-title").addClass('warning');

                    TweenLite.to(".popover#arriba", 0.4, { top: '4%', opacity: 1, display: 'block', ease: Sine.easeIn });


                    break;
                case 'abajo':

                    popCont();

                    TweenLite.to('.popover#abajo', 0.4, { bottom: '4%', opacity: 1, display: 'block', ease: Sine.easeIn });

                    break;
                case 'derecha':

                    popCont();

                    TweenLite.to('.popover#derecha', 0.4, { right: '4%', opacity: 1, display: 'block', ease: Sine.easeIn });

                    break;

                case 'izquierda':

                    popCont();

                    TweenLite.to('.popover#izquierda', 0.4, { left: '4%', opacity: 1, display: 'block', ease: Sine.easeIn });

                    break;
                case 'modal':


                    $("<div id ='temp-modal' class='bkg-modal'><div class='popover popcenter' id='center'><div class='btn-close'><div class='fa fa-times'></div></div><h3 class='popover-title success'>" + tooltitulo + "</h3><div class='popover-content'><p>" + toolcontenido + "</p></div></div></div>").appendTo('body');

                    TweenLite.to('.popover#center', 0.4, { top: '40%', display: 'block', ease: Sine.easeIn });


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


var toolTips = (function() {

    $('div[data-tooltip], li[data-tooltip], button[data-tooltip], span[data-tooltip], thead>tr>th[data-tooltip], tbody>tr>td[data-tooltip]').each(function() {

        var tooldata = $(this).data('tooltip');

        $(this).hover(function(e) {

            $(this).append("<div class='pop-up'>" + tooldata + "</div>");

        }, function() {

            $('.pop-up').remove();

        });

    });

})();


var intpanel = (function() {

    var $botonusuario = document.getElementById("btn-usuario");

    $(".bt-user").on('click', function() {

        $("<div class='bkg-modal mols' id='user-bkg'></div><div class='user-menu mols'><div class='user-img'><div class='txt-bt fa fa-user' ></div></div><div class='user-txt'>" + localStorage.getItem("User") + "</div><div class='user-line'></div><button class='user-btn' id='bt-close-all'>Cerrar Sesion</button></div>").prependTo('body');

        var openmodalTl = new TimelineMax();
        var $userdiv = ".user-menu div, .user-menu button";

        openmodalTl.staggerTo(".mols", 0.4, { opacity: 1, right: 0, delay: 0.2, ease: Expo.easeOut }, 0.3)

        .staggerFromTo($userdiv, 0.8, { opacity: 0, y: -10 }, { y: 0, opacity: 1, ease: Expo.easeOut }, 0.2);


        $('#user-bkg').on('click', function() {

            function quitaModals() {
                $("#user-bkg, .user-menu").remove();
            }

            var modalTl = new TimelineMax();


            modalTl
                .to(".bkg-modal", 0.2, { right: -3000, ease: Expo.easeOut })
                .to(".user-menu", 0.8, { opacity: 0, right: -500, delay: 0.2, ease: Expo.easeOut })
                .call(quitaModals, null, "+=1.5");



        });

        $('#user-exit').on('click', function() {

            function quitaModals() {
                $("#user-bkg, .user-menu").remove();
            }

            var modalTl = new TimelineMax();

            modalTl
                .to(".bkg-modal", 0.2, { right: -3000, ease: Expo.easeOut })
                .to(".user-menu", 0.8, { opacity: 0, right: -500, delay: 0.2, ease: Expo.easeOut })
                .call(quitaModals, null, "+=1.5");


        });

    });


})();



$("input:checkbox").click(function() {
    var cell = $(this).attr("name");
    var Thead = "#table-h th:nth-child(" + cell + ")";
    var Tbody = "#table-b tbody tr td:nth-child(" + cell + ")";
    var Tfoot = "#table-f td:nth-child(" + cell + ")";

    $(Thead).toggle("fast");
    $(Tbody).toggle("fast");
    $(Tfoot).toggle("fast");

    console.log(cell + Thead + Tbody + Tfoot);


});

//FECHA
window.onload = function() {
    var fecha = new Date();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var ano = fecha.getFullYear();
    if (dia < 10)
        dia = '0' + dia;
    if (mes < 10)
        mes = '0' + mes
    document.getElementById('fechaActual').value = ano + "-" + mes + "-" + dia;
}

//ESTATUS ADMIN
$(".status-adm").on("click", function() {
    var $this = $(this);

    if ($this.hasClass("bkg-verde")) {
        $this.addClass("bkg-red");
        $this.removeClass("bkg-verde");
    } else if ($this.hasClass("bkg-red")) {
        $this.addClass("bkg-amarillo");
        $this.removeClass("bkg-red");
    } else {
        $this.removeClass("bkg-amarillo");
        $this.addClass("bkg-verde");
    }

});

//SEARCH ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

//DROPDOWN
$(".dropdown dt a").on('click', function() {
    $(".dropdown dd ul").slideToggle('fast');
});

$(".dropdown dd ul li a").on('click', function() {
    $(".dropdown dd ul").hide();
});

function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
}

$(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
});

$('.mutliSelect input[type="checkbox"]').on('click', function() {

    var title = $(this).closest('.mutliSelect').find('input[type="checkbox"]').val(),
        title = $(this).val() + ",";

    if ($(this).is(':checked')) {
        var html = '<span title="' + title + '">' + title + '</span>';
        $('.multiSel').append(html);
        $(".hida").hide();
        $('input[type="checkbox"]').show();
    } else {
        $('span[title="' + title + '"]').remove();
        var ret = $(".hida");
        $('.dropdown dt a').append(ret);
        $(".hida").show();
    }

});

$(document).ready(function() {
    $("#notificationLink").click(function() {
        $("#notificationContainer").fadeToggle(300);
        $("#notification_count").fadeOut("slow");
        return false;
    });

    $(document).click(function() {
        $("#notificationContainer").hide();
    });

    $("#notificationContainer").click(function() {
        return false;
    });

});

//DATE RANGE

$(function() {
    var dateFormat = "D M d, yyyy",
        from = $("#from")
        .datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
        .on("change", function() {
            to.datepicker("option", "minDate", getDate(this));
        }),
        to = $("#to").datepicker({
            defaultDate: "+1w",
            changeMonth: true,
            numberOfMonths: 2
        })
        .on("change", function() {
            from.datepicker("option", "maxDate", getDate(this));
        });

    function getDate(element) {
        var date;
        try {
            date = $.datepicker.parseDate(dateFormat, element.value);
        } catch (error) {
            date = null;
        }

        return date;
    }
});