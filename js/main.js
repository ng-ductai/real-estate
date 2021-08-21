let menu = document.querySelector('#header-menu-bars');
let navbar = document.querySelector('.header-navbar');

menu.onclick = () =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}

$(window).on('scroll load',function(){

    $('.section').each(function(){

        let height = $(this).height();
        let offset = $(this).offset().top -200;
        let top = $(window).scrollTop();
        let id = $(this).attr('id');

        if(top >= offset && top < offset + height){
            $('.header-navbar  a').removeClass('active');
            $('.header-navbar').find(`[href="#${id}"]`).addClass('active');
        }

    });

});

  /*=====SCROLL TOP======*/
  const scrollTop = document.querySelector(".scroll-top");

  window.addEventListener("scroll", function(e) {
      if (this.scrollY >= 500) {
          scrollTop.classList.add("scrolltop-active");
      } else {
          scrollTop.classList.remove("scrolltop-active");
      }
  });

