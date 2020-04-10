var options = {
    opacityIn:[0,1],
    scaleIn:[0,2,1],
    scaleOut:3,
    durationIn:800,
    durationOut:600,
    delay:500,
    easing:"EaseInExpo"
};
anime.timeline({loop:false})
.add({
    targets:'.flexbox1 .div',
    opacity:options.opacityIn,
    scale:options:scaleIn,
    duration:options.durationIn
})
.add ({
    targets:'.flexbox1 .div',
    opacity:0;
    scale:options.scaleOut,
    easing:options.durationOut,
    delay:options.delay
    
})