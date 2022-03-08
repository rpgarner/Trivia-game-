console.log('test')
let subA = document.querySelector('.category1')
let subB = document.querySelector('.category2')
let subC = document.querySelector('.category3')
let subD = document.querySelector('.category4')
let subE = document.querySelector('.category5')
let categoryButton = document.querySelector('.categoryButton')
let questionSelect = document.querySelector('.gameButton')
let a1 = document.querySelector('.a-1')
let scoreBoard = document.querySelector('.score')
let score = 0
let answerPrompt = 'Enter in either a,b,c,or d. options are:'
// subjects and questions
let sports = ['football','baseball','history','olympics','losers']
let history = ['american','computer science', 'culture', 'who', 'when']
let music = ["1990's",'rock n roll', 'ancient', 'nursery rymes', 'randon']
let movies = ['action','musicals', 'history', 'banana', 'egg']
let football = [{
    'question1': 'In the NFL, the championship game is called what?', 
    'correctAnswer': 'Apple',
    'answers': ['a: world cup','b: NFL championship','c: super bowl','d: rose bowl']
},{
    'question2': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question3': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question4': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question5': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
}]
let baseball = [{
    'question1': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question2': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question3': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question4': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question5': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
}]
let sportHistory = [{
    'question1': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question2': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question3': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question4': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question5': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
}]
let olympics = [{
    'question1': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question2': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question3': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question4': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question5': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
}]
let losers = [{
    'question1': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question2': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question3': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question4': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
},{
    'question5': 'banana', 
    'correctAnswer': 'Apple',
    'answers': ['Apple', 'b','c','d']
}]

//click events
 categoryButton.addEventListener('click', () => {
     let categories = 'sports, history, music, movies!';
     prompt(`Please enter in a category: ${categories}`);
     if ('sports') {
        subA.innerHTML = sports[0]
        subB.innerHTML = sports[1]
        subC.innerHTML = sports[2]
        subD.innerHTML = sports[3]
        subE.innerHTML = sports[4]
        sportsFootball()
     }
    else if ('history') {
        subA.innerHTML = history[0]
        subB.innerHTML = history[1]
        subC.innerHTML = history[2]
        subD.innerHTML = history[3]
        subE.innerHTML = history[4]
     } 
     else if ('music') {
        subA.innerHTML = music[0]
        subB.innerHTML = music[1]
        subC.innerHTML = music[2]
        subD.innerHTML = music[3]
        subE.innerHTML = music[4]
     } else if ('movies') {
        subA.innerHTML = movies[0]
        subB.innerHTML = movies[1]
        subC.innerHTML = movies[2]
        subD.innerHTML = movies[3]
        subE.innerHTML = movies[4]
     } 
 })


correctAnswer = () => {
    score = score + 100;
    scoreBoard.innerHTML = score
}

sportsFootball = () => {
    a1.addEventListener('click', () => {
        prompt(`${football[0].question1} 
        ${answerPrompt} 
        ${football[0].answers}`)
        if ('a') {
            correctAnswer()
        } else {  
                a1.innnerhtml.style.opacity = 0.2  
            }
    })
    
}