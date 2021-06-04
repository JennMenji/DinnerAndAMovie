var recipeUrl = 'https://api.spoonacular.com/recipes/random?apiKey=f999bb7189a34392a1a531b4ec949828';

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
    .then (function (response) {
        return response.json()
    })
    .then (function (data) {
        getRecipeImg(data.recipes[0].id)
    })
}
function getRecipeImg (num) {
    var recipeImgUrl = "https://spoonacular.com/recipeImages/"+ num +"-480x360.jpg";
    var imgTag = $("<img>").attr("src", recipeImgUrl)
    $("#food-pic").append(imgTag)
}


