// fullPage
$(document).ready(function() {
  $('#fullpage').fullpage({
      //Navegación
      menu: '#menu',
      lockAnchors: false,
      anchors:['home', 'membresia','que-es','que-ofrece','preguntas'],
      navigation: false,
      navigationPosition: 'right',
      navigationTooltips: ['firstSlide', 'secondSlide'],
      showActiveTooltip: false,
      slidesNavigation: true,
      slidesNavPosition: 'bottom',

      //Desplazamiento
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      scrollBar: false,
      easing: 'easeInOutCubic',
      easingcss3: 'ease',
      loopBottom: false,
      loopTop: false,
      loopHorizontal: true,
      continuousVertical: false,
      continuousHorizontal: false,
      scrollHorizontally: false,
      interlockedSlides: false,
      dragAndMove: false,
      offsetSections: false,
      resetSliders: false,
      fadingEffect: false,
      normalScrollElements: '#element1, .element2',
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      //Accesibilidad
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      //Diseno
      controlArrows: true,
      verticalCentered: true,
      sectionsColor : ['#202020','rgb(21, 51, 51)','#181818','#009688'],
      paddingTop: '3em',
      paddingBottom: '10px',
      fixedElements: '#header, .footer',
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      //Selectores personalizados
      sectionSelector: '.section',
      slideSelector: '.slide',

      //Eventos
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
});
// fullPage

// Animación botonAbajo
  function muestraReloj() {
    var fechaHora = new Date();
    var segundos = fechaHora.getSeconds();
    if(segundos < 10) { segundos = '0' + segundos; }

    if (segundos%2==0) {
       document.getElementById("botonAbajo").style.transform = "scale(1)"
    } else {
       document.getElementById("botonAbajo").style.transform = "scale(1.5)"
    }

}
  window.onload = function() {
    setInterval(muestraReloj, 1);
  }
// Animación botonAbajo

function exefunction(){
  var precio = document.getElementById("c1").checked;
  if (precio == true) {
    var cantidad = 10;
    var camMoneda = '<p style="color: #0088cc;margin-bottom: 10px;margin-top: -10px; font-size: 25px;"><img id="pais" src="https://www.azulweb.net/membresia/img/usd.png"/> USD$</p>'
    var i;
    for (var i = 0; i < 3; i++) {
      document.getElementById("precio"+i).innerHTML = "<p id='precio'>$"+cantidad+"</p>";
      document.getElementById("moneda"+i).innerHTML = camMoneda;
      cantidad = cantidad + 5;
    }

  } else {
    var cantidad = 180;
    var camMoneda = '<p style="color: #0088cc;margin-bottom: 10px;margin-top: -10px; font-size: 25px;"><img id="pais" src="https://www.azulweb.net/membresia/img/mxn.png"/> MXN$</p>'
    var i;
    for (var i = 0; i < 3; i++) {
      document.getElementById("precio"+i).innerHTML = "<p id='precio'>$"+cantidad+"</p>";
      document.getElementById("moneda"+i).innerHTML = camMoneda;
      cantidad = cantidad + 90;
    }

  }
}
