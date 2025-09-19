// Multi-Word Letter Animation Controller V2 with Proper Timing
// Each word gets proper time to cycle through all 4 variations

class MultiWordAnimationController {
    constructor() {
        // Configuration
        this.letterPath = 'assets/images/';

        // Animation sequences with longer timing
        this.sequences = [
            { word: 'CHAT', duration: 4.0, letters: ['C', 'H', 'A', 'T'], className: 'chat' },
            { word: 'INTERACTIVE', duration: 6.0, letters: ['I', 'N', 'T', 'E', 'R', 'A', 'C', 'T', 'I', 'V', 'E'], className: 'interactive' },
            { word: 'VIDEO', duration: 4.0, letters: ['V', 'I', 'D', 'E', 'O'], className: 'video' },
            { word: 'VOICE', duration: 4.0, letters: ['V', 'O', 'I', 'C', 'E'], className: 'voice' },
            { word: 'RALLO', duration: 4.0, letters: ['R', 'A', 'L', 'L', 'O'], className: 'rallo', useLogo: true }
        ];

        this.totalDuration = 22.0; // Total animation duration increased
        this.currentSequenceIndex = -1;
        this.currentTime = 0;
        this.isPlaying = false;
        this.animationFrame = null;
        this.startTime = null;

        // Only 4 variations exist in files
        this.letterVariations = 4;

        // Track each letter's state
        this.letterStates = {};

        // Slower letter timing for better visibility
        this.minLetterDelay = 0.4; // Increased from 0.3
        this.maxLetterDelay = 0.6; // Increased from 0.5

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
            sequence.letters.forEach((letter, index) => {
                const letterKey = this.getLetterKey(letter, sequence.word, index);

                // Preload variations 1-4
                for (let i = 1; i <= 4; i++) {
                    const imageName = this.getImageFileName(letterKey, i, false);
                    const img = new Image();
                    img.src = imageName;

                    const cacheKey = `${letterKey}-${i}`;
                    this.imageCache[cacheKey] = img;

                    img.onload = () => {
                        console.log(`✓ Loaded: ${imageName}`);
                    };

                    img.onerror = () => {
                        console.warn(`✗ Failed to load: ${imageName}`);
                        // Try alternative naming
                        const altName = this.getAlternateFileName(letterKey, i);
                        if (altName) {
                            const altImg = new Image();
                            altImg.src = altName;
                            this.imageCache[cacheKey] = altImg;
                            console.log(`Trying alternate: ${altName}`);
                        }
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

    getLetterKey(letter, word, index) {
        // Handle special cases for L in RALLO
        if (letter === 'L' && word === 'RALLO') {
            // First L is at index 2, second L is at index 3
            return index === 2 ? 'L1' : 'L2';
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
            const lowerLetter = letter.toLowerCase();

            // Check file naming patterns
            if (['R', 'A', 'L1', 'L2', 'O'].includes(letter)) {
                fileName = `${variation}-${letter}.jpg`;
            } else {
                // For other letters like C, H, T, I, N, E, V, D
                fileName = `${variation}${lowerLetter}.png`;
            }
        }

        return `${this.letterPath}${fileName}`;
    }

    getAlternateFileName(letter, variation) {
        // Try alternate naming conventions
        const lowerLetter = letter.toLowerCase();

        // Try without hyphen for RALLO letters
        if (['R', 'A', 'L1', 'L2', 'O'].includes(letter)) {
            return `${this.letterPath}${variation}${lowerLetter}.png`;
        }

        // Try with hyphen for other letters
        return `${this.letterPath}${variation}-${letter}.png`;
    }

    createWordDisplay(sequence) {
        // Clear previous word with fade out
        if (this.currentWordElement) {
            this.currentWordElement.classList.remove('active');
            setTimeout(() => {
                if (this.currentWordElement && this.currentWordElement.parentNode) {
                    this.currentWordElement.parentNode.removeChild(this.currentWordElement);
                }
            }, 300);
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
            const letterKey = this.getLetterKey(letter, sequence.word, index);

            this.letterStates[stateKey] = {
                letter: letter,
                letterKey: letterKey,
                currentVariation: 1,
                lastChange: 0,
                nextChangeTime: index * 0.1 + Math.random() * 0.2 // Stagger initial changes
            };

            // Set initial image
            img.src = this.getImageFileName(letterKey, 1, false);
            img.classList.add('visible');

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

    animateLettersIndividually(sequence, sequenceTime) {
        const letters = sequence.letters;

        // Calculate how many changes we want per letter
        const changesPerLetter = 4; // Cycle through all 4 variations
        const timePerCycle = sequence.duration / changesPerLetter;

        // Find which letter should change next
        letters.forEach((letter, index) => {
            const stateKey = `${sequence.word}-${index}`;
            const state = this.letterStates[stateKey];

            // Check if it's time for this letter to change
            if (sequenceTime >= state.nextChangeTime) {
                const img = document.getElementById(`letter-${sequence.word}-${index}`);

                if (img) {
                    // Advance to next variation
                    state.currentVariation = (state.currentVariation % 4) + 1;

                    // Update image
                    const imageName = this.getImageFileName(state.letterKey, state.currentVariation, false);

                    // Smooth transition
                    img.style.opacity = '0.7';
                    setTimeout(() => {
                        img.src = imageName;
                        img.style.opacity = '1';
                    }, 50);

                    // Schedule next change
                    state.nextChangeTime = sequenceTime + this.minLetterDelay + Math.random() * (this.maxLetterDelay - this.minLetterDelay);
                }
            }
        });

        // For final RALLO, lock to logo at the end
        if (sequence.useLogo && sequenceTime >= sequence.duration - 1.0) {
            letters.forEach((letter, index) => {
                const img = document.getElementById(`letter-${sequence.word}-${index}`);
                const state = this.letterStates[`${sequence.word}-${index}`];
                const logoSrc = this.getImageFileName(state.letterKey, 5, true);

                if (img && !img.src.includes('-logo')) {
                    img.style.opacity = '0.7';
                    setTimeout(() => {
                        img.src = logoSrc;
                        img.style.opacity = '1';
                    }, 50);
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
        this.startTime = null;
        this.currentWordElement = null;

        // Reset displays
        this.currentWordDisplay.textContent = 'Ready to Start';
        this.timeDisplay.textContent = `0.0s / ${this.totalDuration}s`;
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
                    console.log(`Showing: ${currentSequence.word}`);
                }
                break;
            }
            accumulatedTime += seq.duration;
        }

        // Animate current sequence with individual letter timing
        if (currentSequence) {
            this.animateLettersIndividually(currentSequence, sequenceTime);
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

                this.animateLettersIndividually(seq, sequenceTime);
                break;
            }
            accumulatedTime += seq.duration;
        }

        // Update timeline display
        this.timeDisplay.textContent = `${time.toFixed(1)}s / ${this.totalDuration}s`;
        this.timelineProgress.style.width = `${(time / this.totalDuration) * 100}%`;
    }

    async exportVideo() {
        console.log('Starting video export...');
        alert('Animation ready for screen recording. Total duration: 22 seconds');
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes letterChange {
        0% {
            transform: scale(0.95);
            opacity: 0.8;
        }
        50% {
            transform: scale(1.02);
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .letter-image {
        transition: opacity 0.2s ease;
    }

    .letter-image.changing {
        animation: letterChange 0.3s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize controller when page loads
window.addEventListener('DOMContentLoaded', () => {
    const controller = new MultiWordAnimationController();
    window.animationController = controller; // Make accessible for debugging
});