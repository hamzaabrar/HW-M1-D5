/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account before 17.00 (Berlin Time)
*/

//JS Basics
console.log("---------------------");
console.log("JS BASICS");
console.log("---------------------");

/* Ex.A
   Create a variable test that contains a string
*/
console.log("Ex.A");

const exA = "This is a test string";
console.log(exA);

console.log("---------------------");
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/
console.log("Ex.B");

const exB = 20 + 10;
console.log(`The sum of 10 and 20 is ${exB}`);

console.log("---------------------");
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/
console.log("Ex.C");

const exC = Math.floor(Math.random() * 20);
console.log(`A random number between 0 and 20 can be ${exC}`);

console.log("---------------------");
/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/
console.log("Ex.D");

const Me = {
  Name: "Hamza",
  Surname: "Abrar",
  Age: 21,
};
console.log("The object Me contains ", Me);

console.log("---------------------");
/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/
console.log("Ex.E");

delete Me.Age;
console.log(Me);

console.log("---------------------");
/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/
console.log("Ex.F");

Me.Skills = ["A little HTML", "A little CSS", "A little JavaScript"];
console.log(Me);

console.log("---------------------");
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/
console.log("Ex.G");

Me.Skills.pop();
console.log(Me);

console.log("---------------------");

// JS Functions
console.log("JS FUNCTIONS");
console.log("---------------------");
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/
console.log("Ex.1");

function dice() {
  return Math.floor(Math.random() * 6 + 1);
}
console.log("Dice", dice());

console.log("---------------------");
/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/
console.log("Ex.2");

const WhoIsBigger = function (a, b) {
  if (a > b) {
    return a
  } else {
    return b
  }
}

console.log("WhoIsBigger", WhoIsBigger(4, 5));

console.log("---------------------");

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
const SplitMe = function (s) {
    return s.split(" ")
  };
  console.log(SplitMe("I love coding"))
/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/
console.log("Ex.4");

const DeleteOne = function (s, b) {
  if (b === true) {
    return s.slice(1);
  } else {
    return s.slice(0, -1);
  }
};
console.log(DeleteOne("Delete", true));
/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
const IsThisAnEmail = function (s) {
  if (
    (s = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(IsThisAnEmail("hamza_abrar@hotmail.co.uk"));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]
/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log("Ex.11");

let weekendScheduleIHave = {
  Morning: "Breakfast and Youtube",
  Noon: "Coding",
  Evening: "Dinner and Games",
  Night: "Sleep",
};
const deleteProp = function (o, s) {
  delete o[s];
  return o;
};

console.log(deleteProp(weekendScheduleIHave, "Night"));

console.log("----------------");
/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
console.log("Ex.12");

const olderMovie = function (c) {
  let oldest = parseInt(movies[0].Year);
  for (let i = 1; i < movies.length; i++) {
    if (parseInt(movies[i].Year) < oldest) {
      oldest = movies[i];
    }
  }
  return oldest;
};
console.log(olderMovie(1));

console.log("-----------------");

/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/
console.log("Ex.13");

const CountMovies = function (c) {
  return movies.length;
};
console.log("There are ", CountMovies(1), " movies");

console.log("-----------------");
/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/
console.log("Ex.14");

const OnlyTitles = function (c) {
  let onlyTitles = [];
  for (let i = 0; i < movies.length; i++) {
    addTitle = movies[i].Title;
    onlyTitles.push(addTitle);
  }
  return onlyTitles;
};
console.log("Here is an array containing the titles of the movies:");
console.log(OnlyTitles(1));

console.log("-----------------");

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/
console.log("Ex.16");

const GetMovieById = function (e) {
  let correctID = [];
  let wrongID = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].imdbID === e) {
      let addID = movies[i];
      correctID.push(addID);
    } else {
      let addID = movies[i];
      wrongID.push(addID);
    }
  }
  return correctID;
};

console.log("Here is the movie with the ID specified:");
console.log(GetMovieById("tt0355702"));

console.log("----------------");
/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
console.log("Ex.17");

const sumYears = function (s) {
  let sum = 0;
  for (let i = 0; i < movies.length; i++) {
    sum = sum + parseInt(movies[i].Year);
  }
  return sum;
};

console.log(
  "The sum of the years in which these movies were produced is " + sumYears(1)
);

console.log("--------------");
/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
console.log("Ex.18");

const searchMovie = function (s) {
  let search = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Title.indexOf(s) > -1) {
      search.push(movies[i]);
    }
  }
  return search;
};

console.log("Here is a list of titles containing the phrase specified:");
console.log(searchMovie("Lord of the Rings"));

console.log("----------------");
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/

/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
