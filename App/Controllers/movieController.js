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
      genre = "18"
      break;
    case "happy":
      genre = "35"
      break;
    case "excited":
      genre = "12"
      break;
    default:
      genre = "27"
  }
  store.genre = genre
  getFilms()
   $('#mood').fadeOut("slow")
}

function createMovies(){
  store.searchResults.forEach((movie) => {
    
    new Movie(movie.original_title, movie.poster_path, movie.overview, movie.release_date)
  })
}

