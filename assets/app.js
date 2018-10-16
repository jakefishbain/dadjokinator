$('#joke-btn').on('click', function() {
  $.ajax({
    url: 'https://icanhazdadjoke.com/',
    method: 'GET',
    headers: {"Accept": 'application/json'}
  }).then(function(response){
    $('#joke').text(response.joke);
  })
})
