console.log('test')
let subA = document.querySelector('.category1')
let subB = document.querySelector('.category2')
let subC = document.querySelector('.category3')
let subD = document.querySelector('.category4')
let subE = document.querySelector('.category5')
let categoryButton = document.querySelector('.categoryButton')
let questionSelect = document.querySelector('.gameButton')
let a1 = document.querySelector('.a-1')
let a2 = document.querySelector('.a-2')
let a3 = document.querySelector('.a-3')
let a4 = document.querySelector('.a-4')
let a5 = document.querySelector('.a-5')
let scoreBoard = document.querySelector('.score')
let score = 0
let answerPrompt = 'Enter in either a,b,c,or d. options are:'
// subjects and questions
let sports = ['football','baseball','history','olympics','losers']
let history = ['american','computer science', 'culture', 'who', 'when']
let music = ["1990's",'rock n roll', 'ancient', 'nursery rymes', 'randon']
let movies = ['action','musicals', 'history', 'banana', 'egg']
let football = [{
    'points': 100, 
    'question': 'In the NFL, the championship game is called what?', 
    'correctAnswer': 'c',
    'answers': [' a: world cup',' b: NFL championship',' c: super bowl',' d: rose bowl']
},{
    'points': 200, 
    'question': 'Payton Manning missed all of the 2011 season, due to an injury to what body part?', 
    'correctAnswer': 'a',
    'answers': [' a: neck', ' b: knee',' c: foot',' d: back']
},{
    'points': 300, 
    'question': 'what NFL team went to 4 superbowls in a row, but did not win a single one', 
    'correctAnswer': 'b',
    'answers': [' a: Dallas Cowboys', ' b: Buffalo Bills',' c: San Francisco',' d: Washington Redskins']
},{
    'points': 400, 
    'question': 'The triple crown is awarded to a player who had the most yards, touchdowns, receptions. Who was the last player to be reward the Triple crown?', 
    'correctAnswer': 'b',
    'answers': ['a: Randy Moss', 'b: Cooper Kupp','c: Jerry Rice','d: Antonio Brown']
},{
    'points': 500, 
    'question': 'What team was established in 1898 and was the first team to join the NFL?', 
    'correctAnswer': 'd',
    'answers': [' a: Pittsburgh Steelers', ' b: Greenbay Packers',' c: Chicago Bears',' d: Arizona Cardinals']
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





sportsFootball = () => {
    let subject = football
    a1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
        }else {}  
    })
    a2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
        }else {  
            }  
    })
    a3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
        }else {  
            }  
    })
    a4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
        }else {  
            }  
    })
    a5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
        }else {  
            }  
    })
}
 correctAnswer = (x) => {
    score = score + x;
    scoreBoard.innerHTML = score
}
// correctAnswer200 = () => {
//     score = score + 200
//     scoreBoard.innerHTML = score
// }
// correctAnswer300 = () => {
//     score = score + 300
//     scoreBoard.innerHTML = score
// }
// correctAnswer400 = () => {
//     score = score + 400
//     scoreBoard.innerHTML = score
// }
// correctAnswer500 = () => {
//     score = score + 500
//     scoreBoard.innerHTML = score
// }