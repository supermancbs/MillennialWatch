function getAge(button){
  store.populateAge = []
  store.populateMood = []
  store.user = []
  store.populateAge = button.value  
  $('#generation').fadeOut("slow")
  var source = moodTemplate();
  var template = Handlebars.compile(source)
  $('#mood').empty()
  $('#mood').append(template)
}

function getMood(){
  store.populateMood = $('#mood').val()
   $('#mood').fadeOut("slow");return false;
}