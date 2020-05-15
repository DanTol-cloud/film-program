'use strict'
const numberOfFilm = +prompt('сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilm,
    movies: {},
    actors: {},
    genres: [],
    privat:false

};

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

if(personalMovieDB.count < 10){
    console.log('просмотрено довольно мало фильмов')
}else if(personalMovieDB.count >= 10 && personalMovieDB.count< 30 ){
    console.log('вы класический зритель')
}else if(personalMovieDB.count >= 30){
    console.log('вы киноман')
} else {
    console.log('error')
}

console.log(personalMovieDB);