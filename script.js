$(document).ready(function() {
  function navArrowScroll(location) {
    $('html, body').animate({
      scrollTop: $(`#${location}`).offset().top
    }, 1000)
  }

  $('.nav-arrow').click(function() {
    navArrowScroll($(event.target).parent().attr('id'))
  })
})
