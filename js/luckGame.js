/*global $ */

(function () {
    "use strict"

    const getComputerChoice = () => {
        let computerChoice = Math.random()

        computerChoice < 0.34 ? computerChoice = "rock" :
            computerChoice <= 0.67 ? computerChoice = "paper" :
            computerChoice = "scissors"

        $("#prompt").append("<p>Computer's choise:<strong> " + computerChoice + "</strong></p>")
        return computerChoice
    }

    const compare = (choice1, choice2) =>
        choice1 === choice2 ? "The result is a tie!" :
        (choice1 === "rock" && choice2 === "scissors") ? "You win!" :
        (choice1 === "scissors" && choice2 === "rock") ? "Computer wins!" :
        (choice1 === "paper" && choice2 === "rock") ? "You win!" :
        (choice1 === "rock" && choice2 === "paper") ? "Computer wins!" :
        (choice1 === "scissors" && choice2 === "paper") ? "You win!" :
        (choice1 === "paper" && choice2 === "scissors") ? "Computer wins!" : undefined

    const printResult = userChoice => {
        $("#prompt").empty()
        $("#prompt").append("<p>" + compare(userChoice, getComputerChoice()) + "</p>")
    }

    const addButtons = () => `<a id="rock">
                                <i class="fa fa-hand-rock-o fa-2x"></i>
                              </a>
                              <a id="paper">
                                <i class="fa fa-hand-paper-o fa-2x"></i>
                              </a>
                              <a id="scissors">
                                <i class="fa fa-hand-scissors-o fa-2x"></i>
                              </a>`


    $("#wrapper h1").append("Rock, paper, scissors")
    $("#prompt").append("Make your choice and cross your fingers to win against the computer..")
    $("#options").html(addButtons())

    $("#rock").click(() => printResult("rock"))
    $("#paper").click(() => printResult("paper"))
    $("#scissors").click(() => printResult("scissors"))

})()
