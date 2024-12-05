$(function () {
    /////////////////////jQB///////////////////////////

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //스크롤 위치가 0 이상이면 헤더영역 변경하기
        if (scroll > 0) {
            $("header").addClass("fixed"); // 헤더영역 픽스하기
            $("header .logo img").attr("src", "images/Total_logo2.svg"); // 로고 이미지 변경
        } //////if문//////
        else {
            $("header").removeClass("fixed");
            $("header .logo img").attr("src", "images/Total_logo1.svg");
        }
    }); /////////////scroll////////////////

    // $(".ham").click(function () {
    //     $(this).toggleClass("avtive");
    //     $(".ham_menu").toggleClass("open");
    // });

    $(".ham").click(function () {
        $(this).toggleClass("avtive");
        $(".ham_menu").toggleClass("open");

        // 햄버거 메뉴가 열릴 때 페이지 스크롤 막기
        if ($(".ham_menu").hasClass("open")) {
            $("body").addClass("no-scroll");
        } else {
            $("body").removeClass("no-scroll");
        }
    });

    // 현재 페이지 파일명 가져오기
    const currentPage = window.location.pathname.split("/").pop();

    // gnb와 ham_gnb의 모든 링크에 대해 처리
    $(".gnb a, .ham_gnb a").each(function () {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active");
        }
    });

    AOS.init();
}); /////////////////////jQB////////////////////////////
