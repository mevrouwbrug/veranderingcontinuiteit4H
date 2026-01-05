// Adaptieve Quiz Engine voor Geschiedenis Havo 4
// Werkt met alle drie de onderwerpen

// Quiz state
let quizState = {
    currentQuestion: 1,
    currentDifficulty: 'gemiddeld',
    score: 0,
    answers: [],
    usedQuestions: [],
    consecutiveCorrect: 0,
    consecutiveWrong: 0
};

// Start quiz
function initQuiz() {
    quizState = {
        currentQuestion: 1,
        currentDifficulty: 'gemiddeld',
        score: 0,
        answers: [],
        usedQuestions: [],
        consecutiveCorrect: 0,
        consecutiveWrong: 0
    };
    loadQuestion();
}

// Selecteer een vraag op basis van huidig niveau
function selectQuestion() {
    const availableQuestions = questionBank[quizState.currentDifficulty].filter(
        q => !quizState.usedQuestions.includes(q.id)
    );
    
    if (availableQuestions.length === 0) {
        // Als geen vragen meer op dit niveau, neem een willekeurige
        const allLevels = ['makkelijk', 'gemiddeld', 'moeilijk'];
        for (let level of allLevels) {
            const questions = questionBank[level].filter(
                q => !quizState.usedQuestions.includes(q.id)
            );
            if (questions.length > 0) {
                return questions[Math.floor(Math.random() * questions.length)];
            }
        }
    }
    
    return availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
}

// Laad de huidige vraag
function loadQuestion() {
    const question = selectQuestion();
    
    // Update UI
    document.getElementById('current-q').textContent = quizState.currentQuestion;
    document.getElementById('q-number').textContent = quizState.currentQuestion;
    document.getElementById('situation-text').textContent = question.situation;
    document.getElementById('event-text').textContent = question.event;
    
    // Update moeilijkheidsindicator
    const diffBadge = document.getElementById('diff-badge');
    diffBadge.textContent = capitalizeFirst(question.difficulty);
    diffBadge.className = 'diff-badge ' + question.difficulty;
    
    // Update progress bar
    const progress = (quizState.currentQuestion - 1) / 10 * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    // Reset feedback
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.className = 'feedback-box';
    feedbackBox.innerHTML = '';
    
    // Enable buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Store current question
    quizState.currentQuestionData = question;
}

// Submit antwoord
function submitAnswer(answer) {
    const question = quizState.currentQuestionData;
    const isCorrect = answer === question.correct;
    
    // Disable buttons
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.disabled = true;
    });
    
    // Visual feedback op button
    document.querySelectorAll('.answer-btn').forEach(btn => {
        const btnAnswer = btn.onclick.toString().includes('verandering') ? 'verandering' : 'continuiteit';
        if (btnAnswer === answer) {
            btn.classList.add('selected');
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (btnAnswer === question.correct && !isCorrect) {
            btn.classList.add('correct');
        }
    });
    
    // Show feedback
    const feedbackBox = document.getElementById('feedback-box');
    feedbackBox.className = 'feedback-box show ' + (isCorrect ? 'correct' : 'incorrect');
    
    let feedbackHTML = '<div class="feedback-header">';
    if (isCorrect) {
        feedbackHTML += '<span class="feedback-icon">✓</span>';
        feedbackHTML += '<span class="feedback-title">Correct!</span>';
    } else {
        feedbackHTML += '<span class="feedback-icon">✗</span>';
        feedbackHTML += '<span class="feedback-title">Helaas, dat is niet juist.</span>';
    }
    feedbackHTML += '</div>';
    
    feedbackHTML += '<div class="feedback-explanation">';
    feedbackHTML += '<p><strong>Uitleg:</strong> ' + question.explanation + '</p>';
    feedbackHTML += '</div>';
    
    // Add next button
    if (quizState.currentQuestion < 10) {
        feedbackHTML += '<button class="next-question-btn" onclick="nextQuestion()">Volgende vraag →</button>';
    } else {
        feedbackHTML += '<button class="next-question-btn" onclick="showResults()">Bekijk resultaten →</button>';
    }
    
    feedbackBox.innerHTML = feedbackHTML;
    
    // Update state
    quizState.usedQuestions.push(question.id);
    quizState.answers.push({
        question: question,
        userAnswer: answer,
        correct: isCorrect
    });
    
    if (isCorrect) {
        quizState.score++;
        quizState.consecutiveCorrect++;
        quizState.consecutiveWrong = 0;
    } else {
        quizState.consecutiveCorrect = 0;
        quizState.consecutiveWrong++;
    }
    
    // Adaptieve moeilijkheid
    adjustDifficulty();
}

// Pas moeilijkheidsgraad aan op basis van prestatie
function adjustDifficulty() {
    // Als 2 achter elkaar goed: moeilijker
    if (quizState.consecutiveCorrect >= 2) {
        if (quizState.currentDifficulty === 'makkelijk') {
            quizState.currentDifficulty = 'gemiddeld';
        } else if (quizState.currentDifficulty === 'gemiddeld') {
            quizState.currentDifficulty = 'moeilijk';
        }
        quizState.consecutiveCorrect = 0;
    }
    
    // Als 2 achter elkaar fout: makkelijker
    if (quizState.consecutiveWrong >= 2) {
        if (quizState.currentDifficulty === 'moeilijk') {
            quizState.currentDifficulty = 'gemiddeld';
        } else if (quizState.currentDifficulty === 'gemiddeld') {
            quizState.currentDifficulty = 'makkelijk';
        }
        quizState.consecutiveWrong = 0;
    }
}

// Volgende vraag
function nextQuestion() {
    quizState.currentQuestion++;
    loadQuestion();
}

// Toon eindresultaten met kritische feedback
function showResults() {
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    
    // Score
    document.getElementById('final-score').textContent = quizState.score + '/10';
    
    // Bereken percentage
    const percentage = (quizState.score / 10) * 100;
    
    // Kritisch feedbackbericht
    const resultMessage = document.getElementById('result-message');
    let message = '';
    let advice = '';
    
    if (percentage === 100) {
        message = '<h3>🏆 Uitstekend werk!</h3>';
        message += '<p>Je beheerst de vaardigheid verandering en continuïteit volledig. Je kunt subtiele nuances onderscheiden en begrijpt dat historische ontwikkelingen complex zijn.</p>';
        advice = '<p><strong>Advies:</strong> Je bent klaar voor toetsing op dit onderwerp. Probeer ook de andere onderwerpen te oefenen om je kennis volledig te maken.</p>';
    } else if (percentage >= 80) {
        message = '<h3>👏 Goed gedaan!</h3>';
        message += '<p>Je hebt een goede beheersing van de stof. Je kunt meestal onderscheid maken tussen verandering en continuïteit.</p>';
        advice = '<p><strong>Verbeterpunt:</strong> Let beter op de nuances. Soms lijkt iets een verandering, maar op een dieper niveau is er continuïteit (bijvoorbeeld: nieuwe retoriek, maar dezelfde machtsstructuren). Lees de informatiepagina nog eens kritisch door.</p>';
    } else if (percentage >= 60) {
        message = '<h3>📚 Redelijk, maar nog werk te doen</h3>';
        message += '<p>Je begrijpt de basisprincipes, maar maakt nog regelmatig fouten bij complexere vragen.</p>';
        advice = '<p><strong>Kritisch punt:</strong> Je moet beter onderscheid leren maken tussen <em>oppervlakkige</em> en <em>structurele</em> verandering. Een nieuwe wet betekent niet automatisch dat de samenleving verandert. Focus op:<ul>';
        advice += '<li>Wie had echt macht? Veranderde dat?</li>';
        advice += '<li>Hoe leefde het gewone volk? Veranderde hun dagelijks leven?</li>';
        advice += '<li>Waren veranderingen alleen voor de elite?</li></ul>';
        advice += 'Bestudeer de stof opnieuw en let specifiek op de "verandering & continuïteit" boxen.</p>';
    } else if (percentage >= 40) {
        message = '<h3>⚠️ Onvoldoende - meer studie nodig</h3>';
        message += '<p>Je hebt de basisconcepten nog niet voldoende onder de knie. Dit is zorgelijk voor het eindexamen.</p>';
        advice = '<p><strong>Kritische feedback:</strong> Je lijkt moeite te hebben met het onderscheiden van verandering en continuïteit. Dit is een kernvaardigheid voor geschiedenis havo 4.<ul>';
        advice += '<li><strong>Verandering</strong> = iets is fundamenteel anders dan voorheen (bijv. van geen rechten naar wel rechten, van lokale macht naar centrale macht)</li>';
        advice += '<li><strong>Continuïteit</strong> = ondanks nieuwe ontwikkelingen blijft iets belangrijk gelijk (bijv. ondanks nieuwe ideeën blijft de koning aan de macht, blijven vrouwen rechteloos)</li></ul>';
        advice += 'Ga terug naar de informatiepagina\'s en lees ze <em>zeer aandachtig</em>. Maak aantekeningen. Probeer daarna opnieuw.</p>';
    } else {
        message = '<h3>❌ Ernstig onvoldoende</h3>';
        message += '<p>Je beheerst de stof niet. Op dit niveau kun je niet slagen voor het examen.</p>';
        advice = '<p><strong>Harde waarheid:</strong> Je begrijpt de concepten "verandering" en "continuïteit" niet goed genoeg. Dit is niet acceptabel voor havo 4.<ul>';
        advice += '<li>Bestudeer de informatiepagina\'s <strong>grondig</strong></li>';
        advice += '<li>Maak actieve aantekeningen: schrijf per gebeurtenis op of het verandering of continuïteit is en <em>waarom</em></li>';
        advice += '<li>Let op: iets kan verandering zijn op één gebied maar continuïteit op een ander (bijv. nieuwe wetenschappelijke ideeën = verandering, maar Kerk blijft machtig = continuïteit)</li>';
        advice += '<li>Vraag je docent om extra uitleg</li></ul>';
        advice += 'Zonder verbetering ga je het eindexamen <strong>niet</strong> halen. Neem dit serieus.</p>';
    }
    
    resultMessage.innerHTML = message + advice;
    
    // Gedetailleerde feedback per vraag
    const detailedFeedback = document.getElementById('detailed-feedback');
    let feedbackHTML = '<h3>Overzicht van je antwoorden:</h3>';
    feedbackHTML += '<div class="answer-overview">';
    
    quizState.answers.forEach((answer, index) => {
        const className = answer.correct ? 'answer-item correct' : 'answer-item incorrect';
        feedbackHTML += `<div class="${className}">`;
        feedbackHTML += `<div class="answer-header">`;
        feedbackHTML += `<span class="answer-number">Vraag ${index + 1}</span>`;
        feedbackHTML += `<span class="answer-icon">${answer.correct ? '✓' : '✗'}</span>`;
        feedbackHTML += `</div>`;
        feedbackHTML += `<p class="answer-situation"><strong>Situatie:</strong> ${answer.question.situation}</p>`;
        feedbackHTML += `<p class="answer-event"><strong>Gebeurtenis:</strong> ${answer.question.event}</p>`;
        feedbackHTML += `<p class="answer-result">`;
        feedbackHTML += `<strong>Jouw antwoord:</strong> <span class="${answer.correct ? 'text-correct' : 'text-incorrect'}">${capitalizeFirst(answer.userAnswer)}</span><br>`;
        if (!answer.correct) {
            feedbackHTML += `<strong>Correct antwoord:</strong> <span class="text-correct">${capitalizeFirst(answer.question.correct)}</span><br>`;
        }
        feedbackHTML += `</p>`;
        
        // Als fout, toon volledige uitleg
        if (!answer.correct) {
            feedbackHTML += `<div class="answer-explanation">`;
            feedbackHTML += `<strong>Waarom?</strong> ${answer.question.explanation}`;
            feedbackHTML += `</div>`;
        }
        
        feedbackHTML += `</div>`;
    });
    
    feedbackHTML += '</div>';
    detailedFeedback.innerHTML = feedbackHTML;
}

// Restart quiz
function restartQuiz() {
    document.getElementById('result-page').style.display = 'none';
    document.getElementById('quiz-content').style.display = 'block';
    initQuiz();
}

// Helper function
function capitalizeFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});
