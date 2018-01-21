/*global $ */

(function () {
    "use strict"

    const playGame = () => {
        let slaying = true
        let youHit = Math.floor(Math.random() * 2)
        let damageThisRound = Math.floor(Math.random() * 5 + 1)
        let totalDamage = 0

        $("#prompt").empty()

        while (slaying) {
            if (youHit) {
                $("#prompt").append("<p>You hit the dragon and did " + "<span>" + damageThisRound + "</span>" + " damage!</p>")
                totalDamage += damageThisRound

                if (totalDamage >= 4) {
                    $("#prompt").append("<p>You did it! You slew the dragon!</p>")
                    slaying = false
                } else {
                    youHit = Math.floor(Math.random() * 2)
                }
            } else {
                $("#prompt").append("<p>The dragon burninates you! You're toast.</p>")
                slaying = false
            }
        }
    }

    $("#wrapper h1").append("Kill the dragon")
    $("#prompt").append("Try to kill the dragon..")
    $("#options").html("<button id='play'>Try</button>")
    $("#play").click(playGame)
})()
