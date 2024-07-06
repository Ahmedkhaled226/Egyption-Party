/// <reference types="../@types/jquery" />





$(function () {
    $('.toggle').on('click', function () {
        $('.inner').not($(this).next('.inner')).slideUp();

        $(this).next('.inner').slideToggle();

    });
});

$(document).ready(function () {
    let countDownDate = new Date("Jul 1, 2025 15:37:25").getTime();

    let x = setInterval(function () {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('.days').text(days + " D");
        $('.hours').text(hours + " h");
        $('.minutes').text(minutes + " m");
        $('.seconds').text(seconds + " s");

        if (distance < 0) {
            clearInterval(x);
            $('.days').text("Expired");
            $('.hours').text("");
            $('.minutes').text("");
            $('.seconds').text("");
        }
    }, 1000);
});





$(document).ready(function () {
    var images = [
        "css/photos/thumbnail.jpg",
        "css/photos/1.jpg",
        "css/photos/2.jpg",
        "css/photos/3.jpg",
        "css/photos/4.jpg",
        "css/photos/5.jpg"
    ];

    function updateRandomBackground() {
        var randomIndex = Math.floor(Math.random() * images.length);
        var randomImageUrl = images[randomIndex];
        $('#home').css('background-image', 'url(' + randomImageUrl + ')');
        localStorage.setItem('backgroundImage', randomImageUrl);
    }

    var interval = setInterval(updateRandomBackground, 5000);

    $('#toggleRandomNo').click(function () {
        clearInterval(interval);
    });

    $('#toggleRandomYes').click(function () {
        interval = setInterval(updateRandomBackground, 5000);
    });

    var savedImageUrl = localStorage.getItem('backgroundImage');
    if (savedImageUrl) {
        $('#home').css('background-image', 'url(' + savedImageUrl + ')');
    } else {
        var defaultImageUrl = 'css/photos/thumbnail.jpg';
        $('#home').css('background-image', 'url(' + defaultImageUrl + ')');
        localStorage.setItem('backgroundImage', defaultImageUrl);
    }

    $('.choose-background img').click(function () {
        var imageUrl = $(this).attr('src');
        $('#home').css('background-image', 'url(' + imageUrl + ')');
        $('#selected-background').attr('src', imageUrl);
        localStorage.setItem('backgroundImage', imageUrl);
        clearInterval(interval);
    });
});


$(document).ready(function () {
    $('#leftMenu a').click(function (e) {
        e.preventDefault();

        let targetSection = $(this).attr('href');
        let offsetTop = $(targetSection).offset().top;


        $('html, body').animate({
            scrollTop: offsetTop
        }, 100);
    });
});
$(document).ready(function () {
    var savedColor = localStorage.getItem('selectedColor');
    if (savedColor) {
        $('body, a, h1, h2, h3, p, span , button , i').css('color', savedColor);
    }

    $('.colors-option li').click(function () {
        var color = $(this).attr('data-color');

        $('body, h1, h2, h3, p, span ,button ,i ,a').css('color', color);


        localStorage.setItem('selectedColor', color);
    });
});




window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector('.scroll-to-top').style.display = "block";
    } else {
        document.querySelector('.scroll-to-top').style.display = "none";
    }
}

document.querySelector('.scroll-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});






$(document).ready(function () {
    $('#loading').fadeIn();

    setTimeout(function () {
        $('#loading').fadeOut();
    }, 1000);
});


document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
} s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
$(document).ready(function () {
    $('mat-button-toggle').click(function () {
        var lang = $(this).attr('value');

        if (lang === 'ar') {
            window.location.href = 'ar.html';
        } else if (lang === 'en') {
            window.location.href = 'index.html';
        }
    });
});
$(document).ready(function () {
    $('#message').on('input', function () {
        var textLength = $(this).val().length;
        var maxLength = 100;
        var remainingChars = maxLength - textLength;

        $('#chars').text(remainingChars);
    });
});