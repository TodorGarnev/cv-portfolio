/*global $ */

$(function () {
    "use strict"
    console.log("target-sum.js is loaded")

    let getTimer = null
    let sumOfNumbers = 0
    let timer = 10
    const $numbersBox = $('.challenge-numbers')
    const $startButton = $(".start")
    const $targetBox = $(".target")
    const $timer = $(".timer-value")



    const getRandomNumber = (numMin, numMax) => Math.floor(Math.random() * (numMax - numMin + 1)) + numMin


    const getNumbers = (numMin, numMax) => {
        let numberArray = []
        for (let i = 0; i < 6; i++) {
            numberArray.push(getRandomNumber(numMin, numMax))
        }
        return numberArray
    }


    const render = numberArray => `<div class="number">${numberArray[0]}</div>
                                   <div class="number">${numberArray[1]}</div>
                                   <div class="number">${numberArray[2]}</div>
                                   <div class="number">${numberArray[3]}</div>
                                   <div class="number">${numberArray[4]}</div>
                                   <div class="number">${numberArray[5]}</div>`


    const calculateSum = (numberArray) => {
        let sum = 0
        let numMax = 5

        for (let i = 0; i <= numberArray.length; i++) {
            const tempRandomNumber = getRandomNumber(0, numMax)
            sum += numberArray[tempRandomNumber]
            numberArray.splice(tempRandomNumber, 1)
            numMax -= 1
        }
        return sum
    }


    const startGame = () => {
        const playNumber = getNumbers(1, 9)
        sumOfNumbers = 0
        timer = 10

        $timer.text("10")
        $targetBox.removeClass("red").removeClass("green")
        $startButton.attr("hidden", "hidden")
        $targetBox.val() !== "?" ? $startButton.text("Play again") : $startButton.text("Start")

        $(".challenge-numbers").html(render(playNumber))
        $targetBox.text(calculateSum(playNumber))

        getTimer = window.setInterval(gameTimer, 1000)
        chooseNumber()
    }


    const chooseNumber = () => {
        $numbersBox.click((event) => {
            const targetSum = parseInt($targetBox.text())
            const canSelect = event.target.className === 'number' && $(event.target).text() !== "?"

            canSelect ? (addNumberToSum(event), clickedNumber(event)) : null

            targetSum === sumOfNumbers ? success() : targetSum < sumOfNumbers ? fail() : null
        })
    }


    const addNumberToSum = event => sumOfNumbers += parseInt($(event.target).text())


    const clickedNumber = event => {
        $(event.target).addClass("clicked")
        $(event.target).click(false)
    }


    const success = () => {
        $targetBox.addClass("green")
        endGame()
    }


    const fail = () => {
        $targetBox.addClass("red")
        endGame()
    }


    const gameTimer = () => {
        timer -= 1
        timer === 0 ? fail() : null
        $timer.text(timer)
    }


    const endGame = () => {
        window.clearInterval(getTimer)
        $startButton.removeAttr("hidden")
        $(".number").click(false)
    }


    $startButton.click(startGame)

})
