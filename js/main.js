
function EditColorButton(btn1, btn2) {
    btn1.style.color = "#fff";
    btn2.style.color = "rgb(129, 187, 255)";
}

function DrawTable(semestr) {
    var k = document.getElementById(semestr);
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    if (semestr == "1semester") {
        EditColorButton(btn2, btn1)
        var k2 = document.getElementById("2semester");
    }
    else {
        EditColorButton(btn1, btn2);
        var k2 = document.getElementById("1semester");
    }

    k2.style.display = "none";
    k.style.display == "none" ? k.style.display = "table" : k.style.display = "table";
}

function DrawAnime() {
    var anime = document.getElementById("hobbies_anime");
    anime.style.display = "block";
    document.getElementById("hobbies__buttons").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function DrawGames() {
    var game = document.getElementById("hobbies_games");
    game.style.display = "block";
    document.getElementById("hobbies__buttons").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function DrawManga() {
    var manga = document.getElementById("hobbies_manga");
    manga.style.display = "block";
    document.getElementById("hobbies__buttons").style.display = "none";
    document.getElementById("back").style.display = "block";
}

function Back() {
    document.getElementById("hobbies_anime").style.display = "none";
    document.getElementById("hobbies_manga").style.display = "none";
    document.getElementById("hobbies_games").style.display = "none";

    document.getElementById("hobbies__buttons").style.display = "block";
    document.getElementById("back").style.display = "none";
}

function GoBottom() {
    $('#scroll_bottom').click(function () {
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 600);
        return false;
    });
};

function SumOfSquares() {
    var ar = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));
    var sum = 0;
    for (var i = 0; i < ar.length; i++) {
        sum += ar[i] * ar[i];
    }
    console.log("Sum of squares: " + sum);
}

function ChangeColorOnMouseOver() {
    var clock = document.getElementById("id_clock");
    clock.onmouseenter = function () {
        document.body.style.background = "rgb(61, 59, 59)";
    }
    clock.onmouseleave = function () {
        document.body.style.background = "hsl(220deg 9% 14%)";
    }
}