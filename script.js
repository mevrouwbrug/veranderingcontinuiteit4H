// Smooth scrolling voor navigatie
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Wereldbeeld Toggle (Geocentrisch vs Heliocentrisch)
const worldviewToggles = document.querySelectorAll('.toggle-btn');
worldviewToggles.forEach(btn => {
    btn.addEventListener('click', function() {
        // Verwijder active class van alle buttons
        worldviewToggles.forEach(b => b.classList.remove('active'));
        // Voeg active toe aan geklikte button
        this.classList.add('active');
        
        // Toon juiste wereldbeeld
        const view = this.getAttribute('data-view');
        document.querySelectorAll('.worldview').forEach(wv => {
            wv.classList.remove('active');
        });
        
        if (view === 'geo') {
            document.querySelector('.worldview.geocentric').classList.add('active');
        } else {
            document.querySelector('.worldview.heliocentric').classList.add('active');
        }
    });
});

// Versailles Info Toggle
function toggleVersaillesInfo() {
    const info = document.getElementById('versailles-info');
    info.classList.toggle('show');
}

// Denkers Info Systeem
let currentThinker = null;

function showThinkerInfo(thinkerId) {
    // Verberg alle details
    document.querySelectorAll('.detail-content').forEach(detail => {
        detail.classList.remove('active');
    });
    
    // Toon geselecteerde denker
    const detail = document.getElementById(thinkerId + '-detail');
    if (detail) {
        detail.classList.add('active');
    }
    
    // Highlight geselecteerde card
    document.querySelectorAll('.thinker-card').forEach(card => {
        card.style.borderColor = 'transparent';
    });
    event.target.closest('.thinker-card').style.borderColor = 'var(--secondary-color)';
}

// Initialiseer eerste denker
window.addEventListener('DOMContentLoaded', () => {
    const firstDetail = document.getElementById('voltaire-detail');
    if (firstDetail) {
        firstDetail.classList.add('active');
    }
});

// Tijdlijn interactiviteit
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.animation = 'pulse 0.5s';
        setTimeout(() => {
            this.style.animation = '';
        }, 500);
    });
});

// Quiz Functionaliteit
let currentQuestion = 1;
let score = 0;
let answered = false;

// Selecteer antwoord
document.querySelectorAll('.quiz-option').forEach(option => {
    option.addEventListener('click', function() {
        if (answered) return; // Voorkom meerdere antwoorden
        
        const questionDiv = this.closest('.quiz-question');
        const options = questionDiv.querySelectorAll('.quiz-option');
        const feedback = questionDiv.querySelector('.quiz-feedback');
        const isCorrect = this.getAttribute('data-correct') === 'true';
        
        // Markeer geselecteerde optie
        this.classList.add('selected');
        
        // Toon of antwoord goed of fout is
        if (isCorrect) {
            this.classList.add('correct');
            feedback.textContent = '✓ Correct! Goed gedaan!';
            feedback.className = 'quiz-feedback show correct';
            score++;
        } else {
            this.classList.add('incorrect');
            feedback.textContent = '✗ Helaas, dat is niet het juiste antwoord.';
            feedback.className = 'quiz-feedback show incorrect';
            
            // Toon ook het goede antwoord
            options.forEach(opt => {
                if (opt.getAttribute('data-correct') === 'true') {
                    opt.classList.add('correct');
                }
            });
        }
        
        // Disable alle opties
        options.forEach(opt => opt.disabled = true);
        
        // Enable volgende knop
        document.getElementById('next-btn').disabled = false;
        answered = true;
    });
});

// Volgende vraag
document.getElementById('next-btn').addEventListener('click', function() {
    answered = false;
    this.disabled = true;
    
    // Verberg huidige vraag
    document.getElementById('q' + currentQuestion).classList.remove('active');
    
    currentQuestion++;
    
    if (currentQuestion <= 8) {
        // Toon volgende vraag
        document.getElementById('q' + currentQuestion).classList.add('active');
    } else {
        // Toon resultaat
        showQuizResult();
    }
});

function showQuizResult() {
    document.querySelector('.quiz-navigation').style.display = 'none';
    
    const resultDiv = document.querySelector('.quiz-result');
    const scoreDisplay = document.getElementById('score');
    const scoreMessage = document.getElementById('score-message');
    
    scoreDisplay.textContent = score;
    
    // Bepaal bericht op basis van score
    let message = '';
    let emoji = '';
    
    if (score === 8) {
        message = 'Perfect! Je beheerst de stof uitstekend! 🌟';
        emoji = '🏆';
    } else if (score >= 6) {
        message = 'Goed gedaan! Je hebt de stof goed onder de knie. 👍';
        emoji = '🎉';
    } else if (score >= 4) {
        message = 'Niet slecht! Bestudeer de stof nog eens goed. 📚';
        emoji = '💪';
    } else {
        message = 'Nog even oefenen! Lees de informatie nogmaals door. 📖';
        emoji = '🔄';
    }
    
    scoreMessage.innerHTML = `${emoji}<br>${message}`;
    resultDiv.classList.add('show');
}

function restartQuiz() {
    // Reset variabelen
    currentQuestion = 1;
    score = 0;
    answered = false;
    
    // Reset alle vragen
    document.querySelectorAll('.quiz-question').forEach((q, index) => {
        q.classList.remove('active');
        
        // Reset opties
        const options = q.querySelectorAll('.quiz-option');
        options.forEach(opt => {
            opt.classList.remove('selected', 'correct', 'incorrect');
            opt.disabled = false;
        });
        
        // Verberg feedback
        const feedback = q.querySelector('.quiz-feedback');
        if (feedback) {
            feedback.classList.remove('show', 'correct', 'incorrect');
        }
    });
    
    // Toon eerste vraag
    document.getElementById('q1').classList.add('active');
    
    // Reset navigatie
    document.querySelector('.quiz-navigation').style.display = 'block';
    document.getElementById('next-btn').disabled = true;
    
    // Verberg resultaat
    document.querySelector('.quiz-result').classList.remove('show');
    
    // Scroll naar quiz sectie
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth' });
}

// Scroll animaties voor secties
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const sectionObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observeer alle secties
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    sectionObserver.observe(section);
});

// Navigatie highlight bij scrollen
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// Easter egg: Konami code voor leuke animatie
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiSequence.join('')) {
        activateEasterEgg();
    }
});

function activateEasterEgg() {
    // Voeg confetti effect toe
    const colors = ['#667eea', '#764ba2', '#f093fb', '#f5576c', '#4facfe'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            createConfetti(colors[Math.floor(Math.random() * colors.length)]);
        }, i * 30);
    }
    
    // Toon bericht
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2rem 3rem;
        border-radius: 15px;
        font-size: 1.5rem;
        font-weight: bold;
        z-index: 10000;
        box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        animation: fadeIn 0.5s;
    `;
    message.textContent = '🎉 Je hebt de geheime code gevonden! 🎉';
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.style.animation = 'fadeOut 0.5s';
        setTimeout(() => message.remove(), 500);
    }, 3000);
}

function createConfetti(color) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}vw;
        width: 10px;
        height: 10px;
        background: ${color};
        z-index: 9999;
        animation: fall ${2 + Math.random() * 3}s linear forwards;
        transform: rotate(${Math.random() * 360}deg);
    `;
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 5000);
}

// Voeg CSS animatie toe voor confetti
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(${Math.random() * 360}deg);
            opacity: 0;
        }
    }
    
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
    
    .nav-link.active {
        color: var(--secondary-color);
        border-bottom: 2px solid var(--secondary-color);
    }
`;
document.head.appendChild(style);

// Print functionaliteit (optioneel voor leerlingen die willen printen)
function printPage() {
    window.print();
}

// Loading animatie weg na volledige load
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    }, 100);
});

// Accessibility: Keyboard navigatie voor quiz
document.querySelectorAll('.quiz-option').forEach((option, index) => {
    option.setAttribute('tabindex', '0');
    option.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            option.click();
        }
    });
});

// Dark mode toggle (bonus feature)
let darkMode = false;

function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.documentElement.style.setProperty('--primary-color', '#ecf0f1');
        document.documentElement.style.setProperty('--text-dark', '#ecf0f1');
        document.documentElement.style.setProperty('--white', '#2c3e50');
        document.documentElement.style.setProperty('--light-bg', '#34495e');
        document.body.style.backgroundColor = '#2c3e50';
    } else {
        document.documentElement.style.setProperty('--primary-color', '#2c3e50');
        document.documentElement.style.setProperty('--text-dark', '#2c3e50');
        document.documentElement.style.setProperty('--white', '#ffffff');
        document.documentElement.style.setProperty('--light-bg', '#ecf0f1');
        document.body.style.backgroundColor = '#ffffff';
    }
}

// Console bericht voor nieuwsgierige leerlingen
console.log('%c🎓 Welkom bij de Geschiedenis Site! ', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cBen je nieuwsgierig naar hoe websites werken? Geweldig! Blijf leren! 💻', 'font-size: 14px; color: #764ba2;');
console.log('%cProbeer de Konami code: ↑ ↑ ↓ ↓ ← → ← → B A', 'font-size: 12px; color: #f5576c;');

// Progress tracking voor leerlingen
let sectionsVisited = new Set();

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
                sectionsVisited.add(sectionId);
                updateProgress();
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    progressObserver.observe(section);
});

function updateProgress() {
    const totalSections = 6; // intro, wetenschap, absolutisme, verlichting, tijdlijn, quiz
    const progress = Math.round((sectionsVisited.size / totalSections) * 100);
    
    if (progress === 100) {
        console.log('%c🎉 Gefeliciteerd! Je hebt alle secties bezocht!', 'font-size: 16px; font-weight: bold; color: #27ae60;');
    }
}

console.log('Script geladen! Alle interactieve elementen zijn actief. ✓');

