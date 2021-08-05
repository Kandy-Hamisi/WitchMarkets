$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:false
    });


    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 200){
            $(".navbar").addClass('change');
            $(".header").addClass('show');
        }else{
            $(".navbar").removeClass('change');
            $(".header").removeClass('show');
        }
    });
})