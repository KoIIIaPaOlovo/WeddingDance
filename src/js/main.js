document.addEventListener('DOMContentLoaded', function(){ // Аналог $(document).ready(function(){
    
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
    
  });