const jokeContainer = document.getElementById("joke");
const jokeBtn = document.getElementById("button");

jokeBtn.addEventListener('click', () => getJoke);


const getJoke = ( ) => {
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
};