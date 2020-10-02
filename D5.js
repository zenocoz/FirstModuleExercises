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



/* Movies array is an example array, used for the exs. Don't change it :)  */
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
];


//JS Basics

/* Ex.A
   Create a variable test that contains a string
*/

const test = "Determinismo o fatalismo?"

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20 
*/

let sum = 10 + 20;

/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution)
*/

let random = Math.random(0,20);
//console.log(random);

/* Ex.D
    Create a variable Me containing and object with the current information: Name = Your Name, Surname = Your Surname, Age = Your Age
*/

const Me = {
  name : "Federico",
  surname : "Soncini",
  age : 34,
};

/* Ex.E 
    Programmatically remove the Age from the previously create object Me
*/

delete Me.age;

/* Ex.F 
   Programmatically add to the object Me an array "skills" that contains the programming languages that you know
*/

Me.skills = ["C++", "C#"];

/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object
*/

delete Me.skills[Me.skills.length-1];
//console.log(Me);

// JS Functions
/* Ex.1
    Write the function Dice that randomize an integer number between 1 and 6
*/ 

/*Based on: 
  function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}*/

const Dice = function () {
  let random_int = Math.floor(Math.random() * 7)+1; 
  return random_int; 
}
//console.log(Dice());

/* Ex.2 
    Write the function WhoIsBigger that receives 2 numbers and returns the bigger of the 2
*/

const WhoIsBigger = function(x,y) {
  return x > y ? x : y;
}
//console.log(WhoIsBigger(2,3));

/* Ex.3
    Write the function SplitMe that receives a String and returns an array with every word in that string
    Ex. SplitMe("I love coding") => returns [ "I","Love","Coding"]
*/

const SplitMe = function(str) {
  let array_of_words = str.split(" ");
  return (array_of_words);
}
//console.log(SplitMe("It's a great day"));  

/* Ex.4
    Write the function DeleteOne that receives a string and a boolean. If the boolean is true, should return the string without the first letter, otherwise should remove the last one
*/

const DeleteOne = function(str, condition) {
  if(condition) {
    return str.slice(1);
  } else
  return str.slice(0,-1);
}
//console.log(DeleteOne("Slice", false));

//TODO Try ex.4 with .replace() methods or others

/* Ex.5
   Write the function OnlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: OnlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

//Used RegEx
const OnlyLetters = function(str) {
  let letters = str.replace(/\d+/g,'');
  return letters;
}

//console.log(OnlyLetters("Ilo3ve letter123s"));

/* Ex.6 
   Write the function IsThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const IsThisAnEmail= function (str) {
  //username must not contain (for simplicity) ',' , '&', ';'.
  //address must end with .com
  let email = str;
  if (email.match(/@/gi).length === 1) {
    let user_name = email.slice(0,email.indexOf("@"));
    let address = email.slice(email.indexOf("@")+1);
    if(user_name.match(/,/gi) || user_name.match(/&/gi) || user_name.match(/;/gi) || address.slice(-4) != ".com") {
      return false;
    } 
    return true;
  }
  return false;
}
//console.log(IsThisAnEmail("federico.soncini@gmail.com"));


/* Ex.7
   Write the function WhatDayIsIt that should return the day of the week
*/
const WhatDayIsIt = function() {
  let date = new Date();
  let day = date.getDay();
  let day_str;
  switch (day) {
      case 1 :
        day_str = "Monday";
        break;
      case 2 :
        day_str = "Tuesday";
        break;
      case 3 :
        day_str = "Wednesday";
        break;
      case 4 :
        day_str = "Thursday";
        break;
      case 5 :
        day_str = "Friday";
        break;
      case 6 :
        day_str = "Saturday";
        break;
      case 7 :
        day_str = "Sunday";
        break;
  }
  return day_str;
}
//console.log(WhatDayIsIt());


/* Ex.8
    Write the function RollTheDices that receives a numeric input and returns an object that contains both the sum of the value of the dices and the dices itself
    This function should use the Dice function defined in Ex1
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

const RollTheDices = function (x) {
  let values = []
  let i = 0;
  let sum = 0;
  while(i < x) {
    let single_throw = Dice();
    values.push(single_throw);
    sum += single_throw;
    i++;
  }
  
  const BigRollo = {
    sum_ : sum,
    values_ : values
  };

  return BigRollo;
}
//console.log(RollTheDices(8));

/* Ex.9
   Write the function HowManyDays that receives a Date and return the number of days that has passed since that day.
*/

const HowManyDays = function (date) {
  let current_date = new Date();
  let previous_date = date;
  let time_difference = current_date.getTime()-previous_date.getTime();
  let days_passed = Math.round(time_difference / (1000 * 3600 * 24));
  return days_passed;
}

//console.log(HowManyDays(new Date("1/1/2020")));

/* Ex.10
   Write the function IsTodayMyBDay that returns true if it's your birthday, false otherwise
*/

//TODO check probably needs fixing
const IsTodayMyBDay = function() {
  let my_birthday = new Date("02/10/1988");
  let today = new Date();
  if (today.getMonth() === my_birthday.getMonth() && today.getDay() === my_birthday.getDay()) {
    return true;
  } 
  return false;
}
//console.log(IsTodayMyBDay());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file

/* Ex.11
   Write the function DeleteProp that receives an object and a string, and returns the object after deleting the property with that given name
*/
const DeleteProp = function (obj, str) {
  let obj_ = obj;
  let str_ = str;
  delete obj_[str_];
  return obj_;
}
const Object = {
  price : 200,
  metal : "gold"
};
//console.log(DeleteProp(Object,"metal"));

/* Ex.12 
    Write the function OlderMovie that finds the older movie in the array
*/
const OlderMovie = function () {
  let lowest = 0;
  for (let i = 1; i < movies.length; i++) {
    if(movies[i].Year < movies[lowest].Year) {
      lowest = i;
    } 
  }
  return movies[lowest];  
}
//console.log(OlderMovie());


/* Ex.13
    Write the function CountMovies that returns the number of movies into the array
*/

const CountMovies = function () {
  let number_of_movies = 0;
  for (let i = 0; i < movies.length; i++) {
    number_of_movies++;
  }
   return number_of_movies;
}
//console.log(CountMovies());

/* Ex.14
    Write the function OnlyTitles that creates an array with only the titles of the movies
*/

const OnlyTitles = function() {
  let titles = [];
  for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].Title);
  }
  return titles; 
}

//console.log(OnlyTitles());

/* Ex.15
   Write the function OnlyThisMillennium that returns only the movies produced in this millennium
*/

const OnlyThisMillennium = function() {
  let millenium_movies = [];
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].Year >= 2000) {
      millenium_movies.push(movies[i]);
    }
  }
  return millenium_movies;
 }
 //console.log(OnlyThisMillennium());

/* Ex.16 
    Write the function GetMovieById that receives an ID and returns the movie with the given ID
*/

const GetMovieById = function(id) {
  let id_ = id;
  for (let i = 0; i < movies.length; i++) {
    if (id_===movies[i].imdbID) {
      return movies[i];
    }
  }
}
//console.log(GetMovieById("tt1731697"))

/* Ex.17
    Write the function SumYears that returns the sum of the years the movie has been produced
*/
//TODO wRONG
const SumYear = function() {
  let sum_years = 0;
  let today = new Date();
  for (let i = 0; i < movies.length; i++) {
    sum_years = today.getFullYear() - movies[i].getFullYear();
    console.log(sum_years);
  }
}

/* Ex.18
    Write the function SearchMovie that receives a string and returns all the movies with that string in the title
*/
//TODO check regex
const SearchMovie = function(str) {
  let str_ = str;
  let titles_ = []
  for (let i = 0; i<movies.length; i++) {
    if (movies[i].Title.match(/(str_)/gi)) {
      titles_.push(movies[i]);
    }
  }
  return titles_;
}

//console.log(SearchMovie("lord"));

/* Ex.19
    Write the function SearchAndDivide that receives a string and returns an object with an array "match" with all the movies that contain the title and another array "nonMatch" with the other movies
*/
const SearchAndDivide = function(str) {
  let match = [];
  let non_match = [];
  let title = str;
  for (let i = 0; i < movies.length; i++) {
    if (title === movies[i].Title) {
      match.push(movies[i]);
    } else {
      non_match.push(movies[i]);
    }
  }

  const SortedMovies = {
    match_ : match,
    non_match_ : non_match
  };
  return SortedMovies;
}

//console.log(SearchAndDivide("The Lords of Salem"));

/* Ex.20
   Write the function DeleteX that receives a number and returns an array without the element in that position
*/
const DeleteX = function(x) {
  let position = x;
  movies.splice(x,1)
  return movies;
}
//console.log(DeleteX(-2));

// JS Advanced

/* Ex.21
  Create a function HalfTree that recives the height creates an "*" half tree with that height
  Example:
  HalfTree(3)
  *
  **
  ***
*/

const HalfTree = function(height) {
  let h = height
  let i = 0;
  let t = "";
  while (i < height) {
    t += "*";
    console.log(t);
    i++;
  }
}
//console.log(HalfTree(5)); //TODO check undefined behavior


/* Ex.22 
  Create a function Tree that receives the height and creates an "*" tree with that height
  Example: 
  Tree(3)
    *  
   *** 
  *****
*/
/*
//TODO 
const Tree = function(height) {
  let h = height
  let i = 0;
  let space = " ";
  console.log(t);
  while (i < height) {
    t += "**";
    t.slice(0,1);
    console.log(t);
    i++;
  }
}
console.log(Tree(3));*/

/* Ex.23
  Create a function IsItPrime that receives a number and return true if the number is a prime number
*/
//true only for numbers < 100
const IsItPrime = function(x) {
  let number = x;
  if (x < 100) {
    if (x===1) {
      return false;
    } else if (x===2 || x===3 || x===5 || x===7){
      return true;
    } else if 
      (x%2!=0 || x%3!=0 || x%5!=0||x%7!=0) {
        return true;
      }
  }
}
//console.log(IsItPrime(53));