$(function () {
    /////////////////////jQB///////////////////////////
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#histories", {
        scrollTrigger: {
            trigger: ".about_history",
            start: "top 30%",
            endTrigger: ".y15",
            scrub: true,
            toggleClass: { targets: ".fixedBox", className: "sticky" },
        },
    });




    // mm.add("(min-width: 769px)", () => {
    // gsap.to(".sc-history .fixedNum", {
    //    scrollTrigger: {
    //      trigger: ".sc-history .fixedNum",
    //      pin: true,
    //      start: "bottom 100%",
    //      end: '+='+($('.sc-history .fixedBox').outerHeight()   ),
    //      scrub: 1,
    //      markers: true,

    //    }
    //  });
    // });

    //  mm.add("(max-width: 768px)", () => {
    //    gsap.to(".sc-history .fixedNum", {
    //      scrollTrigger: {
    //        trigger: ".sc-history .fixedNum",
    //        pin: true,
    //        start: "bottom 100%",
    //        end: '+='+($('.sc-history .fixedBox').outerHeight() - $('.sc-history .fixedNum').outerHeight() - 300 ),
    //        scrub: 1,
    //        toggleClass: { targets: ".fixedBox", className: "active" },
    //      }
    //    });
    //  });

    // tab

}); /////////////////////jQB////////////////////////////
