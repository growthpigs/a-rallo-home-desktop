// Rallo Sequential Random Letter Animation Controller
class RalloSequentialAnimation {
    constructor() {
        // Configuration
        this.variationsPerLetter = 4;
        this.minDelay = 300; // Minimum 0.3 seconds between changes
        this.maxDelay = 500; // Maximum 0.5 seconds between changes
        this.isPlaying = false;
        this.isLooping = true;
        this.showingLogo = false;
        
        // Letter states - track current variation for each letter
        this.letterStates = {
            'R': { element: null, currentVariation: 0, completed: false },
            'A': { element: null, currentVariation: 0, completed: false },
            'L1': { element: null, currentVariation: 0, completed: false },
            'L2': { element: null, currentVariation: 0, completed: false },
            'O': { element: null, currentVariation: 0, completed: false }
        };
        
        // Available letters for random selection
        this.availableLetters = ['R', 'A', 'L1', 'L2', 'O'];
        
        // Animation history for replay
        this.animationSequence = [];
        this.sequenceIndex = 0;
        
        // Preloaded images
        this.preloadedImages = {
            'R': [],
            'A': [],
            'L1': [],
            'L2': [],
            'O': [],
            'logo': []
        };
        
        this.loadedCount = 0;
        this.totalImages = 25; // 20 variations + 5 logo images
        this.totalChanges = 0; // Track total number of changes made
        
        // DOM Elements
        this.lettersWrapper = document.querySelector('.letters-wrapper');
        this.finalLogo = document.getElementById('finalLogo');
        
        // Controls
        this.playBtn = document.getElementById('playBtn');
        this.pauseBtn = document.getElementById('pauseBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.frameSlider = document.getElementById('frameSlider');
        this.currentFrameDisplay = document.getElementById('currentFrame');
        this.totalFramesDisplay = document.getElementById('totalFrames');
        this.fpsControl = document.getElementById('fpsControl');
        this.durationControl = document.getElementById('durationControl');
        this.loopCheckbox = document.getElementById('loopCheckbox');
        
        // Status
        this.loadingStatus = document.getElementById('loadingStatus');
        this.loadingProgress = document.getElementById('loadingProgress');
        
        // Animation timeout
        this.animationTimeout = null;
        
        // Initialize
        this.init();
    }
    
    init() {
        // Get letter elements
        this.letterStates['R'].element = document.getElementById('img-R');
        this.letterStates['A'].element = document.getElementById('img-A');
        this.letterStates['L1'].element = document.getElementById('img-L1');
        this.letterStates['L2'].element = document.getElementById('img-L2');
        this.letterStates['O'].element = document.getElementById('img-O');
        
        // Preload all images
        this.preloadAllImages();
        
        // Set up event listeners
        this.setupEventListeners();
        
        // Update displays - we have 20 individual changes + 1 logo state
        this.totalFramesDisplay.textContent = '21';
        this.frameSlider.max = '21';
        this.updateFrameDisplay();
    }
    
    preloadAllImages() {
        this.loadingStatus.textContent = 'Loading animation assets...';
        
        // Preload letter variations
        const letterVariations = [
            { letter: 'R', files: ['1-R.jpg', '2-R.jpg', '3-R.jpg', '4-R.jpg'] },
            { letter: 'A', files: ['1-A.jpg', '2-A.jpg', '3-A.jpg', '4-A.jpg'] },
            { letter: 'L1', files: ['1-L1.jpg', '2-L1.jpg', '3-L1.jpg', '4-L1.jpg'] },
            { letter: 'L2', files: ['1-L2.jpg', '2-L2.jpg', '3-L2.jpg', '4-L2.jpg'] },
            { letter: 'O', files: ['1-O.jpg', '2-O.jpg', '3-O.jpg', '4-O.jpg'] }
        ];
        
        letterVariations.forEach(({ letter, files }) => {
            files.forEach(filename => {
                const img = new Image();
                img.onload = () => {
                    this.preloadedImages[letter].push(img);
                    this.loadedCount++;
                    this.updateLoadingProgress();
                };
                img.onerror = () => {
                    console.error(`Failed to load ${filename}`);
                    this.loadingStatus.textContent = `Error loading ${filename}`;
                };
                img.src = `assets/images/${filename}`;
            });
        });
        
        // Preload logo images
        const logoFiles = ['r-logo.png', 'a-logo.png', 'l1-logo.png', 'l2-logo.png', 'o-logo.png'];
        logoFiles.forEach(filename => {
            const img = new Image();
            img.onload = () => {
                this.preloadedImages['logo'].push(img);
                this.loadedCount++;
                this.updateLoadingProgress();
            };
            img.onerror = () => {
                console.error(`Failed to load ${filename}`);
            };
            img.src = `assets/images/${filename}`;
        });
    }
    
    updateLoadingProgress() {
        const progress = (this.loadedCount / this.totalImages) * 100;
        this.loadingProgress.style.width = `${progress}%`;
        this.loadingStatus.textContent = `Loading... (${this.loadedCount}/${this.totalImages})`;
        
        if (this.loadedCount === this.totalImages) {
            this.onImagesLoaded();
        }
    }
    
    onImagesLoaded() {
        this.loadingStatus.textContent = 'Ready to play!';
        this.playBtn.disabled = false;
        
        // Set initial images (first variation of each letter)
        this.updateAllLetters();
        
        // Generate random sequence for this animation
        this.generateAnimationSequence();
    }
    
    generateAnimationSequence() {
        // Reset sequence
        this.animationSequence = [];
        
        // Create array to track remaining changes for each letter
        const remainingChanges = {
            'R': 3, // Need 3 more changes to reach variation 4
            'A': 3,
            'L1': 3,
            'L2': 3,
            'O': 3
        };
        
        // Generate sequence of 15 random changes (3 per letter)
        while (this.animationSequence.length < 15) {
            // Get letters that still have changes remaining
            const availableLetters = Object.keys(remainingChanges).filter(
                letter => remainingChanges[letter] > 0
            );
            
            if (availableLetters.length === 0) break;
            
            // Randomly select a letter
            const randomIndex = Math.floor(Math.random() * availableLetters.length);
            const selectedLetter = availableLetters[randomIndex];
            
            // Add to sequence
            this.animationSequence.push({
                letter: selectedLetter,
                delay: this.minDelay + Math.random() * (this.maxDelay - this.minDelay)
            });
            
            // Decrement remaining changes
            remainingChanges[selectedLetter]--;
        }
        
        console.log('Generated animation sequence:', this.animationSequence);
    }
    
    setupEventListeners() {
        // Playback controls
        this.playBtn.addEventListener('click', () => this.play());
        this.pauseBtn.addEventListener('click', () => this.pause());
        this.resetBtn.addEventListener('click', () => this.reset());
        
        // Frame slider
        this.frameSlider.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            this.jumpToFrame(value);
        });
        
        // Timing controls - update delay range
        this.fpsControl.addEventListener('change', (e) => {
            const value = parseInt(e.target.value);
            // Convert FPS to delay range
            this.minDelay = Math.max(200, 1000 / value - 100);
            this.maxDelay = Math.min(800, 1000 / value + 100);
        });
        
        this.durationControl.addEventListener('change', (e) => {
            const duration = parseInt(e.target.value);
            // Adjust delays based on total duration
            const avgDelay = duration / 15; // 15 total changes
            this.minDelay = Math.max(200, avgDelay - 100);
            this.maxDelay = Math.min(800, avgDelay + 100);
        });
        
        // Loop control
        this.loopCheckbox.addEventListener('change', (e) => {
            this.isLooping = e.target.checked;
        });
    }
    
    updateLetterImage(letter) {
        const state = this.letterStates[letter];
        const preloadedImg = this.preloadedImages[letter][state.currentVariation];
        if (state.element && preloadedImg) {
            // Add active class to container
            const container = document.getElementById(`letter-${letter}`);
            if (container) {
                container.classList.add('active');
            }
            
            // Add transition effect
            state.element.style.opacity = '0';
            setTimeout(() => {
                state.element.src = preloadedImg.src;
                state.element.style.opacity = '1';
                
                // Remove active class after animation
                setTimeout(() => {
                    if (container) {
                        container.classList.remove('active');
                    }
                }, 300);
            }, 100);
        }
    }
    
    updateAllLetters() {
        Object.keys(this.letterStates).forEach(letter => {
            const state = this.letterStates[letter];
            const preloadedImg = this.preloadedImages[letter][state.currentVariation];
            if (state.element && preloadedImg) {
                state.element.src = preloadedImg.src;
            }
        });
    }
    
    showLogo() {
        // Hide letter variations with fade
        this.lettersWrapper.style.opacity = '0';
        setTimeout(() => {
            this.lettersWrapper.style.display = 'none';
            this.finalLogo.style.display = 'flex';
            // Trigger logo animation
            this.finalLogo.classList.add('animate-in');
        }, 300);
    }
    
    hideLogo() {
        this.finalLogo.classList.remove('animate-in');
        this.finalLogo.style.display = 'none';
        this.lettersWrapper.style.display = 'flex';
        this.lettersWrapper.style.opacity = '1';
    }
    
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.playBtn.classList.add('hidden');
            this.pauseBtn.classList.remove('hidden');
            
            // If we're at the end, reset first
            if (this.sequenceIndex >= this.animationSequence.length && !this.showingLogo) {
                this.reset();
            }
            
            this.animateNext();
        }
    }
    
    pause() {
        this.isPlaying = false;
        this.playBtn.classList.remove('hidden');
        this.pauseBtn.classList.add('hidden');
        
        if (this.animationTimeout) {
            clearTimeout(this.animationTimeout);
            this.animationTimeout = null;
        }
    }
    
    reset() {
        this.pause();
        
        // Reset all letter states
        Object.keys(this.letterStates).forEach(letter => {
            this.letterStates[letter].currentVariation = 0;
            this.letterStates[letter].completed = false;
        });
        
        // Reset animation state
        this.sequenceIndex = 0;
        this.totalChanges = 0;
        this.showingLogo = false;
        this.availableLetters = ['R', 'A', 'L1', 'L2', 'O'];
        
        // Hide logo and show letters
        this.hideLogo();
        
        // Update all letter images to first variation
        this.updateAllLetters();
        
        // Generate new random sequence
        this.generateAnimationSequence();
        
        this.updateFrameDisplay();
    }
    
    animateNext() {
        if (!this.isPlaying) return;
        
        if (this.sequenceIndex < this.animationSequence.length) {
            const step = this.animationSequence[this.sequenceIndex];
            const letter = step.letter;
            const state = this.letterStates[letter];
            
            // Advance this letter's variation
            state.currentVariation++;
            this.totalChanges++;
            
            // Update the letter image with transition
            this.updateLetterImage(letter);
            
            // Check if this letter is complete
            if (state.currentVariation >= this.variationsPerLetter - 1) {
                state.completed = true;
                const letterIndex = this.availableLetters.indexOf(letter);
                if (letterIndex > -1) {
                    this.availableLetters.splice(letterIndex, 1);
                }
            }
            
            // Update display
            this.updateFrameDisplay();
            
            // Move to next step
            this.sequenceIndex++;
            
            // Schedule next animation
            this.animationTimeout = setTimeout(() => {
                this.animateNext();
            }, step.delay);
            
        } else if (!this.showingLogo) {
            // All variations complete, show logo
            this.showingLogo = true;
            this.showLogo();
            this.updateFrameDisplay();
            
            // Hold logo for 2 seconds
            this.animationTimeout = setTimeout(() => {
                if (this.isPlaying) {
                    if (this.isLooping) {
                        this.reset();
                        this.play();
                    } else {
                        this.pause();
                    }
                }
            }, 2000);
        }
    }
    
    jumpToFrame(frameNumber) {
        this.pause();
        
        if (frameNumber <= 20) {
            // Jump to specific point in sequence
            this.reset();
            
            // Fast-forward through sequence without delays
            for (let i = 0; i < frameNumber - 1 && i < this.animationSequence.length; i++) {
                const step = this.animationSequence[i];
                const state = this.letterStates[step.letter];
                state.currentVariation++;
                this.totalChanges++;
            }
            
            this.sequenceIndex = frameNumber - 1;
            this.updateAllLetters();
            this.hideLogo();
        } else {
            // Show logo
            this.showingLogo = true;
            this.showLogo();
        }
        
        this.updateFrameDisplay();
    }
    
    updateFrameDisplay() {
        let displayFrame = this.showingLogo ? 21 : this.totalChanges + 1;
        this.currentFrameDisplay.textContent = displayFrame;
        this.frameSlider.value = displayFrame;
    }
}

// Initialize the player when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.ralloAnimation = new RalloSequentialAnimation();
});