const Movie = (function Movie(){
  var counter = 0
  return class {
      constructor(title, poster, summary, release){
        this.id= counter++
        this.title = title
        this.poster = poster
        this.summary = summary
        store.movies.push(this)
      }

  }}
())


 