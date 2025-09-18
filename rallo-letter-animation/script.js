// Rallo Sequential Random Letter Animation Controller
class RalloSequentialAnimation {
    constructor() {
        // Configuration
        this.variationsPerLetter = 5; // 4 style variations + 1 orange logo
        this.minDelay = 170; // Minimum 0.17 seconds between changes (50% faster total)
        this.maxDelay = 270; // Maximum 0.27 seconds between changes (50% faster total)
        this.isPlaying = false;
        this.isLooping = true;
        this.showingLogo = false;
        this.performingKerning = false;
        
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
        
        // Update displays - we have 20 individual changes + 1 kerning + 1 final logo state
        this.totalFramesDisplay.textContent = '22';
        this.frameSlider.max = '22';
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
                img.src = `assets/images/${filename}?v=${Date.now()}`;
            });
        });
        
        // Preload logo images (using clean transparent versions)
        const logoFiles = ['r-logo-clean.png', 'a-logo-clean.png', 'l1-logo-clean4.png', 'l2-logo-clean2.png', 'o-logo-clean.png'];
        console.log('🔍 DEBUG: Loading logo files:', logoFiles);
        logoFiles.forEach(filename => {
            const img = new Image();
            img.onload = () => {
                console.log(`✅ Successfully loaded: ${filename}`, `Full path: ${img.src}`);
                this.preloadedImages['logo'].push(img);
                this.loadedCount++;
                this.updateLoadingProgress();
            };
            img.onerror = () => {
                console.error(`❌ Failed to load ${filename}`);
                console.error(`   Attempted path: assets/images/${filename}`);
            };
            img.src = `assets/images/${filename}?v=${Date.now()}`;
            console.log(`🔄 Attempting to load: ${filename} from assets/images/${filename}`);
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
        
        console.log('📦 All images loaded. Checking preloaded images:');
        console.log('   Logo images:', this.preloadedImages['logo'].length, 'images');
        console.log('   Logo image paths:', this.preloadedImages['logo'].map(img => img.src));
        
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
            'R': 4, // Need 4 more changes to reach variation 5 (orange)
            'A': 4,
            'L1': 4,
            'L2': 4,
            'O': 4
        };
        
        // Generate sequence of 20 random changes (4 per letter to reach 5th variation)
        while (this.animationSequence.length < 20) {
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
        let imageToUse;
        
        console.log(`🎨 Updating letter ${letter} to variation ${state.currentVariation}`);
        
        // If we're at the 5th variation (index 4), use orange logo
        if (state.currentVariation === 4) {
            console.log(`🟠 Letter ${letter} should use orange logo`);
            console.log(`   Looking for: ${letter.toLowerCase()}-logo-clean.png`);
            console.log(`   Available logo images:`, this.preloadedImages['logo'].map(img => img.src));
            
            // Use clean4 for L1, clean2 for L2, clean for others
            let filename;
            if (letter === 'L1') {
                filename = 'l1-logo-clean4.png';
            } else if (letter === 'L2') {
                filename = 'l2-logo-clean2.png';
            } else {
                filename = `${letter.toLowerCase()}-logo-clean.png`;
            }
            
            imageToUse = this.preloadedImages['logo'].find(img => 
                img.src.includes(filename)
            );
            
            if (imageToUse) {
                console.log(`✅ Found logo image for ${letter}: ${imageToUse.src}`);
            } else {
                console.error(`❌ Could not find logo image for ${letter}`);
                console.error(`   Searched for: ${letter.toLowerCase()}-logo-clean.png`);
            }
        } else {
            // Use regular style variations (indices 0-3)
            imageToUse = this.preloadedImages[letter][state.currentVariation];
            console.log(`📝 Using style variation ${state.currentVariation} for ${letter}`);
        }
        
        if (state.element && imageToUse) {
            // Add active class to container
            const container = document.getElementById(`letter-${letter}`);
            if (container) {
                container.classList.add('active');
                // Log computed styles to check for backgrounds
                const computedStyle = window.getComputedStyle(container);
                console.log(`🎭 Container ${letter} background:`, computedStyle.backgroundColor, computedStyle.backgroundImage);
            }
            
            // Direct replacement (no fade for consistency)
            console.log(`🔄 Setting src for ${letter} to:`, imageToUse.src);
            state.element.src = imageToUse.src;
            
            // Check image element styles
            const imgComputedStyle = window.getComputedStyle(state.element);
            console.log(`🎭 Image ${letter} background:`, imgComputedStyle.backgroundColor, imgComputedStyle.backgroundImage);
            
            // Remove active class after animation
            setTimeout(() => {
                if (container) {
                    container.classList.remove('active');
                }
            }, 300);
        }
    }
    
    updateAllLetters() {
        Object.keys(this.letterStates).forEach(letter => {
            const state = this.letterStates[letter];
            let imageToUse;
            
            // If we're at the 5th variation (index 4), use orange logo
            if (state.currentVariation === 4) {
                imageToUse = this.preloadedImages['logo'].find(img => 
                    img.src.includes(`${letter.toLowerCase()}-logo-clean.png`)
                );
            } else {
                // Use regular style variations (indices 0-3)
                imageToUse = this.preloadedImages[letter][state.currentVariation];
            }
            
            if (state.element && imageToUse) {
                state.element.src = imageToUse.src;
            }
        });
    }
    
    startKerningAnimation() {
        // Start kerning animation - slide letters together to match reference logo
        this.performingKerning = true;
        this.updateFrameDisplay();
        
        // Apply ultra-tight kerning based on reference logo (letters practically overlapping)
        this.lettersWrapper.style.transition = 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)';
        this.lettersWrapper.style.gap = '0px'; // No gap - letters overlap
        
        // Perfect kerning with typography logic - letters touching but not overlapping
        const containers = document.querySelectorAll('.letter-container');
        containers.forEach((container, index) => {
            container.style.transition = 'all 1.2s cubic-bezier(0.25, 0.1, 0.25, 1)';
            // TYPOGRAPHY LOGIC: Double L's tightest (vertical strokes), others close but respect shapes
            if (index === 1) { // A letter - middle ground between touching and current
                container.style.marginLeft = '-102px'; // Sweet spot kerning
                console.log(`📏 Kerning A: -102px (perfect balance)`);
            } else if (index === 2) { // First L - tiny bit closer to A
                container.style.marginLeft = '-103px'; // Slightly tighter to A
                console.log(`📏 Kerning L1: -103px (slightly tighter to A)`);
            } else if (index === 3) { // Second L - 4/7 of L width between them
                container.style.marginLeft = '-137px'; // 4/7 L width gap (about 103px space)
                console.log(`📏 Kerning L2: -137px (4/7 of L width gap)`);
            } else if (index === 4) { // O letter - closer to L
                container.style.marginLeft = '-100px'; // O closer to L
                console.log(`📏 Kerning O: -100px (closer to L)`);
            }
        });
        
        // Hold kerned logo for 2 seconds
        this.animationTimeout = setTimeout(() => {
            this.showingLogo = true;
            this.performingKerning = false;
            this.updateFrameDisplay();
            
            // Hold final logo state
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
        }, 1200); // 1.2 second kerning animation duration
    }
    
    resetLetterSpacing() {
        // Reset kerning back to normal spacing (still tight but not as extreme)
        this.lettersWrapper.style.transition = 'none';
        this.lettersWrapper.style.gap = '0px'; // No gap even in normal state
        this.lettersWrapper.style.transform = 'scale(1)';
        
        // Reset individual letter margins to default spacing
        const containers = document.querySelectorAll('.letter-container');
        containers.forEach((container, index) => {
            container.style.transition = 'none';
            // Default state with natural spacing for animation start
            if (index === 1) { // A letter - loose kerning with R
                container.style.marginLeft = '-8px'; // Loose default for animation contrast
            } else if (index === 2) { // First L - loose kerning with A
                container.style.marginLeft = '-6px'; // Loose default for animation contrast
            } else if (index === 3) { // Second L - loose kerning with first L
                container.style.marginLeft = '-7px'; // Loose default for animation contrast
            } else if (index === 4) { // O letter - loose kerning with second L
                container.style.marginLeft = '-8px'; // Loose default for animation contrast
            } else {
                container.style.marginLeft = '0px';
            }
        });
        
        this.performingKerning = false;
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
        
        // Reset letter spacing
        this.resetLetterSpacing();
        
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
            
            // Check if this letter reached orange (5th variation)
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
            
        } else if (!this.showingLogo && !this.performingKerning) {
            // All letters are now orange, start kerning animation
            this.startKerningAnimation();
        }
    }
    
    jumpToFrame(frameNumber) {
        this.pause();
        
        if (frameNumber <= 20) {
            // Jump to specific point in sequence (individual letter changes)
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
            this.resetLetterSpacing();
        } else if (frameNumber === 21) {
            // Show kerning animation
            this.performingKerning = true;
            this.showingLogo = false;
            // Ensure all letters are at orange (variation 4)
            Object.keys(this.letterStates).forEach(letter => {
                this.letterStates[letter].currentVariation = 4;
            });
            this.updateAllLetters();
            this.startKerningAnimation();
        } else {
            // Show final logo state
            this.showingLogo = true;
            this.performingKerning = false;
            // Ensure all letters are at orange with tight kerning
            Object.keys(this.letterStates).forEach(letter => {
                this.letterStates[letter].currentVariation = 4;
            });
            this.updateAllLetters();
            // Apply final kerning state - extremely tight like reference logo
            this.lettersWrapper.style.gap = '0px';
            const containers = document.querySelectorAll('.letter-container');
            containers.forEach((container, index) => {
                // Perfect final logo kerning - typography logic applied
                if (index === 1) { // A letter - closer to R, almost touching
                    container.style.marginLeft = '-70px'; // Much tighter spacing for A
                } else if (index === 2) { // First L - closer to A
                    container.style.marginLeft = '-75px'; // Much tighter for first L
                } else if (index === 3) { // Second L - MAXIMUM tight (double vertical strokes)
                    container.style.marginLeft = '-85px'; // Very tight for double L's
                } else if (index === 4) { // O letter - closer to L2
                    container.style.marginLeft = '-72px'; // Much tighter for O
                }
            });
        }
        
        this.updateFrameDisplay();
    }
    
    updateFrameDisplay() {
        let displayFrame;
        if (this.showingLogo) {
            displayFrame = 22; // Final logo state
        } else if (this.performingKerning) {
            displayFrame = 21; // Kerning animation
        } else {
            displayFrame = this.totalChanges + 1; // Individual letter changes (1-20)
        }
        this.currentFrameDisplay.textContent = displayFrame;
        this.frameSlider.value = displayFrame;
    }
}

// Initialize the player when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing RALLO Animation System V3.1 - Refined L-L (4/7 width)');
    console.log('🔍 Debugging background and kerning issues');
    
    // Set version timestamp
    const timestampElement = document.getElementById('versionTimestamp');
    if (timestampElement) {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { 
            hour12: true, 
            hour: 'numeric', 
            minute: '2-digit' 
        });
        const dateString = now.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        });
        timestampElement.textContent = `${timeString} • ${dateString}`;
    }
    
    // Check if clean PNG files exist
    console.log('🔍 Verifying clean PNG files exist...');
    const testImg = new Image();
    testImg.onload = () => console.log('✅ Clean PNG files are accessible');
    testImg.onerror = () => console.error('❌ Clean PNG files not found in assets/images/');
    testImg.src = 'assets/images/r-logo-clean.png';
    
    window.ralloAnimation = new RalloSequentialAnimation();
});