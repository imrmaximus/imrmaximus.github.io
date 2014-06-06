var windowHeight = $(document).height();
var windowWidth = $(document).width();

$(document).ready(function() {

    initiatePosition();
    
    var controller = new ScrollMagic();

	// build scene
    var scene = new ScrollScene({triggerElement: "#marker-debut", duration: windowHeight*6})
        .setPin("#main-scroll")
        .addTo(controller);

    var tween = new TimelineMax()
        .add(TweenMax.fromTo("#pres-contact", 20, {top: -300}, {top: '30vh', ease: Back.easeInOut}))
        .add(TweenMax.to("#photo-profil", 5, {left: 100}))
        .add(TweenMax.to("#contacts", 5, {left: -150, opacity: 1}))
        .add(TweenMax.to("#title-CV", 5, {opacity: 1}))
        .add(TweenMax.to("#its-me", 5, {opacity: 0}))
        .add(TweenMax.to("#its-me", 5, {left: 400, top: 5}));

    scene = new ScrollScene({triggerElement: "#marker-debut", duration: 500})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#contacts", 5, {left: -500, opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-contact-away", duration: 300})
        .setTween(tween)
        .addTo(controller);

    tween = TweenMax.to("#photo-arbre-ciel", 5, {top: -1000});

    scene = new ScrollScene({triggerElement: "#marker-technicals", duration: 500})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#photo-profil", 5, {top: -150}))
        .add(TweenMax.to("#photo-profil", 5, {left: '120%'}))
        .add(TweenMax.fromTo("#technicals", 5, {left: -500, opacity: 0}, {left: -60, opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-technicals", duration: 500})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#technicals", 5, {opacity: 0}))
        .add(TweenMax.to("#photo-haunted-mansion", 5, {left: '-100%'}))
        .add(TweenMax.to("#professional-history", 5, {css:{zIndex: 53}}));

    scene = new ScrollScene({triggerElement: "#marker-history", duration: 500})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#photo-profil", 5, {top: 0}))
        .add(TweenMax.to("#title-CV", 5, {left: '30%'}));

    scene = new ScrollScene({triggerElement: "#marker-history", duration: 300})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#photo-dune", 1, {css:{zIndex: 54}}))
        .add(TweenMax.fromTo("#photo-dune", 5, {top: 1000}, {top: 0}))
        .add(TweenMax.to("#training", 5, {opacity: 1}))
        .add(TweenMax.to("#professional-history", 5, {css:{zIndex: 1}}))
        .add(TweenMax.to("#photo-beach", 5, {css:{zIndex: 48}}));

    scene = new ScrollScene({triggerElement: "#marker-training", duration: 300})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#training", 5, {opacity: 0}))
        .add(TweenMax.fromTo("#photo-dune", 5, {top: 0}, {top: 1000}))
        .add(TweenMax.to("#photo-profil", 5, {left: -300}))
        .add(TweenMax.to("#title-CV", 5, {left: -270}))
        .add(TweenMax.to("#langages", 5, {opacity: 1}))
        .add(TweenMax.to("#interests", 5, {opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-show-various", duration: 300})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#photo-moi", 5, {opacity: 1}))
        .add(TweenMax.to("#photo-profil", 5, {left: '100%', top: '40%'}))
        .add(TweenMax.to("#title-CV", 5, {left: 250, top: 180}))
        .add(TweenMax.to("#its-me", 5, {opacity: 1}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: windowHeight})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#langages", 5, {opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: 300})
        .setTween(tween)
        .addTo(controller);

    tween = new TimelineMax()
        .add(TweenMax.to("#interests", 5, {opacity: 0}));

    scene = new ScrollScene({triggerElement: "#marker-et-voila", duration: 300})
        .setTween(tween)
        .addTo(controller);

});

function initiatePosition() {
    $("#wrapper").css({
        'height': windowHeight * 1.5
    });
    
    console.log("windowHeight : " + windowHeight);
    console.log("$('body').height() : " + $("body").height());
    console.log("$('#pres-contact').height() : " + $("#pres-contact").height());
    console.log("$('#pres-contact').width() : " + $('#pres-contact').width());
    console.log("$('#pres-contact').top() : " + $("#pres-contact").css('top'));
    /*$("#pres-contact").css({
        'top': (windowHeight - $("#photo-img").height())/2,
        'left': (windowWidth - $("#photo-img").width())/2
    });*/
    console.log("$('#pres-contact').top() : " + $("#pres-contact").css('top'));
    console.log("$('#pres-contact').left() : " + $('#pres-contact').css('left'));
}