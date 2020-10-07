const form = document.querySelector('#search-form');
const results = document.querySelector('#results');
const resultHeader = document.querySelector('#result-header');

const key = "32e2293c913c59efce4695064290d9fb";
const imageURL = "https://image.tmdb.org/t/p/w500";

let movieList = '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
    searchFromUser = form.search.value;
    

    //format the string to use in URL
    searchFormatted = searchFromUser.replace(/\s+/g, '+').toLowerCase();

    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${searchFormatted}`)
    .then((res) => {
        if(res.data.results.length > 0){
            resultHeader.textContent = `Top Results for '${searchFromUser}'`;
            renderMovies(res.data.results);
        } else {
            resultHeader.textContent = `No Results for '${searchFromUser}'`;
            results.innerHTML = '';
        }
    })
    .catch((err) => {
        console.log(err)
    })
});

function renderMovies(movies){
    movieList = '';

    for(let i = 0; i < 4 && movies[i] != undefined; i++){
        const movie = movies[i];

        const title = movie.title;
        const releaseDate = new Date(movie.release_date)
        const releaseYear =  releaseDate.getFullYear();
        const poster = movie.poster_path;
        let posterURL = '';

        if(poster){
            posterURL = `${imageURL}${poster}`;
        } else {
            posterURL = "https://critics.io/img/movies/poster-placeholder.png";
        }

        movieList += `
            <li class="movie">
                <img src=${posterURL} alt="Movie poster" />
                <div class="movie-details">
                    <p>${releaseYear}</p>
                    <h3>${title}</h3>
                </div>
            </li>
        `;
    }

    results.innerHTML = movieList;
    form.search.value = '';
}