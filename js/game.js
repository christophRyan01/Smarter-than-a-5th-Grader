const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const scoreNumber = document.getElementById('score');
const cpuScoreNumber = document.getElementById('cpuScore');
const counterClock = document.getElementsByClassName('countdown')

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let cpuScore = 0;
let questionCounter = 0;
let availableQuestions = [];
let startingMinutes = .5;

// Question Pool
const questions = [
    {
        question:  'The first day of the 20th century was…?',
            
            choice1: '1 January, 2000',
            choice2: '1 January, 2001',
            choice3: '1 January, 1901',
            choice4: '1 January, 2020',
            correctAnswer: '3'
},
    {
        question: 'If you cut a quarter into thirds, how many pieces would you have?',
        
            choice1: '3',
            choice2: 'quarter',
            choice3: '4',
            choice4: 'half',
            correctAnswer: '1'
    },
    {
        question: 'If I have five apples and you have four apples, how many more apples do I have?',
        
            choice1: '5',
            choice2: '0',
            choice3: '4',
            choice4: '1',
            correctAnswer: '4'
    },
    {
        question:'How many states made up the United States before Alaska and Hawaii joined? ',
        
            choice1:'52',
            choice2:'50',
            choice3:'48',
            choice4:'47',
            correctAnswer: '3'
    },
    {
        question:'What makes a square a square? ',
        
            choice1:'Four Edges',
            choice2:'Four equal sides',
            choice3:'It was a good name',
            choice4:'It is a square',
            correctAnswer: '2'
    },
    {
        question:'What is the fastest bird on foot?',
        
            choice1:'Ostrich',
            choice2:'Sparrow',
            choice3:'Eagle',
            choice4:'Dragon',
            correctAnswer: '1'
    },
    {
        question:'What planet is closest to the Sun?',
        
            choice1:'Venus',
            choice2:'Earth',
            choice3:'Mercury',
            choice4:'Moon',
            correctAnswer: '3'
    },
    {
        question:'A heptagon is a shape with how many sides?',
        
            choice1:'4',
            choice2:'6',
            choice3:'7',
            choice4:'8',
            correctAnswer: '3'
    },
    {
        question:'How long is one regular term for a U.S. Representative?',
        
            choice1:'3',
            choice2:'1',
            choice3:'2',
            choice4:'4',
            correctAnswer: '3'
    },
    {
        question:'Which of the following states is NOT on the Gulf of Mexico?',
        
            choice1:'Georgia',
            choice2:'Texas',
            choice3:'Florida',
            choice4:'Alabama',
            correctAnswer: '1'
    },
    {
        question:'What is the lowest prime number?',
        
            choice1:'0',
            choice2:'1',
            choice3:'2',
            choice4:'3',
            correctAnswer: '3'
    },
    {
        question:'What is the largest South American country by area?',
        
            choice1:'Argentina',
            choice2:'Brazil',
            choice3:'Chile',
            choice4:'Mexico',
            correctAnswer: '2'
    },
    {
        question:'Which one of the following states is NOT part of the Four Corners?',
        
            choice1:'New Mexico',
            choice2:'Utah',
            choice3:'Colorado',
            choice4:'Nevada',
            correctAnswer: '4'
    },
    {
        question:'Who was the first person to step foot on the moon?',
        
            choice1:'Alan Shepard',
            choice2:'John Glenn',
            choice3:'Sally Ride',
            choice4:'Neil Armstrong',
            correctAnswer: '4'
    },
    {
        question:'CAREFULLY is an example of what type of word?',
        
            choice1:'Adjective',
            choice2:'Noun',
            choice3:'Verb',
            choice4:'Adverb',
            correctAnswer: '4'
    },
    {
        question:'In the Northern Hemisphere, what month is the autumnal equinox?',
        
            choice1:'August',
            choice2:'September',
            choice3:'October',
            choice4:'November',
            correctAnswer: '2'
    },
    {
        question:'Emma has 2-yardsticks. She also has a 12-inch ruler. She laid them end-to-end in a line. How many feet long is the line?',
        
            choice1:'11',
            choice2:'3',
            choice3:'7',
            choice4:'5',
            correctAnswer: '3'
    },
    {
        question:'Inca civilizations were concentrated on what continent?',
        
            choice1:'South America',
            choice2:'Africa',
            choice3:'North America',
            choice4:'Asia',
            correctAnswer: '1'
    },
    {
        question:'What state is the Grand Canyon in?',
        
            choice1:'California',
            choice2:'Arizona',
            choice3:'North Dakota',
            choice4:'New Mexico',
            correctAnswer: '2'
    },
    {
        question:'Who was the first president of the United States?',
        
            choice1:'John Adams',
            choice2:'Abraham Lincoln',
            choice3:'Thomas Jefferson',
            choice4:'George Washington',
            correctAnswer: '4'
    },
    {
        question:'On a class field trip, there are 4 buses taking 36 students to the zoo. Each bus has the same number of student. How many students are on each bus? ',
        
            choice1:'9',
            choice2:'7',
            choice3:'12',
            choice4:'36',
            correctAnswer: '1'
    },
    {
        question:'If your mom buys 52 grapes and your dad brings home 34 grapes, how many grapes does your family have?',
        
            choice1:'34',
            choice2:'76',
            choice3:'86',
            choice4:'95',
            correctAnswer: '3'
    },
    {
        question:'You have two quarters, a nickel, three dimes and four pennies. How much money do you have?',
        
            choice1:'50 cents',
            choice2:'10cents',
            choice3:'75 cents',
            choice4:'89 cents',
            correctAnswer: '4'
    },
    {
        question:'Which is bigger: 285 or 200 + 30 – 5 + 60?',
        
            choice1:'Right side',
            choice2:'They are equal',
            choice3:'285',
            choice4:'Left Side',
            correctAnswer: '2'
    },
    {
        question:'What number is the Roman numeral XVI? ',
        
            choice1:'15',
            choice2:'12',
            choice3:'16',
            choice4:'14',
            correctAnswer: '3'
    },
    {
        question:'How many minutes is in a half hour?',
        
            choice1:'30',
            choice2:'45',
            choice3:'25',
            choice4:'15',
            correctAnswer: '1'
    },
    {
        question:'When writing out a fraction, the numbers above and below the vinculum are called the… ',
        
            choice1:'Half and half',
            choice2:'Up and Down',
            choice3:'Numerator and denominator.',
            choice4:'Top and Bottom',
            correctAnswer: '3'
    },{
        question:'If it’s 5:30 when you leave for the store and 6:15 when you get there, how long did it take?',
        
            choice1:'45',
            choice2:'15',
            choice3:'30',
            choice4:'1 Hour',
            correctAnswer: '1'
    },{
        question:'What’s 25 x 3?',
        
            choice1:'50',
            choice2:'75',
            choice3:'77',
            choice4:'60',
            correctAnswer: '2'
    },{
        question:'What gas do humans need to breath in order to live',
        
            choice1:'Carbon dioxide',
            choice2:'Oxygen',
            choice3:'Argon',
            choice4:'Helium',
            correctAnswer: '2'
    },{
        question:'How many grams are in a thousand kilograms?',
        
            choice1:'1000',
            choice2:'1,000,000',
            choice3:'100',
            choice4:'100,000',
            correctAnswer: '2'
    },{
        question:'If a train leaves the station and travels at 60 miles per hour, how much time will have passed when it arrives at a station 300 miles away?',
        
            choice1:'6hr or 420min',
            choice2:'3hr or 200min',
            choice3:'5hr or 250min',
            choice4:'5hr or 300min',
            correctAnswer: '4'
    },{
        question:'91 x 2',
        
            choice1:'145',
            choice2:'93',
            choice3:'182',
            choice4:'138',
            correctAnswer: '3'
    },{
        question:'The interior angles of a triangle always sum to… ?',
        
            choice1:'180 degress',
            choice2:'150 degress',
            choice3:'120 degress',
            choice4:'100 degress',
            correctAnswer: '1'
    },
    {
        question:' 23 x 4',
        
            choice1:'112',
            choice2:'160',
            choice3:'56',
            choice4:'92',
            correctAnswer: '4'
    },
    {
        question:'23.4 + 16.2 = ?',
        
            choice1:'36.9',
            choice2:'45.6',
            choice3:'39.6',
            choice4:'45.5',
            correctAnswer: '3'
    },
    {
        question:'A hexagon has how many sides?',
        
            choice1:'5',
            choice2:'6',
            choice3:'4',
            choice4:'8',
            correctAnswer: '2'
    },
    {
        question:'141 x 2',
        
            choice1:'282',
            choice2:'182',
            choice3:'144',
            choice4:'284',
            correctAnswer: '1'
    },
    {
        question:'If you need 1/2 cup of flour and you only have a 1/4 measuring cup, how many times do you need to use it to get the right about of flour?',
        
            choice1:'3 times',
            choice2:'1 times',
            choice3:'4 times',
            choice4:'2 times',
            correctAnswer: '4'
    },
    {
        question:'If a football field is 100 yards long, how many feet long is the football field? ',
        
            choice1:'100',
            choice2:'300',
            choice3:'200',
            choice4:'1000',
            correctAnswer: '2'
    },
    {
        question:'34 x 20 = ?',
        
            choice1:'680',
            choice2:'590',
            choice3:'340',
            choice4:'650',
            correctAnswer: '1'
    },
    {
        question:'What is H2O also known as?',
        
            choice1:'Carbon',
            choice2:'Water',
            choice3:'Juice',
            choice4:'Soda',
            correctAnswer: '2'
    },
    {
        question:'Earth is located in what galaxy?',
        
            choice1:'IC 1101',
            choice2:'Adromenda Galaxy',
            choice3:'This Galaxy',
            choice4:'The Milky Way',
            correctAnswer: '4'
    },
    {
        question:'How many legs to arachnids have?',
        
            choice1:'4',
            choice2:'6',
            choice3:'8',
            choice4:'3',
            correctAnswer: '3'
    },
    {
        question:'When a living thing makes more of it’s own kind it’s called?',
        
            choice1:'Trash',
            choice2:'Reproducing, reducing, recycling',
            choice3:'Humans',
            choice4:'Clowns',
            correctAnswer: '2'
    },
    {
        question:'What phenomenon might be felt on the surface when two tectonic plates rub against each other? ',
        
            choice1:'Bed Shake',
            choice2:'Cool Breeze',
            choice3:'Earthquake',
            choice4:'Crack Slide',
            correctAnswer: '3'
    },
    {
        question:'What resource covers most of the Earth?',
        
            choice1:'Water',
            choice2:'Land',
            choice3:'Humans',
            choice4:'Clouds',
            correctAnswer: '1'
    },
    {
        question:'Why do you see lightning before you hear thunder?',
        
            choice1:'You missed it',
            choice2:'Light travels faster than sound',
            choice3:'It was allusion',
            choice4:'The thunder was Silent',
            correctAnswer: '2'
    },
    {
        question:'Who is the creator of the classic book characters Tom Sawyer and Huckleberry Finn? ',
        
            choice1:'Ernest Hemingway',
            choice2:'Oscar Wilde',
            choice3:'Mark Twain',
            choice4:'Jack London',
            correctAnswer: '3'
    },
    {
        question:'Whose picture is on the 5 dollar bill?',
        
            choice1:'George Washington',
            choice2:'Abraham Lincoln',
            choice3:'Andrew Jackson',
            choice4:'Ulysses S. Grant',
            correctAnswer: '2'
    },
    {
        question:'What do the stripes on the flag mean?',
        
            choice1:'The states',
            choice2:'Thirteen colonies',
            choice3:'The Freedom',
            choice4:'The write of the US',
            correctAnswer: '2'
    },
    {
        question:'The earth _________ on its axis.and it takes 24 hrs to make one revolution?',
        
            choice1:'Stops',
            choice2:'Rolls',
            choice3:'Rotates',
            choice4:'Bounces',
            correctAnswer: '3'
    },
    {
        question:'Which are the biggest states in the USA?',
        
            choice1:'Texas',
            choice2:'California',
            choice3:'Alaska',
            choice4:'Georgia',
            correctAnswer: '3'
    },
    {
        question:'How many states in the USA?',
        
            choice1:'58',
            choice2:'50',
            choice3:'39',
            choice4:'49',
            correctAnswer: '2'
    },
    {
        question:'What is the population of the USA in 2017?',
        
            choice1:'39.57 crores',
            choice2:'42.57 crores',
            choice3:'35.57 crores',
            choice4:'32.57 crores',
            correctAnswer: '4'
    },
    {
        question:'Who Was The Youngest President?',
        
            choice1:'John F. Kennedy',
            choice2:'George W. Bush',
            choice3:'Bill Clinton',
            choice4:'Benjamin Harrison',
            correctAnswer: '1'
    },
    {
        question:'What is 5 ^ 2',
        
            choice1:'10',
            choice2:'15',
            choice3:'25',
            choice4:'50',
            correctAnswer: '3'
    },
    {
        question:'What Is The Capital Of Wyoming?',
        
            choice1:'Douglas',
            choice2:'Cody',
            choice3:'Cheyenne',
            choice4:'Powell',
            correctAnswer: '3'
    },
    {
        question:'What will be If we add 5 & 9?',
        
            choice1:'59',
            choice2:'14',
            choice3:'41',
            choice4:'95',
            correctAnswer: '2'
    },
    {
        question:'Who was the President of the USA in 2018?',
        
            choice1:'Donald Trump',
            choice2:'Barack Obama',
            choice3:'Bill Gates',
            choice4:'Hillary Clinton',
            correctAnswer: '1'
    },
    {
        question:'Which was the first university in the USA?',
        
            choice1:'California University',
            choice2:'Oxford',
            choice3:'MIT',
            choice4:'Harvard University',
            correctAnswer: '4'
    },
    {
        question:'What is the national game of America?',
        
            choice1:'Soccer',
            choice2:'Baseball',
            choice3:'Basketball',
            choice4:'Polo',
            correctAnswer: '2'
    },
    {
        question:'Where is the NASA headquarters located?',
        
            choice1:'Hawaii',
            choice2:'Washington D.C.',
            choice3:'New York',
            choice4:'Texas',
            correctAnswer: '2'
    },
    {
        question:'A positively charged particle that is fundemental in all nuclei is...?',
        
            choice1:'Neutron',
            choice2:'Proton',
            choice3:'Electron',
            choice4:'Nucleus',
            correctAnswer: '2'
    },
    {
        question:'What is the tallest living quadruped animal on Earth?',
        
            choice1:'Whale',
            choice2:'Buffalo',
            choice3:'Elephant',
            choice4:'Giraffe',
            correctAnswer: '4'
    },
    {
        question:'Who was the 4th president of the United States?',
        
            choice1:'James Madison',
            choice2:'John Quincy Adams',
            choice3:'Jeffrey Madison',
            choice4:'Thomas Jefferson',
            correctAnswer: '1'
    },
    {
        question:'What poem has 3 lines and also 5 syllables, then 7, and then 5 again?',
        
            choice1:'Limerick',
            choice2:'Tanka',
            choice3:'Free Verse',
            choice4:'Haiku',
            correctAnswer: '4'
    },
    {
        question:'In astrology, what is represented by a horseman holding a bow?',
        
            choice1:'Cancer',
            choice2:'Gemini',
            choice3:'Leo',
            choice4:'Saggitarious',
            correctAnswer: '4'
    },
    {
        question:'What continent is Chad on?',
        
            choice1:'Africa',
            choice2:'Europe',
            choice3:'Asia',
            choice4:'Antartica',
            correctAnswer: '1'
    },
    {
        question:'Aesop\'s fable talks about a ____ eating sour grapes.',
        
            choice1:'Pig',
            choice2:'Fly',
            choice3:'Fox',
            choice4:'Monkey',
            correctAnswer: '3'
    },

]
console.log(questions.length)

// CONST
const CORRECT_COUNT = 10
const MAX_QUESTIONS = 70

startGame = () => { 
    questionCounter = 0;
    score = 0;
    cpuScore = 0;
    availableQuestions = [...questions];
    // console.log(availableQuestions);
    getNewQuestions();
    updateCountDown();

};


// Get New Questions
getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    console.log(currentQuestion)
    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    availableQuestions.splice(questionIndex, 1)
    // console.log(availableQuestions);
    acceptingAnswers = true;
    console.log(availableQuestions)
    
};

choices.forEach( choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
       
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const newClass =
            selectedAnswer == currentQuestion.correctAnswer ? "correct" : "incorrect";  
            console.log(newClass)

        if (newClass === 'correct') {
            increaseScore(CORRECT_COUNT);
        }

        if (newClass === 'incorrect') {
            increaseCPUScore(CORRECT_COUNT)
        }
        if (newClass === 'incorrect') {
            wrongSound.play()
        }
        
        setTimeout( () => {
            getNewQuestions()
        }, 500);
    });
});

// Score Increase
increaseScore = num => {
    score += num;
    scoreNumber.innerText = score;
};

// CPU Score Increase 
increaseCPUScore = num => {
    cpuScore += num;
    cpuScoreNumber.innerText = cpuScore;
};

// Clock Count Down
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountDown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`
    time--;

    if ( time === 0 ){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign("end.html");
    }
};


// Sounds!!
let sound = new Audio('audio/fruitLoop.mp3');
let soundBtn = document.querySelector('#song');
soundBtn.addEventListener("click", () => sound.play());

let pauseBtn = document.querySelector('#pause');
pauseBtn.addEventListener("click", () => sound.pause());

function playSong() {
    song.play();
    songBtn.removeEventListener("click", play);
    songBtn.addEventListener("click", toggleSong);
    songBtn.innerHTML="Pause Song"
};

function toggleSong() {
    if (song.paused) {
        song.play();
        songBtn.innerHTML = "Pause Song"
    }
    else {
        songBtn.pause();
        songBtn.innerHTML = "Play Song"
    }
};

let wrongSound = new Audio();
wrongSound.src = "audio/funnyWrong.wav";


startGame();
