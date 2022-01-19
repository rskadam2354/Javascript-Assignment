const movies = [];

function favouriteMovie(operation, movie) {
    // Write your code hereW
    if (operation==="add")
    {
        movies.push(movie)
    }
    else{
        movies.pop()
    }
    return movies
}

module.exports = favouriteMovie;
