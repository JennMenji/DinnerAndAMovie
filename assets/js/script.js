var getMovieGenres = function() {
    var apiUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=4a2daec3e9790c72eaaf5273d699af37&language=en-US";

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            response.json();
        }
    })
    .then(function(data) {
        console.log(data);
    })
}

getMovieGenres();

// 4a2daec3e9790c72eaaf5273d699af37