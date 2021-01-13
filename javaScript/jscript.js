  
 
     document.addEventListener('DOMContentLoaded', function() {

     var myNav = document.querySelectorAll('.sidenav');
     M.Sidenav.init(myNav, {});

     });


     $('.carousel.carousel-slider').carousel({
        fullWidth: true,
            indicators:true,
      });
        
      
      document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems);
      });