$(function(){

    /* Header Scroll Change */
    $(window).scroll(function(){
        if($(window).scrollTop() > 50){
            $("header").addClass("active");
            $(".btn-top").addClass("active");
        }else{
            $("header").removeClass("active");
            $(".btn-top").removeClass("active");
        }
    });

    /* Wow Scroll Reveal Animation */
    wow = new WOW({
        boxClass: 'wow',
        offset: 150,
        mobile: true
    });
    wow.init();

    /* Slick Slider - Welcome */
    $('.slideshow').slick({
        infinite: true,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        speed: 1000,
        pauseOnHover: false
    });

    /* TypeIt - Welcome */
    $("#typing").typeIt({
        strings: ["Business startegy.", "Innovation Plan.", "Creative Idea."],
        speed: 100,
        autoStart: true,
        breakLines: false,
    })

    /* Slick Slider - Review */
    $('.review-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    /* Slick Slider - Guide */
    $('.mockup-slider').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
    /* Faq Accordion */
    $(".faq-desc").eq(0).show();
    $(".faq-title").click(function(){
        $(this).next().stop().slideDown();
        $(this).parent().siblings('.faq-item').children('.faq-desc').stop().slideUp();
        $(this).parent().addClass('active');
        $(this).parent().siblings('.faq-item').removeClass('active');
    });

    /* Modal */
    $(".open-modal").click(function(){
        $(".video-modal").fadeIn();
        $("body").addClass("active");
    });
    $(".close-modal").click(function(){
        $(".video-modal").fadeOut();
        $("body").removeClass("active");
    });
});