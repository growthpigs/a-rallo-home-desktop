// Multi-Word Letter Animation Controller with Individual Letter Timing
// Handles CHAT -> INTERACTIVE -> VIDEO -> VOICE -> RALLO sequence

class MultiWordAnimationController {
    constructor() {
        // Configuration
        this.letterPath = '/Users/rodericandrews/Obsidian/Master/_Projects/Rallo/_rallo-design/Video/OUT Letters/';

        // Animation sequences with timing (in seconds)
        this.sequences = [
            { word: 'CHAT', duration: 2.5, letters: ['C', 'H', 'A', 'T'], className: 'chat' },
            { word: 'INTERACTIVE', duration: 3.0, letters: ['I', 'N', 'T', 'E', 'R', 'A', 'C', 'T', 'I', 'V', 'E'], className: 'interactive' },
            { word: 'VIDEO', duration: 2.5, letters: ['V', 'I', 'D', 'E', 'O'], className: 'video' },
            { word: 'VOICE', duration: 2.5, letters: ['V', 'O', 'I', 'C', 'E'], className: 'voice' },
            { word: 'RALLO', duration: 3.0, letters: ['R', 'A', 'L', 'L', 'O'], className: 'rallo', useLogo: true }
        ];

        this.totalDuration = 13.5; // Total animation duration in seconds
        this.currentSequenceIndex = -1;
        this.currentTime = 0;
        this.isPlaying = false;
        this.animationFrame = null;
        this.startTime = null;

        // Letter variations - increased to 6 as requested
        this.letterVariations = 6;

        // Track each letter's current variation independently
        this.letterStates = {};

        // Track when each letter last changed
        this.lastChangeTime = {};

        // Individual letter timing
        this.minLetterDelay = 0.3; // Minimum 0.3 seconds between changes
        this.maxLetterDelay = 0.5; // Maximum 0.5 seconds between changes

        // Current word display element
        this.currentWordElement = null;

        // DOM elements
        this.wordDisplay = document.getElementById('wordDisplay');
        this.playBtn = document.getElementById('playBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.exportBtn = document.getElementById('exportBtn');
        this.currentWordDisplay = document.getElementById('currentWord');
        this.timeDisplay = document.getElementById('timeDisplay');
        this.timelineProgress = document.getElementById('timelineProgress');

        // Preloaded images cache
        this.imageCache = {};

        this.init();
    }

    init() {
        this.setupEventListeners();
        this.preloadAllImages();
        this.reset();
    }

    setupEventListeners() {
        this.playBtn.addEventListener('click', () => this.play());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.exportBtn.addEventListener('click', () => this.exportVideo());
    }

    preloadAllImages() {
        console.log('Preloading all letter images...');

        this.sequences.forEach(sequence => {
            sequence.letters.forEach(letter => {
                const letterKey = this.getLetterKey(letter, sequence.word);

                // Preload variations 1-4 (actual image files)
                for (let i = 1; i <= 4; i++) {
                    const imageName = this.getImageFileName(letterKey, i, false);
                    const img = new Image();
                    img.src = imageName;

                    const cacheKey = `${letterKey}-${i}`;
                    this.imageCache[cacheKey] = img;

                    img.onerror = () => {
                        console.warn(`Failed to load image: ${imageName}`);
                    };
                }

                // For RALLO, also preload logo versions
                if (sequence.useLogo) {
                    const logoName = this.getImageFileName(letterKey, 5, true);
                    const logoImg = new Image();
                    logoImg.src = logoName;
                    this.imageCache[`${letterKey}-logo`] = logoImg;
                }
            });
        });
    }

    getLetterKey(letter, word) {
        // Handle special cases for L in RALLO
        if (letter === 'L' && word === 'RALLO') {
            const letterIndex = word.split('').filter(l => l === 'L').indexOf(letter);
            return letterIndex === 0 ? 'L1' : 'L2';
        }
        return letter;
    }

    getImageFileName(letter, variation, useLogo = false) {
        let fileName;

        if (useLogo) {
            // Use logo versions for final RALLO
            if (letter === 'L1' || letter === 'L2') {
                fileName = `${letter.toLowerCase()}-logo.png`;
            } else {
                fileName = `${letter.toLowerCase()}-logo.png`;
            }
        } else {
            // Regular variations (only 1-4 exist as files)
            const actualVariation = ((variation - 1) % 4) + 1; // Cycle through 1-4
            const lowerLetter = letter.toLowerCase();

            // Check file naming patterns
            if (['R', 'A', 'L1', 'L2', 'O'].includes(letter)) {
                fileName = `${actualVariation}-${letter}.jpg`;
            } else {
                // For other letters like C, H, T, I, N, E, V, D
                fileName = `${actualVariation}${lowerLetter}.png`;
            }
        }

        return `assets/images/${fileName}`;
    }

    createWordDisplay(sequence) {
        // Clear previous word with fade out
        if (this.currentWordElement) {
            this.currentWordElement.classList.remove('active');
            setTimeout(() => {
                if (this.currentWordElement && this.currentWordElement.parentNode) {
                    this.currentWordElement.parentNode.removeChild(this.currentWordElement);
                }
            }, 500);
        }

        // Create container for the word
        const wordContainer = document.createElement('div');
        wordContainer.className = `word-container ${sequence.className}`;
        wordContainer.id = `word-${sequence.word}`;

        // Create letter slots
        sequence.letters.forEach((letter, index) => {
            const letterSlot = document.createElement('div');
            letterSlot.className = 'letter-slot';

            const img = document.createElement('img');
            img.className = 'letter-image';
            img.id = `letter-${sequence.word}-${index}`;

            // Initialize letter state
            const stateKey = `${sequence.word}-${index}`;
            this.letterStates[stateKey] = {
                letter: letter,
                currentVariation: 1,
                targetVariation: 1,
                lastChange: 0,
                nextChangeTime: Math.random() * (this.maxLetterDelay - this.minLetterDelay) + this.minLetterDelay
            };

            letterSlot.appendChild(img);
            wordContainer.appendChild(letterSlot);
        });

        this.wordDisplay.innerHTML = '';
        this.wordDisplay.appendChild(wordContainer);
        this.currentWordElement = wordContainer;

        // Activate with slight delay for smooth transition
        setTimeout(() => {
            wordContainer.classList.add('active');
        }, 50);

        return wordContainer;
    }

    animateLettersIndividually(sequence, sequenceTime, globalTime) {
        // Only change one letter at a time
        const letters = sequence.letters;

        // Find which letter should change next
        let letterToChange = null;
        let minNextChange = Infinity;

        letters.forEach((letter, index) => {
            const stateKey = `${sequence.word}-${index}`;
            const state = this.letterStates[stateKey];

            if (state.nextChangeTime <= sequenceTime && state.nextChangeTime < minNextChange) {
                letterToChange = index;
                minNextChange = state.nextChangeTime;
            }
        });

        // Change the selected letter
        if (letterToChange !== null) {
            const stateKey = `${sequence.word}-${letterToChange}`;
            const state = this.letterStates[stateKey];
            const img = document.getElementById(`letter-${sequence.word}-${letterToChange}`);

            if (img) {
                // Advance to next variation
                state.currentVariation = (state.currentVariation % 6) + 1; // Cycle 1-6

                // Determine which image to show
                let variation = state.currentVariation;
                let useLogo = false;

                // For RALLO, use logo on variation 6
                if (sequence.useLogo && variation === 6) {
                    useLogo = true;
                }

                // Get the letter key
                const letterKey = this.getLetterKey(state.letter, sequence.word);

                // Update image
                const imageName = this.getImageFileName(letterKey, variation, useLogo);
                img.src = imageName;

                // Add animation effect
                img.classList.remove('visible');
                setTimeout(() => {
                    img.classList.add('visible');
                }, 10);

                // Schedule next change for this letter
                state.lastChange = sequenceTime;
                state.nextChangeTime = sequenceTime + (Math.random() * (this.maxLetterDelay - this.minLetterDelay) + this.minLetterDelay);
            }
        }

        // Ensure all letters are visible
        letters.forEach((letter, index) => {
            const img = document.getElementById(`letter-${sequence.word}-${index}`);
            const stateKey = `${sequence.word}-${index}`;
            const state = this.letterStates[stateKey];

            if (img && !img.src) {
                // Initialize with first variation
                const letterKey = this.getLetterKey(letter, sequence.word);
                img.src = this.getImageFileName(letterKey, 1, false);
                img.classList.add('visible');
            }
        });

        // For final RALLO, lock to logo at the end
        if (sequence.useLogo && sequenceTime >= sequence.duration - 0.5) {
            letters.forEach((letter, index) => {
                const img = document.getElementById(`letter-${sequence.word}-${index}`);
                const letterKey = this.getLetterKey(letter, sequence.word);
                const logoSrc = this.getImageFileName(letterKey, 6, true);

                if (img && img.src !== logoSrc) {
                    img.src = logoSrc;
                    img.classList.add('visible');
                }
            });
        }
    }

    play() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        this.playBtn.disabled = true;
        this.pauseBtn.disabled = false;

        if (this.currentTime === 0) {
            this.startTime = performance.now();
        } else {
            // Resume from paused position
            this.startTime = performance.now() - (this.currentTime * 1000);
        }

        this.animate();
    }

    pause() {
        this.isPlaying = false;
        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;

        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }

    reset() {
        this.pause();

        this.currentTime = 0;
        this.currentSequenceIndex = -1;
        this.letterStates = {};
        this.lastChangeTime = {};
        this.startTime = null;
        this.currentWordElement = null;

        // Reset displays
        this.currentWordDisplay.textContent = 'Ready to Start';
        this.timeDisplay.textContent = '0.0s / 13.5s';
        this.timelineProgress.style.width = '0%';

        // Clear word display
        this.wordDisplay.innerHTML = '';

        this.playBtn.disabled = false;
        this.pauseBtn.disabled = true;
    }

    animate() {
        if (!this.isPlaying) return;

        const now = performance.now();
        this.currentTime = (now - this.startTime) / 1000; // Convert to seconds

        // Check if animation is complete
        if (this.currentTime >= this.totalDuration) {
            this.currentTime = this.totalDuration;
            this.complete();
            return;
        }

        // Determine current sequence
        let accumulatedTime = 0;
        let currentSequence = null;
        let sequenceTime = 0;

        for (let i = 0; i < this.sequences.length; i++) {
            const seq = this.sequences[i];
            if (this.currentTime >= accumulatedTime && this.currentTime < accumulatedTime + seq.duration) {
                currentSequence = seq;
                sequenceTime = this.currentTime - accumulatedTime;

                // Check if we need to switch to a new word
                if (i !== this.currentSequenceIndex) {
                    this.currentSequenceIndex = i;
                    this.createWordDisplay(currentSequence);
                    this.currentWordDisplay.textContent = `Current: ${currentSequence.word}`;
                }
                break;
            }
            accumulatedTime += seq.duration;
        }

        // Animate current sequence with individual letter timing
        if (currentSequence) {
            this.animateLettersIndividually(currentSequence, sequenceTime, this.currentTime);
        }

        // Update timeline
        this.timeDisplay.textContent = `${this.currentTime.toFixed(1)}s / ${this.totalDuration}s`;
        this.timelineProgress.style.width = `${(this.currentTime / this.totalDuration) * 100}%`;

        // Continue animation
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    complete() {
        this.pause();
        this.currentWordDisplay.textContent = 'Animation Complete';
        console.log('Animation complete!');
    }

    async renderFrame(time) {
        // Render specific frame at given time for export
        this.currentTime = time;

        let accumulatedTime = 0;
        for (let i = 0; i < this.sequences.length; i++) {
            const seq = this.sequences[i];
            if (time >= accumulatedTime && time < accumulatedTime + seq.duration) {
                const sequenceTime = time - accumulatedTime;

                if (i !== this.currentSequenceIndex) {
                    this.currentSequenceIndex = i;
                    this.createWordDisplay(seq);
                }

                this.animateLettersIndividually(seq, sequenceTime, time);
                break;
            }
            accumulatedTime += seq.duration;
        }

        // Update timeline display
        this.timeDisplay.textContent = `${time.toFixed(1)}s / 13.5s`;
        this.timelineProgress.style.width = `${(time / 13.5) * 100}%`;
    }

    async exportVideo() {
        console.log('Starting video export...');
        // Export handled by external script
        alert('Use the export script to create the video: ./create-video-v1.sh');
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes letterPop {
        0% {
            transform: scale(0.9);
            opacity: 0.7;
        }
        50% {
            transform: scale(1.05);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .letter-image {
        animation: letterPop 0.2s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize controller when page loads
window.addEventListener('DOMContentLoaded', () => {
    const controller = new MultiWordAnimationController();
    window.animationController = controller; // Make accessible for debugging
});