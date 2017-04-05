$('#btn-1').click(function () {
    TweenMax.to('.square', 1, {x: 300, ease: Bounce.easeOut});
});

$('#btn-2').click(function () {
    TweenMax.to('.square', 1, {x: '+=300', rotation: '-40deg', delay: .5});
});

$('#btn-3').click(function () {
    TweenMax.from('.square', 1, {
        x: 800, rotation: '380deg', onComplete: function () {
            TweenMax.to('.square', 1, {backgroundColor: 'red'});
        }
    });
});

$('#btn-4').click(function () {
    TweenMax.fromTo('.square', 1, {x: 500, y: 100, autoAlpha: 0}, {x: 100, y: -50, autoAlpha: 1});
});

// TweenMax.set('.square', {autoAlpha: 0});

var tl = new TimelineLite({paused: true});
tl
    .add('fadeOut')
    .to('.square', 1, {x: 500, y: 100, autoAlpha: 1, rotation: '800deg'})
    .to('.square', .5, {x: 20, y: 300, rotation: '800deg'})
    .add('test')
    .to('.square', .2, {backgroundColor: 'blue'}, 0.3)
    .to('.square', 1.2, {x: 720, y: 100, rotation: '800deg'})
    .to('.square', 1, {scaleX: 1.5, ease: Power2.easeOut})
    .to('.square', 1, {scaleX: 1, ease: Elastic.easeOut.config(1, 0.3)});

$('#btn-5').click(function () {
    tl.play()
});

$('#btn-6').click(function () {
    tl.pause()
});

$('#btn-7').click(function () {
    tl.reverse()
});

$('#btn-8').click(function () {
    tl.timeScale(2)
});

$('#btn-9').click(function () {
    tl.seek('test')
});

$('#btn-10').click(function () {
    tl.seek('test')
});

$('#btn-11').click(function () {
    new TimelineMax()
        .staggerTo('li', 0.5, {x: '+=50'}, .3)
});

$('.square').hover(function () {
        TweenMax.to(this, 1, {scaleX: 1.5, ease: Power2.easeOut})
    },
    function () {
        TweenMax.to(this, 1, {scaleX: 1, ease: Elastic.easeOut.config(1, 0.3)})
    });