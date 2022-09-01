// Timer

class Timer { 
    constructor(durationInput, startButton, pauseButton, callbacks) { 
        this.durationInput = durationInput;
        this.startButton   = startButton; 
        this.pauseButton   = pauseButton;

        if (callbacks) {
            this.onStart    = callbacks.onStart;
            this.onTick     = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        console.log('DEBUG: Timer started.'); 

        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }

        this.tick(); 
        this.intervalId = setInterval(this.tick, 20);
    }  
    
    tick = () => {
        console.log('DEBUG: tick'); 

        if (this.timeRemaining <= 0) {
            this.pause();
            if (this.onComplete) { 
                this.onComplete();
            }
        } else {
            this.timeRemaining = this.timeRemaining - 0.02; 
            if (this.onTick) { 
                if (this.timeRemaining <= 0) {
                    this.timeRemaining = 0; 
                }
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }
    
    pause = () => {
        console.log('DEBUG: Timer paused.'); 

        clearInterval(this.intervalId);
    } 
}
