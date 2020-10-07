const form = document.querySelector('#search-form');
const results = document.querySelector('#results')

let movieList = ''

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.search.value);
})

for(let i = 0; i < 4; i++){
    movieList += `
        <li class="movie">
            <img src="https://image.tmdb.org/t/p/w500/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg" alt="" />
            <h3>Jurassic World</h3>
            <div class="movie-detail">
                <h4>Year</h4>
                <p>2018</p>
            </div>
            <div class="movie-detail">
                <h4>Director</h4>
                <p>Steven Speilburg</p>
            </div>
        </li>
    `;
}

results.innerHTML = movieList;