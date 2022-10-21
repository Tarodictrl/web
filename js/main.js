function DrawTable(semestr) {
    var k = document.getElementById(semestr);
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    if (semestr == "1semester") {
        var color1 = window.getComputedStyle(btn1).color;
        var color2 = window.getComputedStyle(btn2).color;
        btn2.style.color = color1;
        btn1.style.color = color2;
        var k2 = document.getElementById("2semester");
    }
    else {
        var color1 = window.getComputedStyle(btn1).color;
        var color2 = window.getComputedStyle(btn2).color;
        btn2.style.color = color1;
        btn1.style.color = color2;
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

function ChangeTheme() {
    var link = document.getElementById("theme-link");

    let lightTheme = "../css/light.css";
    let darkTheme = "../css/dark.css";

    var currTheme = link.getAttribute("href");

    if (currTheme == lightTheme) {
        document.getElementById("theme__img").src = "../assets/theme/sun.png"
        currTheme = darkTheme;
    }
    else {
        document.getElementById("theme__img").src = "../assets/theme/moon.png"
        currTheme = lightTheme;
    }

    link.setAttribute("href", currTheme);
}