$(function () {
  gsap.registerPlugin(ScrollTrigger);

  let removeClassTimeout; // 타이머 변수 선언

  // 첫 번째 h2 (PC 버전)
  gsap.to(".culture_mission .textani_area.pc h2", {
    scrollTrigger: {
      trigger: ".culture_mission .textani_area.pc h2",
      start: "top 100%",
      end: "bottom 100%",
      scrub: 1,
      markers: false,
      onEnter: function () {
        $(".culture_mission .textani_area.pc h2").addClass("animate");
        if (removeClassTimeout) {
          clearTimeout(removeClassTimeout);
        }
      },
      onLeaveBack: function () {
        removeClassTimeout = setTimeout(function() {
          $(".culture_mission .textani_area.pc h2").removeClass("animate");
        }, 500);
      },
      once: false
    },
    opacity: 1,
    x: 0,
    duration: 1.5
  });

  // 첫 번째 .mo 요소
  gsap.to(".culture_mission .textani_area.mo.nth_1 h2", {
    scrollTrigger: {
      trigger: ".culture_mission .textani_area.mo.nth_1", // .mo.nth_1을 trigger로 지정
      start: "top 95%",
      end: "bottom 100%",
      scrub: 1,
      //markers: true,
      onEnter: function () {
        $(".culture_mission .textani_area.mo.nth_1 h2").addClass("animate");
        if (removeClassTimeout) {
          clearTimeout(removeClassTimeout);
        }
      },
      onLeaveBack: function () {
        removeClassTimeout = setTimeout(function() {
          $(".culture_mission .textani_area.mo.nth_1 h2").removeClass("animate");
        }, 500);
      },
      once: false
    },
    opacity: 1,
    x: 0,
    duration: 1.5
  });

  // 두 번째 .mo 요소
  gsap.to(".culture_mission .textani_area.mo.nth_2 h2", {
    scrollTrigger: {
      trigger: ".culture_mission .textani_area.mo.nth_2", // .mo.nth_2을 trigger로 지정
      start: "top 95%",
      end: "bottom 100%",
      scrub: 1,
      markers: false,
      onEnter: function () {
        $(".culture_mission .textani_area.mo.nth_2 h2").addClass("animate");
        if (removeClassTimeout) {
          clearTimeout(removeClassTimeout);
        }
      },
      onLeaveBack: function () {
        removeClassTimeout = setTimeout(function() {
          $(".culture_mission .textani_area.mo.nth_2 h2").removeClass("animate");
        }, 500);
      },
      once: false
    },
    opacity: 1,
    x: 0,
    duration: 1.5
  });

  // 세 번째 .mo 요소
  gsap.to(".culture_mission .textani_area.mo.nth_3 h2", {
    scrollTrigger: {
      trigger: ".culture_mission .textani_area.mo.nth_3", // .mo.nth_3을 trigger로 지정
      start: "top 95%",
      end: "bottom 100%",
      scrub: 1,
      markers: false,
      onEnter: function () {
        $(".culture_mission .textani_area.mo.nth_3 h2").addClass("animate");
        if (removeClassTimeout) {
          clearTimeout(removeClassTimeout);
        }
      },
      onLeaveBack: function () {
        removeClassTimeout = setTimeout(function() {
          $(".culture_mission .textani_area.mo.nth_3 h2").removeClass("animate");
        }, 500);
      },
      once: false
    },
    opacity: 1,
    x: 0,
    duration: 1.5
  });
});
