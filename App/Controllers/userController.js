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
  let genre 
  switch(button.value) {
    case "sad":
      genre = "drama"
      break;
    case "happy":
      genre = "comedy"
      break;
    case "excited":
      genre = "action"
      break;
    default:
      genre = "angry"
}
  store.genre = genre
  getFilms()
   $('#mood').fadeOut("slow")
}