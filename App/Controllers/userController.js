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

function getMood(button){
  store.populateMood = button.value
   $('#mood').fadeOut("slow")
}