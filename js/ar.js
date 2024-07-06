/// <reference types="../@types/jquery" />


$(document).ready(function () {
    $('.openNav').click(function () {
        let leftMenu = $("#leftMenu");
        let homeContent = $("#home-content");

        if (leftMenu.width() === 0) {
            // Open the menu
            leftMenu.animate({ width: '250px' }, 300);
            homeContent.animate({ marginRight: '250px' }, 500);
            $(this).text('☰ إغلاق');
        } else {
            // Close the menu
            leftMenu.animate({ width: '0' }, 300);
            homeContent.animate({ marginRight: '0' }, 1100);
            $(this).text('☰ فتح');
        }
    });

    $('.closebtn').on('click', function () {
        $("#leftMenu").animate({ width: '0px' }, 500);
        $("#home-content").animate({ marginRight: '0px' }, 1100);
        $('.openNav').text('☰ فتح');
    });
});
$(document).ready(function () {
    $('.icon-toggle').click(function () {
        let rightMenu = $("#rightMenu");
        let homeContent = $("#home-content");

        if (rightMenu.width() === 0) {
            // Open the menu
            $('#home-content i').removeClass('fa-spin');
            rightMenu.animate({ width: '250px' }, 200);
            homeContent.animate({ marginLeft: '250px' }, 100);

        } else {
            // Close the menu
            $('#home-content i').addClass('fa-spin');
            rightMenu.animate({ width: '0' }, 200);
            homeContent.animate({ marginLeft: '0' }, 300);

        }
    });

    $('.closebtn1').on('click', function () {
        $("#rightMenu").animate({ width: '0' }, 200);
        $("#home-content").animate({ marginLeft: '0' }, 300);
        $('#home-content i').addClass('fa-spin');

    });
});
