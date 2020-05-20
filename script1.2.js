'use strict'
let numberOfFilm
function start(){
    numberOfFilm = +prompt('сколько фильмов вы уже посмотрели?');
    while (numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        const numberOfFilm = +prompt('сколько фильмов вы уже посмотрели?');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat:false

};

 
      function rememberMYFilms(){
        let i = 0;
        while(i < 2){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            if(a != null && b != null && a != '' && b != '' &&a.length < 50){
              personalMovieDB.movies[a] = b;  
              console.log('done');             
            } else {
                console.log('error');
                i--;
            }
            i++;
           
  
        }
      }
      rememberMYFilms();
function detectPersonalLevel(){
    
if(personalMovieDB.count < 10){
    console.log('просмотрено довольно мало фильмов')
}else if(personalMovieDB.count >= 10 && personalMovieDB.count< 30 ){
    console.log('вы класический зритель')
}else if(personalMovieDB.count >= 30){
    console.log('вы киноман')
} else {
    console.log('error')
}
}
detectPersonalLevel();



function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMovieDB);
    }
} 
showMyDB(personalMovieDB.privat);
function writeYourGenres(){
 for(let i=1; i <= 3; i++){
const genres = prompt(`ваш любимый жанр${i}`);
personalMovieDB.genres[i - 1] = genres;
 }


 }
 writeYourGenres();
