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

$("#food-form").submit(function( event ) {
    findRecipe();
    event.preventDefault();
    });
function findRecipe () {
    fetch(recipeUrl)
    .then(response => response.json())
    .then(data => console.log(data));
}