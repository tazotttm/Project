document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' , {
      // perPage: 3,
  type: 'loop',
  perPage: 1,
  focus: 'center',
  fixedWidth: '60%',
  rewind: false,
  drag: false,
  flickMaxPages: 2,
  updateOnMove: true,
}).mount();

} );