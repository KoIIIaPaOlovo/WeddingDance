document.addEventListener('DOMContentLoaded', function(){ 
    
    burgerButton=document.querySelector('.burger-button__lines');
    burgerMenu=document.querySelector('.burger-overlay');
    burgerButton.addEventListener('click',function(){
        if(burgerMenu.classList.contains('burger-overlay--show')){
            burgerMenu.classList.remove('burger-overlay--show');
            burgerButton.querySelector('.burger-button__line').classList.remove('burger-button__line--active');
        }
        else{
            burgerMenu.classList.add('burger-overlay--show');
            burgerButton.querySelector('.burger-button__line').classList.add('burger-button__line--active');
        }
    });



    $('.coaches__slider').on('reinit init afterChange', function(slick,currentSlide,nextSlide){
        if (currentSlide.options.slidesToScroll % 2 == 0)
        {
            $('.coaches__slider-count').children('.coaches__slider-number').text((currentSlide.currentSlide+currentSlide.options.slidesToScroll)/(currentSlide.options.slidesToScroll));
            $('.coaches__slider-count').children('.coaches__slider-amount').text((currentSlide.slideCount/currentSlide.options.slidesToScroll));
            
        }else if(currentSlide.options.slidesToScroll % 2 != 0 && currentSlide.options.slidesToScroll!=1){
            $('.coaches__slider-count').children('.coaches__slider-number').text((currentSlide.currentSlide+currentSlide.options.slidesToScroll)/(currentSlide.slideCount/currentSlide.options.slidesToScroll));
            $('.coaches__slider-count').children('.coaches__slider-amount').text((currentSlide.slideCount/currentSlide.options.slidesToScroll));
        }
        else
        {  
            $('.coaches__slider-count').children('.coaches__slider-number').text(currentSlide.currentSlide+1);
            $('.coaches__slider-count').children('.coaches__slider-amount').text(currentSlide.slideCount);
        }
    });

    
  $('.coaches__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 425,
          settings: {
            arrows: false,
            dots: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1.2
          }
        }
      ]
  });
    
  });
