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

$('#categoryCarousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
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
            items:5
        }
    },
    navText: ["<img src='./images/icon-prev-hook.png'>","<img src='./images/icon-next-hook.png'>"]
});


$(document).ready(function(){
    var owl = $('#img-slider');
      owl.owlCarousel({
          autoplay: false,
          autoplayTimeout: 4000,
          loop: true,
          dots:false,
          items: 1,
          center: true,
          nav: false,
          thumbs: true,
          thumbImage: false,
          thumbsPrerendered: true,
          thumbContainerClass: 'owl-thumbs',
          thumbItemClass: 'owl-thumb-item',
      });
});

$('.panel-collapse').on('show.bs.collapse', function () {
    $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.panel-heading').removeClass('active');
});   
  