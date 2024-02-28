
;(function(){
$(document).ready(function(){
  const slider = $(".slider__list").bxSlider({
    pager: false,
    controls: false,
  });

  $('.products__arrow--prev').click(e => {
    e.preventDefault();

    slider.goToPrevSlide();
  })
  $('.products__arrow--next').click(e => {
    e.preventDefault();

    slider.goToNextSlide();
  })
});


})()
	