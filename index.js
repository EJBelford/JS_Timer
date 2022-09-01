const durationInput = document.querySelector('#duration');
const startButton   = document.querySelector('#start');
const pauseButton   = document.querySelector('#pause');

const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.group('DEBUG: onStart called.');
        duration = totalDuration;
    },
    onTick(timeRemaining) {
//        console.group('DEBUG: onTick called.');
        circle.setAttribute(
            'stroke-dashoffset', 
            (perimeter * timeRemaining) / duration - perimeter
        ); 
    },
    onComplete() {
        console.group('DEBUG: onComplete called.');
    }
});
