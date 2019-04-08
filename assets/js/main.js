$(document).ready(function() {
    $('#Carousel').carousel({
        interval: 5000
    })
});

(function($){
    jQuery(document).ready(function($){
        
        $(".menu-trigger").on('click', function() {
            $(".off-canvas-menu").addClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").addClass("active");
        });
        $(".menu-close").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });
        $(".off-canvas-menu-shade").on('click', function() {
            $(".off-canvas-menu").removeClass("show-off-canvas-menu");
            $(".off-canvas-menu-shade").removeClass("active");
        });
        
    });
    
    $(".single-testimonial-box").hover(function(){
        $(".single-testimonial-box").removeClass('active');
        $(this).addClass('active');
    });
    
//    $(".video-play-btn").magnificPopup({
//        type: 'video'
//    });
    
    //scrollUp
    $(function(){
        $.scrollUp();
    });
    
        //scroll
        $(window).scroll(function(){
        if ($(this).scrollTop() > 0) {
            $('.header-area').addClass("header-absolute");
        } else {
            $('.header-area').removeClass("header-absolute");
        }
    });
   
    
}(jQuery));



//case study carousel
    $(document).ready(function() {
     
      $("#owl-demo").owlCarousel({
     
          autoPlay: 3000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3]
     
      });
        
        //*slider-page-3*//
        $('#sixteeninone-slider').carousel({
            interval: 5000
        });
     
    });

//typing
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};


