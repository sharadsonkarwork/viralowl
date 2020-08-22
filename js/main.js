$('#expertCarousal').owlCarousel({
    loop:true,
    autoplay:true,
    margin:20,
    nav:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    navText: ["<img src='./images/icon-left.png'>","<img src='./images/icon-right.png'>"]
});

$('.moreless-button').click(function() {
    $('.moretext').slideToggle();
    if ($('.moreless-button').text() == "See More..") {
      $(this).text("See Less")
    } 
    else {
      $(this).text("See More..")
    }
});

$('#testimonial-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    dots:true,
    navText: ["<img src='./images/icon-white-left.png'>","<img src='./images/icon-white-right.png'>"]
})