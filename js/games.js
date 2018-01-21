/*global $ */

$(function () {
    "use strict"
    console.log("games.js is loaded")

    const loadScript = scriptName => {
        $.getScript("js/" + scriptName + ".js", () => console.log(scriptName, "script is loaded!"))
    }

    const addContainer = game => {
        $("#game-section").html("<div id='" + game + "'></div>")
    }

    const loadPartial = (_partialName, scriptName) => {
        const $loader = ('<div class="text-center mt-4 icon-load"><i class="fa fa-spinner fa-pulse fa-3x"></i></div>')

        $("#game-section").append($loader)

        window.setTimeout(() => {
            $("#" + _partialName).load("templates/_" + _partialName + ".html",
                () => console.log(_partialName, " partial is loaded!"))

            loadScript(scriptName)

            $(".icon-load").remove()

            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1500)
        }, 2000)
    }

    const loadGame = (gameName, scriptGame) => {
        addContainer(gameName)
        loadPartial(gameName, scriptGame)
    }


    $("#game-target-sum").click(() => {
        $('head').append('<link rel="stylesheet" href="css/targetSum.css">')
        loadGame("targetSum", "targetSum")
    })

    $("#game-troll").click(() => {
        $('head').append('<link rel="stylesheet" href="css/otherGames.css">')
        loadGame("otherGames", "trollGame")
    })

    $("#game-dragon").click(() => {
        $('head').append('<link rel="stylesheet" href="css/otherGames.css">')
        loadGame("otherGames", "dragonGame")
    })

    $("#game-luck").click(() => {
        $('head').append('<link rel="stylesheet" href="css/otherGames.css">')
        loadGame("otherGames", "luckGame")
    })
})
