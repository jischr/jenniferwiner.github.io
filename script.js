function onReady(callback) {
  let intervalID = window.setInterval(checkReady, 1000)
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
