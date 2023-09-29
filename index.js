const mytext= new SplitType("#heading");

gsap.to(".char",{
    y:0,
    stagger:0.05,
    delay:3.5,
    duration:0.2,
    opacity:0.6,
});

gsap.to("#chotiheading",{
 y:0,
 stagger:0.05,
 delay:3.5,
 duration:0.6,
});

gsap.fromTo("#loading-page",{opacity:1},{
    opacity:0,
    duration:2,
    stagger:0.04,
    delay:3,
});