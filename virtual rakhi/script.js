// Global state
let brotherName = '';
let selectedTilak = null;
let selectedRakhi = null;
let uploadedPhotoURL = null;

// Audio management
const bgMusic = document.getElementById('bgMusic');
const audioToggle = document.getElementById('audioToggle');
let isMusicPlaying = false;

audioToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        bgMusic.pause();
        audioToggle.classList.add('muted');
        isMusicPlaying = false;
    } else {
        bgMusic.play().catch(e => console.log('Audio play failed:', e));
        audioToggle.classList.remove('muted');
        isMusicPlaying = true;
    }
});

// Photo Upload Handling
const photoInput = document.getElementById('photoInput');
const photoPreview = document.getElementById('photoPreview');
const uploadedPhoto = document.getElementById('uploadedPhoto');
const photoUploadBox = document.getElementById('photoUploadBox');
const removePhotoBtn = document.getElementById('removePhoto');

photoInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
            uploadedPhotoURL = event.target.result;
            uploadedPhoto.src = uploadedPhotoURL;
            photoPreview.style.display = 'flex';
            photoUploadBox.querySelector('.upload-label').style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

removePhotoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    uploadedPhotoURL = null;
    photoInput.value = '';
    photoPreview.style.display = 'none';
    photoUploadBox.querySelector('.upload-label').style.display = 'flex';
});

// Update photos in all screens
function updateBrotherPhotos() {
    if (uploadedPhotoURL) {
        // Update all photo frames with uploaded photo
        document.getElementById('brotherPhoto1').src = uploadedPhotoURL;
        document.getElementById('brotherPhoto1').style.display = 'block';
        document.getElementById('brotherInitial').style.display = 'none';
        
        const brotherPhoto2 = document.getElementById('brotherPhoto2');
        if (brotherPhoto2) {
            brotherPhoto2.src = uploadedPhotoURL;
            brotherPhoto2.style.display = 'block';
            document.getElementById('brotherInitial2').style.display = 'none';
        }
        
        const brotherPhoto3 = document.getElementById('brotherPhoto3');
        if (brotherPhoto3) {
            brotherPhoto3.src = uploadedPhotoURL;
            brotherPhoto3.style.display = 'block';
            document.getElementById('brotherInitial3').style.display = 'none';
        }
    }
}

// Particle effect
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = (5 + Math.random() * 5) + 's';
            particle.style.animationDelay = Math.random() * 2 + 's';
            particlesContainer.appendChild(particle);
        }, i * 200);
    }
}

// Screen transition
function switchScreen(fromId, toId, delay = 0) {
    setTimeout(() => {
        const fromScreen = document.getElementById(fromId);
        const toScreen = document.getElementById(toId);
        
        if (fromScreen) {
            fromScreen.classList.remove('active');
        }
        
        if (toScreen) {
            toScreen.classList.add('active');
        }
    }, delay);
}

// Sparkle effect
function createSparkles(x, y, count = 8) {
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        
        const angle = (Math.PI * 2 * i) / count;
        const distance = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// Welcome Screen
document.getElementById('submitName').addEventListener('click', () => {
    const nameInput = document.getElementById('brotherNameInput');
    brotherName = nameInput.value.trim();
    
    if (brotherName === '') {
        nameInput.style.border = '2px solid #ff4444';
        setTimeout(() => {
            nameInput.style.border = '2px solid var(--warm-gold)';
        }, 500);
        return;
    }
    
    // Hide input, show message
    document.getElementById('nameInputContainer').style.display = 'none';
    document.getElementById('welcomeMessage').style.display = 'block';
    
    const message = `Hello my dearest ${brotherName}! Even though miles separate us today, our bond is unbreakable. Shall we celebrate our Rakhi ceremony together?`;
    document.getElementById('sisterMessage').textContent = message;
    
    // Update brother's name in other screens
    updateBrotherName();
});

function updateBrotherName() {
    const initial = brotherName.charAt(0).toUpperCase();
    document.getElementById('brotherInitial').textContent = initial;
    document.getElementById('brotherInitial2').textContent = initial;
    document.getElementById('brotherInitial3').textContent = initial;
    document.getElementById('brotherNameInHug').textContent = brotherName;
    document.getElementById('brotherNameInLetter').textContent = brotherName;
    
    // Update photos if uploaded
    updateBrotherPhotos();
}

// Check URL parameters for name
window.addEventListener('load', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    
    if (nameParam) {
        brotherName = nameParam;
        document.getElementById('brotherNameInput').value = nameParam;
    }
    
    createParticles();
});

// Yes button - proceed to ceremony
document.getElementById('yesBtn').addEventListener('click', () => {
    switchScreen('welcomeScreen', 'tilakScreen', 0);
});

// No button - playful redirect
document.getElementById('noBtn').addEventListener('click', () => {
    const message = `No isn't an option when it comes to your sister! Come on ${brotherName}, let's tie your Rakhi! 💕`;
    document.getElementById('sisterMessage').textContent = message;
    
    // Hide No button temporarily
    const noBtn = document.getElementById('noBtn');
    noBtn.style.opacity = '0.5';
    noBtn.style.pointerEvents = 'none';
    
    setTimeout(() => {
        noBtn.style.opacity = '1';
        noBtn.style.pointerEvents = 'auto';
    }, 3000);
});

// Tilak Ceremony
const tilakOptions = document.querySelectorAll('.tilak-option');
tilakOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove previous selection
        tilakOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Select current
        this.classList.add('selected');
        selectedTilak = this.dataset.tilak;
        
        // Animate hand applying tilak
        const hand = document.getElementById('tilakHand');
        hand.classList.add('animating');
        
        setTimeout(() => {
            // Apply tilak mark
            const tilakMark = document.getElementById('tilakMark');
            tilakMark.className = 'tilak-mark applied';
            
            if (selectedTilak === 'kumkum') {
                tilakMark.style.background = 'radial-gradient(circle, #DC143C 30%, #8B0000 100%)';
            } else if (selectedTilak === 'chandan') {
                tilakMark.style.background = 'linear-gradient(180deg, #F5DEB3 50%, #DC143C 50%)';
            } else if (selectedTilak === 'trishul') {
                tilakMark.innerHTML = '🔱';
                tilakMark.style.background = 'transparent';
                tilakMark.style.fontSize = '24px';
            }
            
            // Show caption
            const caption = document.getElementById('tilakCaption');
            caption.textContent = 'Applying the sacred tilak for your long life, prosperity, and endless happiness.';
            caption.style.opacity = '1';
            
            hand.classList.remove('animating');
            
            // Move to next screen
            setTimeout(() => {
                switchScreen('tilakScreen', 'aartiScreen', 0);
            }, 3000);
        }, 1000);
    });
});

// Aarti Ceremony
document.getElementById('performAarti').addEventListener('click', function() {
    this.disabled = true;
    this.style.opacity = '0.5';
    
    const thali = document.getElementById('aartiThali');
    const glow = document.getElementById('aartiGlow');
    
    // Rotate thali and show glow
    thali.classList.add('rotating');
    glow.classList.add('active');
    
    // Show caption
    setTimeout(() => {
        const caption = document.getElementById('aartiCaption');
        caption.textContent = 'Circling the divine light to protect you from all obstacles and illuminate your path.';
        caption.style.opacity = '1';
    }, 1000);
    
    // Move to next screen
    setTimeout(() => {
        thali.classList.remove('rotating');
        glow.classList.remove('active');
        switchScreen('aartiScreen', 'rakhiScreen', 0);
    }, 3500);
});

// Rakhi Selection
const rakhiOptions = document.querySelectorAll('.rakhi-option');
rakhiOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Remove previous selection
        rakhiOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Select current
        this.classList.add('selected');
        selectedRakhi = this.dataset.rakhi;
        
        // Show wrist and tie rakhi
        setTimeout(() => {
            document.getElementById('wristContainer').style.display = 'block';
            
            const rakhiTying = document.getElementById('rakhiTying');
            rakhiTying.className = 'rakhi-tying';
            
            // Apply rakhi style
            if (selectedRakhi === 'zari') {
                rakhiTying.style.background = 'radial-gradient(circle, var(--bright-gold) 0%, var(--warm-gold) 50%, var(--primary-maroon) 100%)';
            } else if (selectedRakhi === 'rudraksha') {
                rakhiTying.style.background = 'radial-gradient(circle, #8B4513 0%, #654321 100%)';
            } else if (selectedRakhi === 'gold') {
                rakhiTying.style.background = 'radial-gradient(circle, var(--bright-gold) 0%, #FFA500 100%)';
            } else if (selectedRakhi === 'floral') {
                rakhiTying.style.background = 'radial-gradient(circle, #FF69B4 0%, #FF1493 50%, #C71585 100%)';
            }
            
            rakhiTying.style.boxShadow = '0 0 30px rgba(212, 175, 55, 0.8)';
            
            // Show caption
            setTimeout(() => {
                const caption = document.getElementById('rakhiCaption');
                caption.textContent = 'Tying this sacred thread of eternal love, trust, and sisterly protection around your wrist.';
                caption.style.opacity = '1';
                
                // Create sparkles
                const rect = rakhiTying.getBoundingClientRect();
                createSparkles(rect.left + rect.width / 2, rect.top + rect.height / 2, 12);
            }, 1000);
            
            // Move to next screen
            setTimeout(() => {
                switchScreen('rakhiScreen', 'sweetScreen', 0);
            }, 4000);
        }, 500);
    });
});

// Sweet Feeding
const sweetOptions = document.querySelectorAll('.sweet-option');
sweetOptions.forEach(option => {
    option.addEventListener('click', function() {
        // Disable all options
        sweetOptions.forEach(opt => {
            opt.style.pointerEvents = 'none';
            opt.style.opacity = '0.5';
        });
        
        const sweetType = this.dataset.sweet;
        const sweetEmoji = this.querySelector('.sweet-preview').textContent;
        
        // Animate sweet
        const sweetAnimation = document.getElementById('sweetAnimation');
        sweetAnimation.textContent = sweetEmoji;
        sweetAnimation.style.left = '50%';
        sweetAnimation.style.bottom = '30%';
        sweetAnimation.classList.add('feeding');
        
        // Show caption
        setTimeout(() => {
            const caption = document.getElementById('sweetCaption');
            caption.textContent = 'A bite of sweetness to celebrate our sweetest memories and endless laughter!';
            caption.style.opacity = '1';
            
            // Create confetti effect
            createConfetti(20);
        }, 1500);
        
        // Move to next screen
        setTimeout(() => {
            sweetAnimation.classList.remove('feeding');
            switchScreen('sweetScreen', 'hugScreen', 0);
        }, 4000);
    });
});

// Hug & Blessings
document.getElementById('blessingBtn').addEventListener('click', function() {
    this.style.display = 'none';
    
    const blessingReveal = document.getElementById('blessingReveal');
    blessingReveal.style.display = 'block';
    
    // Show continue button
    setTimeout(() => {
        document.getElementById('continueToFinale').style.display = 'inline-block';
    }, 2000);
});

document.getElementById('continueToFinale').addEventListener('click', () => {
    switchScreen('hugScreen', 'finaleScreen', 0);
    
    // Start finale effects
    setTimeout(() => {
        createFireworks();
        createConfetti(100);
    }, 500);
});

// Fireworks effect
function createFireworks() {
    const container = document.getElementById('fireworks');
    const colors = ['#FFD700', '#FF6B35', '#DC143C', '#FF69B4', '#00CED1'];
    
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * (window.innerHeight * 0.6);
            
            for (let j = 0; j < 30; j++) {
                const firework = document.createElement('div');
                firework.className = 'firework';
                firework.style.left = x + 'px';
                firework.style.top = y + 'px';
                firework.style.background = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * j) / 30;
                const distance = 50 + Math.random() * 100;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                firework.style.setProperty('--tx', tx + 'px');
                firework.style.setProperty('--ty', ty + 'px');
                
                container.appendChild(firework);
                
                setTimeout(() => firework.remove(), 1000);
            }
        }, i * 800);
    }
}

// Confetti effect
function createConfetti(count) {
    const container = document.getElementById('confetti');
    const colors = ['#FFD700', '#FF6B35', '#DC143C', '#FF69B4', '#00CED1', '#32CD32'];
    const shapes = ['circle', 'square', 'triangle'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti-piece';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'circle') {
                confetti.style.borderRadius = '50%';
            } else if (shape === 'triangle') {
                confetti.style.width = '0';
                confetti.style.height = '0';
                confetti.style.borderLeft = '5px solid transparent';
                confetti.style.borderRight = '5px solid transparent';
                confetti.style.borderBottom = '10px solid ' + confetti.style.background;
                confetti.style.background = 'transparent';
            }
            
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Download Memory Card
document.getElementById('downloadBtn').addEventListener('click', () => {
    // Create a canvas for the memory card
    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 630;
    const ctx = canvas.getContext('2d');
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#8B1538');
    gradient.addColorStop(0.5, '#5C0A29');
    gradient.addColorStop(1, '#3D0814');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add decorative border
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 10;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Title
    ctx.fillStyle = '#FFD700';
    ctx.font = 'bold 60px Cinzel, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Happy Raksha Bandhan', canvas.width / 2, 120);
    
    // Brother's name
    ctx.fillStyle = '#FFFFF0';
    ctx.font = '48px Crimson Text, serif';
    ctx.fillText(`Dear ${brotherName}`, canvas.width / 2, 220);
    
    // Message
    ctx.font = '32px Poppins, sans-serif';
    ctx.fillStyle = '#FFFFF0';
    const message = 'No distance can ever weaken our bond.';
    ctx.fillText(message, canvas.width / 2, 320);
    
    ctx.font = '28px Poppins, sans-serif';
    const message2 = 'Always stay safe and blessed, my dear brother.';
    ctx.fillText(message2, canvas.width / 2, 380);
    
    // Heart emoji
    ctx.font = '80px Arial';
    ctx.fillText('💖', canvas.width / 2, 480);
    
    // Signature
    ctx.font = 'italic 32px Crimson Text, serif';
    ctx.fillStyle = '#D4AF37';
    ctx.fillText('With all my love, Your Sister', canvas.width / 2, 560);
    
    // Convert to blob and download
    canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Raksha_Bandhan_${brotherName}_${new Date().getFullYear()}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });
});

// Share on WhatsApp
document.getElementById('shareBtn').addEventListener('click', () => {
    const message = encodeURIComponent(`🎉 Happy Raksha Bandhan ${brotherName}! 💖\n\nNo distance can ever weaken our bond. Today, as I celebrate Rakhi with you virtually, I pray for your happiness, health, and prosperity.\n\nYou are not just my brother, but my first friend, my protector, and my confidant.\n\nWith all my love,\nYour Sister 💕`);
    
    const whatsappUrl = `https://wa.me/?text=${message}`;
    window.open(whatsappUrl, '_blank');
});

// Replay
document.getElementById('replayBtn').addEventListener('click', () => {
    // Reset state
    selectedTilak = null;
    selectedRakhi = null;
    
    // Reset UI elements
    document.getElementById('tilakMark').className = 'tilak-mark';
    document.getElementById('tilakMark').style.background = '';
    document.getElementById('tilakMark').innerHTML = '';
    document.getElementById('tilakCaption').style.opacity = '0';
    document.getElementById('aartiCaption').style.opacity = '0';
    document.getElementById('rakhiCaption').style.opacity = '0';
    document.getElementById('sweetCaption').style.opacity = '0';
    document.getElementById('wristContainer').style.display = 'none';
    document.getElementById('blessingReveal').style.display = 'none';
    document.getElementById('blessingBtn').style.display = 'inline-block';
    document.getElementById('continueToFinale').style.display = 'none';
    document.getElementById('performAarti').disabled = false;
    document.getElementById('performAarti').style.opacity = '1';
    
    // Clear selections
    document.querySelectorAll('.tilak-option, .rakhi-option').forEach(opt => {
        opt.classList.remove('selected');
    });
    
    document.querySelectorAll('.sweet-option').forEach(opt => {
        opt.style.pointerEvents = 'auto';
        opt.style.opacity = '1';
    });
    
    // Clear fireworks and confetti
    document.getElementById('fireworks').innerHTML = '';
    document.getElementById('confetti').innerHTML = '';
    
    // Return to tilak screen
    switchScreen('finaleScreen', 'tilakScreen', 0);
});

// Add CSS animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    .firework {
        --tx: 0;
        --ty: 0;
    }
    
    @keyframes explode {
        0% {
            transform: translate(0, 0);
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty));
            opacity: 0;
        }
    }
    
    .sparkle {
        --tx: 0;
        --ty: 0;
    }
    
    @keyframes sparkleEffect {
        0% {
            transform: translate(0, 0) scale(0) rotate(0deg);
            opacity: 1;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translate(var(--tx), var(--ty)) scale(3) rotate(180deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
