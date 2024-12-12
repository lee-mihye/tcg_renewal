$(function () {
    /////////////////////jQB///////////////////////////
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({
      // 기본 설정 (768px 이상)
      "(min-width: 769px)": function () {
        gsap.to("#histories", {
          scrollTrigger: {
            trigger: ".about_history",
            start: "top 30%",
            endTrigger: ".y15",
            scrub: true,
            toggleClass: { targets: ".fixedBox", className: "sticky" },
          },
        });
      },
    
      // 768px 이하 설정
      "(max-width: 768px)": function () {
        gsap.to("#histories", {
          scrollTrigger: {
            trigger: ".about_history",
            start: "top 50%", // 변경된 시작점
            endTrigger: ".y15",
            scrub: true,
            toggleClass: { targets: ".fixedBox", className: "mobile-sticky" }, // 변경된 클래스
          },
        });
      },
    });

}); /////////////////////jQB////////////////////////////
