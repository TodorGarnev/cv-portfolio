/*global $, document */

$(function () {
    "use strict"
    console.log("modal.js is loaded")

    $(document).ready(() => {
        const name = Cookies.get("name")

        name === undefined ? $('#helloModal').modal('show') : $("#greeting").html("Hello, <strong>" + name + "</strong>! You are welcome.")
    })

    $("#saveName").click(() => {
        const $guestName = $("#guestName").val()

        Cookies.set('name', $guestName, {
            expires: 1
        })

        window.location.reload()
    })

    $("#close").click(() => $("#greeting").text("Oh, you are shy unknown friend. Hello!"))
})
