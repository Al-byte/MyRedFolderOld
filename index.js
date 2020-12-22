$(document).ready(function () {
    var trigger = $('.hamburger'),
        overlay = $('.overlay'),
       isClosed = false;
  
      trigger.click(function () {
        hamburger_cross();      
      });
  
      function hamburger_cross() {
  
        if (isClosed == true) {          
          overlay.hide();
          trigger.removeClass('is-open');
          trigger.addClass('is-closed');
          isClosed = false;
        } else {   
          overlay.show();
          trigger.removeClass('is-closed');
          trigger.addClass('is-open');
          isClosed = true;
        }
    }
    
    $('[data-toggle="offcanvas"]').click(function () {
          $('#wrapper').toggleClass('toggled');
    });
    $("#top-icon").click(function(){            
      $('html, body').animate({
              scrollTop: $("#scroll-top").position().top-50
          }, 1000);
    });
    $("#index-go-btn").click(function(){
      $("#index-go-btn").css("background-color", "white");
      $("#index-go-btn").css("color", "rgb(33, 31, 96)");
      $("#index-supply-btn").css("background-color", "rgb(33, 31, 96)");
      $("#index-supply-btn").css("color", "white");
      $("#index-supply-products").addClass("hide");
      $("#index-go-products").removeClass("hide");
    });
      
    $("#index-supply-btn").click(function(){
      $("#index-supply-btn").css("background-color", "white");
      $("#index-supply-btn").css("color", "rgb(33, 31, 96)");
      $("#index-go-btn").css("background-color", "rgb(33, 31, 96)");
      $("#index-go-btn").css("color", "white");
      $("#index-go-products").addClass("hide");
      $("#index-supply-products").removeClass("hide");
      
    });
    $(".collapse").on('show.bs.collapse', function() {
      $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
    }).on('hide.bs.collapse', function() {
      $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
    });
    $('.navbar-nav>li>a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
        
  });