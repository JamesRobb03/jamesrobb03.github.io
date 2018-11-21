//This is not my own work. this was taken from a tutorial site on how to create
//a scrolling button. it can be found here: https://www.solodev.com/blog/web-design/adding-a-scroll-down-anchor-to-your-website.stml

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function(){
        window.location.hash = hash;
      });
    }
  });
});
