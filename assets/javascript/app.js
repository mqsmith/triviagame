// Questions and answers Array
var questions = [
    {
        question: " Which is the only American Football team to go a whole season undefeated, including the Super Bowl?",
        answers: [
            { answer: "A: The 1972 Miami Dolphins", value: true },
            { answer: "B: The 2007 New Englad Patriots", value: false },
            { answer: "C: The 1992 Buffalo Bills", value: false },
            { answer: "D: The 1999 St. Louis Rams", value: false },
        ]
    },
    {
        question: "What player won All-Star Game MVP, NBA MVP, and NBA Finals MVP awards in 2000?",
        answers: [
            { answer: "A: Michael Jordan", value: false },
            { answer: "B: Shaquille O'neal", value: true },
            { answer: "C: Tim Duncan", value: false },
            { answer: "D: Kobe Bryant", value: false },
        ]
    },
    {
        question: 'What golfer was known as "The Golden Bear"?',
        answers: [
            { answer: "A: Billy Casper", value: false },
            { answer: "B: Jack Nicklaus", value: true },
            { answer: "C: Arnold Palmer", value: false },
            { answer: "D: Phil Mickelson", value: false },
        ]
    },
    {
        question: "Who was the first Major League player to pitch a ball over 100 mph?",
        answers: [
            { answer: "A: Tom Seaver", value: false },
            { answer: "B: Roger Clemens", value: false },
            { answer: "C: Nolan Ryan", value: true },
            { answer: "D: Randy Johnson", value: false },
        ]
    },
    {
        question: "Who is the NFL's all-time leading rusher?",
        answers: [
            { answer: "A: Terrell Davis", value: false },
            { answer: "B: Walter Payton", value: false },
            { answer: "C: Emmitt Smith", value: true },
            { answer: "D: Barry Sanders", value: false },
        ]
    },
    {
        question: "Which golf tournament did Tiger Woods win by 12 strokes in 1997 to record his first major championship win?",
        answers: [
            { answer: "A: The British Open", value: false },
            { answer: "B: The US Open", value: false },
            { answer: "C: The PGA Championship", value: false },
            { answer: "D: The Masters", value: true },
        ]
    },
    {
        question: "Why did the year 1994 see no baseball World Series?",
        answers: [
            { answer: "A: It got rained out", value: false },
            { answer: "B: There were more than two teams eligible", value: false },
            { answer: "C: It was played in 1995 instead", value: false },
            { answer: "D: There was a player's strike.", value: true },
        ]
    },
    {
        question: "Who was the youngest player to score 10,000 points in the NBA?",
        answers: [
            { answer: "A: LeBron James", value: true },
            { answer: "B: Kobe Bryant", value: false },
            { answer: "C: Michael Jordan", value: false },
            { answer: "D: Wilt Chamberlin.", value: false },
        ]
    },
]

// Global variables
var game;
var counter = 0;
var clock;
var timer = 30;
var correctCounter = 0;
var incorrectCounter = 0;
var unansweredCounter = 0;

$(document).ready(function () {
    // Start the game when that start button is clicked

    $(".main").on("click", ".start-btn", function () {
        console.log("You clicked start!");
        startGame();
    });

    $('.main').on('click', '.answer', function () {
        chosenAnswer = $(this).text();
        console.log(this);
        var answerCounter = questions[counter].answers;
        console.log(answerCounter);

        var answer = $('.answer');
        for (var i = 0; i < answerCounter.length; i++) {
            if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === true) {
                clearInterval(clock);
                var right = $(this).attr('class', 'right-answer answer');
                rightAnswer();
            } else if (chosenAnswer === answerCounter[i].answer && answerCounter[i].value === false) {
                clearInterval(clock);
                $(this).attr('class', 'wrong-answer answer');
                $(answerCounter[i].value === true).css('background-color', 'green');
                $(answerCounter[i].value === true).css('color', 'white');
                wrongAnswer();
            }
        }
    });

    $('body').on('click', '.reset-button', function () {
        
        resetGame();
    });

});

function rightAnswer() {
    correctCounter++;
    $('.time').html(timer);
    $('.right').html('<p>Right answers: ' + correctCounter + '</p><br>');
    setTimeout(questionCounter, 2000);
}

function wrongAnswer() {
    incorrectCounter++;
    $('.time').html(timer);
    $('.wrong').html('<p>Wrong answers: ' + incorrectCounter + '</p><br>');
    setTimeout(questionCounter, 2000);
}

function unanswered() {
    unansweredCounter++;
    $('.unanswered').html('<p>Unanswered questions: ' + unansweredCounter + '</p>');
    $('.main').append("<p class='times-up'>Time's up!</p>");
    $('.right-answer').css('background-color', 'green');
    $('.times-up')
        .delay(2000)
        .fadeOut(400);
    setTimeout(questionCounter, 2000);
}

// Start the game
function startGame() {
    var audio = $("#mysoundclip")[0];
      audio.play();
    $('.start-page').css('display', 'none');
    $('.questions-page').css('visibility', 'visible');
    $('.answers').css('visibility', 'visible');
    $('.final').css('display', 'none');
    $('.timer').html('<p>Time remaining: <span class="time">30</span></p>');

    $('.question').html(questions[counter].question);
    var showingAnswers =
        '<p class="answer first-answer">' +
        questions[counter].answers[0].answer +
        '</p><p class="answer">' +
        questions[counter].answers[1].answer +
        '</p><p class="answer">' +
        questions[counter].answers[2].answer +
        '</p><p class="answer">' +
        questions[counter].answers[3].answer +
        '</p>';

    $('.answers').html(showingAnswers);

    timerHolder();
    console.log("Game has Started!");
}

function questionCounter() {
    if (counter < 7) {
        counter++;
        startGame();
        timer = 30;
        timerHolder();
    } else {
        finishGame();
    }
}

// Timer function
function timerHolder() {
    console.log("timerHolder");
    clearInterval(clock);
    clock = setInterval(seconds, 1000);
    function seconds() {
        if (timer === 0) {
            clearInterval(clock);
            unanswered();
        } else if (timer > 0) {
            timer--;
        }
        $('.time').html(timer);
    }

}

// Finishing the game
function finishGame() {
    $('.start-page').css('display', 'none');
    $('.questions-page').css('visibility', 'hidden');
    $('.answers').css('visibility', 'hidden');
    $('.final').css('visibility', 'visible');
    $('.final').css('display', 'block');
    var final = $('.final')
        .html("<p>All done, here's how you did!<p><br><br>")
        .append('<p>Correct Answers: ' + correctCounter + '</p><br>')
        .append('<p>Wrong Answers: ' + incorrectCounter + '</p><br>')
        .append('<p>Unanswered questions: ' + unansweredCounter + '</p>');
    $(final).attr('<div>');
    $(final).attr('class', 'final');
    $('.final').append('<p><a class="btn btn-primary btn-lg reset-button" href="#">Restart the game!</a></p>');

}

// Reset the game
function resetGame() {
    console.log("You reset the game");
    counter = 0;
    correctCounter = 0;
    incorrectCounter = 0;
    unansweredCounter = 0;
    timer = 30;
    $('.right').html('<p>Right answers: ' + correctCounter + '</p><br>');
    $('.wrong').html('<p>Wrong answers: ' + incorrectCounter + '</p><br>');
    $('.unanswered').html('<p>Unanswered questions: ' + unansweredCounter + '</p>');
    startGame();
    timerHolder();
}