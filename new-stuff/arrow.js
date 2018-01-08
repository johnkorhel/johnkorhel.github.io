$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['section1', 'section2'],
        navigation: true
    });
    var typed = new Typed('#typed-1', {
        stringsElement: '#typed-text-1',
        typeSpeed: 40,
        backSpeed: 10,
        startDelay: 1000,
        backDelay: 1500,
    });
    particlesJS.load('particles-js', 'particles.json');
});

new WOW().init();