var windowHeight = $(document).height();

$(document).ready(function($) {
    
    var controller = new ScrollMagic();

	// build scene

    var scene = new ScrollScene({triggerElement: "#marker-debut", duration: windowHeight*6})
        .setPin("#main-scroll")
        .addTo(controller)
        .addIndicators();

    // 1st "page"
    var tween = new TimelineMax()
        .add(TweenMax.to("#pres-contact", 5, {top: '30vh'}))
        .add(TweenMax.to("#photo-profil", 5, {left: 100}))
        .add(TweenMax.to("#contacts", 5, {left: -150, opacity: 1}))
        .add(TweenMax.to("#titleCV", 5, {opacity: 1}))
        .add(TweenMax.to("#its-me", 5, {opacity: 0}))
        .add(TweenMax.to("#its-me", 5, {left: 'auto', right: '-10vw', top: '10vh'}));

    scene = new ScrollScene({triggerElement: "#marker-debut", duration: 500})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    tween = new TimelineMax()
        .add(TweenMax.to("#contacts", 5, {left: -500, opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-contact-away", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    // 2nd "page"
    tween = TweenMax.to("#photo-arbre-ciel", 5, {top: -1000});

    scene = new ScrollScene({triggerElement: "#marker-technicals", duration: 500})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    tween = new TimelineMax()
        .add(TweenMax.to("#titleCV", 5, {left: '2vw'}))
        .add(TweenMax.to("#photo-profil", 5, {top: -150}))
        .add(TweenMax.to("#photo-profil", 5, {left: 'auto', right: '-23vw'}))
        .add(TweenMax.fromTo("#technicals", 5, {left: -500, opacity: 0}, {left: -60, opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-technicals", duration: 500})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    // 3rd "page"
    tween = new TimelineMax()
        .add(TweenMax.to("#technicals", 5, {opacity: 0}))
        .add(TweenMax.to("#photo-haunted-mansion", 5, {left: '-100%'}))
        .add(TweenMax.to("#professional-history", 5, {css:{zIndex: 53}}));

    scene = new ScrollScene({triggerElement: "#marker-history", duration: 500})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    tween = new TimelineMax()
        .add(TweenMax.to("#photo-profil", 5, {top: 0}))
        .add(TweenMax.to("#titleCV", 5, {left: 'auto', right: '-44vw'}));

    scene = new ScrollScene({triggerElement: "#marker-history", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    // 4th "page"
    tween = new TimelineMax()
        .add(TweenMax.to("#photo-dune", 1, {css:{zIndex: 54}}))
        .add(TweenMax.fromTo("#photo-dune", 5, {top: 1000}, {top: 0}))
        .add(TweenMax.to("#training", 5, {opacity: 1}))
        .add(TweenMax.to("#professional-history", 5, {css:{zIndex: 1}}))
        .add(TweenMax.to("#photo-beach", 5, {css:{zIndex: 48}}));

    scene = new ScrollScene({triggerElement: "#marker-training", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    // 5th "page"
    tween = new TimelineMax()
        .add(TweenMax.to("#training", 5, {opacity: 0}))
        .add(TweenMax.fromTo("#photo-dune", 5, {top: 0}, {top: 1000}))
        .add(TweenMax.to("#photo-profil", 5, {left: '-25vw', right: 'auto'}))
        .add(TweenMax.to("#titleCV", 5, {left: '0vw', right: 'auto'}))
        .add(TweenMax.to("#langages", 5, {opacity: 1}))
        .add(TweenMax.to("#interests", 5, {opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-show-various", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    // last "page"
    tween = new TimelineMax()
        .add(TweenMax.to("#photo-moi", 5, {opacity: 1}))
        .add(TweenMax.to("#photo-profil", 5, {left: '100%', top: '30%'}))
        .add(TweenMax.to("#titleCV", 5, {left: 'auto', right: '-43vw', top: '23vh'}))
        .add(TweenMax.to("#its-me", 5, {opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: windowHeight})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    tween = new TimelineMax()
        .add(TweenMax.to("#langages", 5, {opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

    tween = new TimelineMax()
        .add(TweenMax.to("#interests", 5, {opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: 300})
        .setTween(tween)
        .addTo(controller)
        .addIndicators();

});