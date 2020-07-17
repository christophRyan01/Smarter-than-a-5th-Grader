const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const highScoresMax = 10
console.log(highScores)

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    console.log("clicked the save button")
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };

    highScores.push(score);

    highScores.sort( (a,b) => {
        return b.score - a.score
    });

    highScores.splice(10);
    
    localStorage.setItem("highScores", JSON.stringify(highScores));
    // window.location.assign("index.html")
};


let sound = new Audio('audio/boop.wav');
let soundBtn = document.querySelector('button')
soundBtn.addEventListener("click", () => sound.play());

let boop = new Audio();
boop.src = 'audio/boop.wav';