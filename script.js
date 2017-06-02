$(document).ready(function() {
  function onReady(callback) {
    let intervalID = window.setInterval(checkReady, 500)
    function checkReady() {
      if ($('body')[0]) {
        window.clearInterval(intervalID)
        callback.call(this)
      }
    }
  }

  function show(id, value) {
    document.getElementById(id).style.display = value ? 'block' : 'none'
  }

  onReady(function() {
    show('page', true)
    show('loading', false)
  })

  function navArrowScroll(location) {
    $('html, body').animate({
      scrollTop: $(`#${location}`).offset().top
    }, 1000)
  }

  $('.nav-arrow').click(function() {
    navArrowScroll($(event.target).parent().attr('id'))
  })
})
