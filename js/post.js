let contentSticky = new VanillaSticky({
    HTMLElement: document.querySelector('.sidebar'),
    indents: {
        top: 70,
        bottom: 10
    }
});
contentSticky.init();

//Swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 'auto',
    spaceBetween: 40,
    slidesPerGroup: 1,   
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
  });