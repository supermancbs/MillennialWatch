const store = {populateAge:[], genre:[], searchResults:[], movies:[]}
const api_key= "ba724425bc10d027b79eac5cf1474ede"

function getFilms() {
  let url= `https://api.themoviedb.org/3/discover/movie?`
  return jQuery.ajax({
      url:url,
      data:{api_key:api_key, with_genres: store.genre, primary_release_year:store.populateAge},
      }
    ).done((response)=>{
      store.searchResults = response.results.slice(1,6)
      createMovies()
    })
}

