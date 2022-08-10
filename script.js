"use strict";
/* const category='toys';
console.log(`https://someurl.com/${category}`) */
/* let incr=10,
    decr=10;
incr++;
decr--;
console.log(incr);
console.log(decr); */
 
const numberOfFilms = +prompt('Сколько фильмов вы уже поммотрели?','');
const personalMovieDB={
    coutn: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из постедных просмотренных фильмов',''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из постедных просмотренных фильмов',''),
      d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
