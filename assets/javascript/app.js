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

});