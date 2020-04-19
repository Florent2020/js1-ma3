/* 1. Convert the function below to an arrow function:

function(a, b) {
    return a - b;
} */


const subtract = (a, b) => a - b;


/* 2. Make a call to the URL below, pass the JSON it returns to a function and inside that function loop through the results
 and log each game's name.
In the catch method of your code, redirect to "error.html" if there is an error.

https://api.rawg.io/api/games?genres=sports */


const sportsUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(sportsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        readSports(json);
    })
    .catch(function(error) {
        document.location.href = "error.html";
    });

function readSports(json) {
    const sportsArray = json.results;
    for (let i = 0; i < sportsArray.length; i++) {
        console.log(sportsArray[i].name);
    }
}




/* 3. Replace the word cats with the word giraffes in the following sentence:
These cats are outrageous. */


const thisSentence = "These cats are outrageous.";
const newSentence = thisSentence.replace("cats", "giraffes");
console.log(newSentence);



/* 4. Given the URL below, write code that checks if there is a userId parameter in the query string.
If there is no userID parameter, redirect the browser to third.html.
If there is a userID parameter and its value is less than 10, redirect to first.html.
If there is a userID parameter and its value is 10 or greater, redirect to second.html.
https://my.site.com?userId=7  */



const queryString = "https://my.site.com?userId=7";
const parameter = new URLSearchParams(queryString);

console.log(parameter.get("userId"));

if (!parameter.has("userId")) {
    console.log("No user ID");
} else if (parameter.get("userId") < 10) {
    console.log("Has user ID");
} else {
    console.log("second html");
}



/* 5. Write code that removes the button, and only the button, from its parent element in the HTML below:

<div class="container">
    <p>Lorem ipsum dolor</p>
    <button class="btn">Click me</button>
</div> */


const container = document.querySelector(".container");
const button = document.querySelector(".btn");
container.removeChild(button);



/* 6. Create an li element with a text value of Parrots and a class of parrots.
Add the new item as the second item in the ul below (add it after Cows).

<ul class="animals">
    <li class="cows">Cows</li>
    <li class="elephants">Elephants</li>
</ul>   */


const animals = document.querySelector(".animals");
const elephants = document.querySelector(".elephants");
const newElement = document.createElement("li");

newElement.innerHTML = "Parrots";
newElement.className = "parrots";
animals.appendChild(newElement);
elephants.before(newElement);




/* 7. Make a call to the URL below and pass the JSON it returns to a function.
Inside that function select the div from the HTML below and assign the rating property from the JSON object as it's text value.
In the catch method, log the error that may be returned.

https://api.rawg.io/api/games/3801

<div class="rating"></div>    */


const mainUrl = "https://api.rawg.io/api/games/3801";

fetch(mainUrl)
    .then(response => {
        return response.json();
    })
    .then(json => {
        console.log(json);
        let ratingProperty = document.querySelector(".rating");
        ratingProperty.innerHTML = json.rating;
    })
    .catch(error => {
        console.log(error);
    });