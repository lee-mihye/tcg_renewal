$(function () {
    $(document).ready(function () {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 5,
            centeredSlides: true,
            roundLengths: true,
            spaceBetween: 30,
            grabCursor: true,
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
    });

    // 이미지 클릭 시 새 탭에서 인터넷 도메인으로 이동
    $(".swiper-slide img").on("click", function () {
        // 클릭한 이미지의 클래스명 가져오기
        var className = $(this).attr("class");

        // 각 클래스에 해당하는 도메인 링크 지정
        var domainLinks = {
            "link-1": "https://sichime.com", // 첫 번째 이미지 클릭 시 이동
            "link-2": "https://dietbyebye.com", // 두 번째 이미지 클릭 시 이동
            "link-3": "https://originalhealthyfood.com", // 세 번째 이미지 클릭 시 이동
            "link-4": "https://drfully.com", // 네 번째 이미지 클릭 시 이동
            "link-5": "https://boojanongbu.com", // 다섯 번째 이미지 클릭 시 이동
            "link-6": "https://learningannex.kr", // 여섯 번째 이미지 클릭 시 이동
            "link-7": "https://www.youtube.com/channel/UCauNO835ypypAj9VgLMB-vw", //  일곱번째 이미지 클릭 시 이동
        };

        // 해당 클래스를 가진 링크를 새 탭에서 열기
        if (domainLinks[className]) {
            window.open(domainLinks[className], "_blank");
        }
    });
}); ///////////제이쿼리 블럭////////////////
