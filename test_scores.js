"use strict";

// Get test scores from the user
const getScores = () => {
    const scores = prompt("Enter test scores separated by commas:");

    if (scores === null || scores.trim() === "") {
        alert("You must enter test scores.");
        return;
    }

    const scoreArray = scores.split(",").map(Number);

    displayScores(scoreArray);
};

// Display and calculate test scores
const displayScores = scores => {
    const lowScore = Math.min(...scores);
    const highScore = Math.max(...scores);

    const total = scores.reduce((sum, score) => sum + score, 0);
    const average = total / scores.length;

    alert(
        "Scores: " + scores.join(", ") +
        "\nLow score = " + lowScore +
        "\nHigh score = " + highScore +
        "\nAverage score = " + average.toFixed(1)
    );
};

// Start the application
getScores();