//query selects
let subA = document.querySelector('.category1')
let subB = document.querySelector('.category2')
let subC = document.querySelector('.category3')
let subD = document.querySelector('.category4')
let subE = document.querySelector('.category5')
let categoryButton = document.querySelector('.categoryButton')
let questionSelect = document.querySelector('.gameButton')
    // first column buttons
    let a1 = document.querySelector('.a-1')
    let a2 = document.querySelector('.a-2')
    let a3 = document.querySelector('.a-3')
    let a4 = document.querySelector('.a-4')
    let a5 = document.querySelector('.a-5')
    //second column buttons
    let b1 = document.querySelector('.b-1')
    let b2 = document.querySelector('.b-2')
    let b3 = document.querySelector('.b-3')
    let b4 = document.querySelector('.b-4')
    let b5 = document.querySelector('.b-5')
    //third column buttons 
    let c1 = document.querySelector('.c-1')
    let c2 = document.querySelector('.c-2')
    let c3 = document.querySelector('.c-3')
    let c4 = document.querySelector('.c-4')
    let c5 = document.querySelector('.c-5')
    //fourth column buttons
    let d1 = document.querySelector('.d-1')
    let d2 = document.querySelector('.d-2')
    let d3 = document.querySelector('.d-3')
    let d4 = document.querySelector('.d-4')
    let d5 = document.querySelector('.d-5') 
    //fifth column buttons
    let e1 = document.querySelector('.e-1')
    let e2 = document.querySelector('.e-2')
    let e3 = document.querySelector('.e-3')
    let e4 = document.querySelector('.e-4')
    let e5 = document.querySelector('.e-5')
// universal variables
let scoreBoard = document.querySelector('.score')
let score = 0
let answerPrompt = 'Enter in either a,b,c,or d:'
// subjects and questions
let sports = ['football','baseball','history','olympics','almost']
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
    'question': 'The New Your Jets original team name was what ', 
    'correctAnswer': 'b',
    'answers': [' a: Pioneers', ' b: Titans',' c: Iron boys',' d: Colts']
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
    'points': 100, 
    'question': 'How many teams are in the MLB', 
    'correctAnswer': 'c',
    'answers': [' a: 24', ' b: 36',' c: 30',' d: 28']
},{
    'points': 200, 
    'question': 'Who won the World Series in 2021', 
    'correctAnswer': 'a',
    'answers': [' a: Atlanta Braves', ' b: Los Angelas Dodgers',' c: Boston Red Socks',' d: Houston Astros']
},{
    'points': 300, 
    'question': 'How many Games are in a MLB season?', 
    'correctAnswer': 'b',
    'answers': [' a: 92', ' b: 162',' c: 100',' d: 142']
},{
    'points': 400, 
    'question': 'Barry Bonds has the record for the most Home Runs in a season, how many did he hit?', 
    'correctAnswer': 'b',
    'answers': [' a: 66', ' b: 73',' c: 71',' d: 78']
},{
    'points': 500, 
    'question': 'In baseball what is another name for a walk? ', 
    'correctAnswer': 'b',
    'answers': [' a: walk it out', ' b: base on balls',' c: take your base',' d: all balls']
}]
let sportHistory = [{
    'points': 100, 
    'question': 'Which sport was the only sport played on the Moon', 
    'correctAnswer': 'b',
    'answers': [' a: soccer', ' b: Golf',' c: football',' d: baseball']
},{
    'points': 200, 
    'question': 'How old was Tiger Woods when he won his first Masters', 
    'correctAnswer': 'a',
    'answers': [' a: 21', ' b: 19',' c: 23','d: 33']
},{
    'points': 300, 
    'question': 'There has been how many tour de Frances?', 
    'correctAnswer': 'd',
    'answers': [' a: 72', ' b: 87',' c: 132 ',' d: 108']
},{
    'points': 400, 
    'question': 'Micheal Jordan and the Chicago went on a incredible championship run, how many did they win ', 
    'correctAnswer': 'c',
    'answers': ['a: 3', ' b: 4 ',' c: 6 ',' d: 9']
},{
    'points': 500, 
    'question': 'In 2021 who was the highest paid athlete', 
    'correctAnswer': 'd',
    'answers': [' a: Lebron James', ' b: Patrick Mahomes',' c: Christiano Ronaldo',' d: Connor Mcgregor']
}]
let olympics = [{
    'points': 100, 
    'question': 'Which athlete won 8 gold medals in the 2008 summer olymipics?', 
    'correctAnswer': 'b',
    'answers': ['a: Usain Bolt', ' b: Michael Phelps',' c: Allyson Felix',' d: Katie Ledecky']
},{
    'points': 200, 
    'question': 'In what olyimpic year was snowboarding added as a sport?', 
    'correctAnswer': 'b',
    'answers': [' a: 2000', ' b: 1998','c: 1990','d: 2003']
},{
    'points': 300, 
    'question': '', 
    'correctAnswer': 'Apple',
    'answers': ['A', 'b','c','d']
},{
    'points': 400, 
    'question': 'What country that competed, went through the longest drought of winning a gold medal?', 
    'correctAnswer': 'c',
    'answers': [' a: Greece', ' b: South Africa',' c: Philippines',' d: hungary']
},{
    'points': 500, 
    'question': ' When were the first Olympic games?', 
    'correctAnswer': 'a',
    'answers': [' a: 776 B.C.', ' b: 263 A.D.',' c: 1192 A.D.',' d: 124 B.c. ']
}]
let almost = [{
    'points': 100, 
    'question': 'In track and feild what achievement was considered impossible to beat but after 1954 has been broken over 1,000 times?', 
    'correctAnswer': 'a',
    'answers': [' a: 4 minute mile', ' b: 6 meter pull volt ',' c: 100 meter javelin',' d: 2 hour marathon']
},{
    'points': 200, 
    'question': 'What NFL team almost beat the undefeated season record but lost their last game', 
    'correctAnswer': 'c',
    'answers': [' a: Miami Dolphins ', ' b: Dallas Cowboys',' c: New England Patriots',' d: San Francisco 49ers ']
},{
    'points': 300, 
    'question': 'what NFL team went to 4 superbowls in a row, but did not win a single one', 
    'correctAnswer': 'b',
    'answers': [' a: Dallas Cowboys', ' b: Buffalo Bills',' c: San Francisco',' d: Washington Redskins']
},{
    'points': 400, 
    'question': 'What college footbal team had the worst losing record at 34 straight games?', 
    'correctAnswer': 'd',
    'answers': [' a: North Illinois', ' b: UCLA',' c: mississippi state',' d. northwestern']
},{
    'points': 500, 
    'question': ' ', 
    'correctAnswer': 'd',
    'answers': ['a', 'b','c','d']
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
        sportsBaseball()
        sportsHistory()
        sportsOlympics()
        sportsAlmost()
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




//function for cat sports, subject football

sportsFootball = () => {
    let subject = football
    a1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
            disableButton(a1)
        } else if (Q1 != `${subject[0].correctAnswer}`) {
            incorrect(a1)
        } else {
            
        }  
    })
    a2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
            disableButton(a2)
        } else if (Q2 != `${subject[1].correctAnswer}`) {
            incorrect(a2)
        } else {}  
    })
    a3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
            disableButton(a3)
        } else if (Q3 != `${subject[2].correctAnswer}`) {
            incorrect(a3)
        } else {  
            }  
    })
    a4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
            disableButton(a4)
        } else if (Q4 != `${subject[3].correctAnswer}`) {
            incorrect(a4)
        } else {  
            }  
    })
    a5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
            disableButton(a5)
        } else if (Q5 != `${subject[4].correctAnswer}`) {
            incorrect(a5)
        } else {  
            }  
    })
}
//  function for cat sports, subject baseball
sportsBaseball = () => {
    let subject = baseball
    b1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
            disableButton(b1)
        } else if (Q1 != `${subject[0].correctAnswer}`) {
            incorrect(b1)
        } else {}  
    })
    b2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
            disableButton(b2)
        } else if (Q2 != `${subject[1].correctAnswer}`) {
            incorrect(b2)
        } else {  
            }  
    })
    b3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
            disableButton(b3)
        } else if (Q3 != `${subject[2].correctAnswer}`) {
            incorrect(b3)
        } else {  
            }  
    })
    b4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
            disableButton(b4)
        } else if (Q4 != `${subject[3].correctAnswer}`) {
            incorrect(b4)
        } else {  
            }  
    })
    b5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
            disableButton(b5)
        } else if (Q5 != `${subject[4].correctAnswer}`) {
            incorrect(b5)
        } else {  
            }  
    })
}

// function for cat sports, subject sport history 
sportsHistory = () => {
    let subject = sportHistory
    c1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
            disableButton(c1)
        } else if (Q1 != `${subject[0].correctAnswer}`) {
            incorrect(c1)
        } else {}  
    })
    c2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
            disableButton(c2)
        } else if (Q2 != `${subject[1].correctAnswer}`) {
            incorrect(c2)
        } else {  
            }  
    })
    c3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
            disableButton(c3)
        } else if (Q3 != `${subject[2].correctAnswer}`) {
            incorrect(c3)
        } else {  
            }  
    })
    c4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
            disableButton(c4)
        } else if (Q4 != `${subject[3].correctAnswer}`) {
            incorrect(a4)
        } else {  
            }  
    })
    c5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
            disableButton(c5)
        } else if (Q5 != `${subject[4].correctAnswer}`) {
            incorrect(c5)
        } else {  
            }  
    })
}

//  functions for cat sports, subject olympics
sportsOlympics = () => {
    let subject = olympics
    d1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
            disableButton(d1)
        } else if (Q1 != `${subject[0].correctAnswer}`) {
            incorrect(d1)
        } else {}  
    })
    d2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
            disableButton(d2)
        } else if (Q2 != `${subject[1].correctAnswer}`) {
            incorrect(d2)
        } else {  
            }  
    })
    d3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
            disableButton(d3)
        } else if (Q3 != `${subject[2].correctAnswer}`) {
            incorrect(d3)
        } else {  
            }  
    })
    d4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
            disableButton(d4)
        } else if (Q4 != `${subject[3].correctAnswer}`) {
            incorrect(d4)
        } else {  
            }  
    })
    d5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
            disableButton(d5)
        } else if (Q5 != `${subject[4].correctAnswer}`) {
            incorrect(d5)
        } else {  
            }  
    })
}

//function for cat sports, subject almost
sportsAlmost = () => {
    let subject = almost
    e1.addEventListener('click', () => {
        let Q1 = prompt(`${subject[0].question} 
        ${answerPrompt} 
        ${subject[0].answers}`)
        if (Q1 === `${subject[0].correctAnswer}`) {
            correctAnswer(subject[0].points)
            disableButton(e1)
        } else if (Q1 != `${subject[0].correctAnswer}`) {
            incorrect(e1)
        } else {}  
    })
    e2.addEventListener('click', () => {
       let Q2 = prompt(`${subject[1].question} 
        ${answerPrompt} 
        ${subject[1].answers}`)
        if (Q2 === `${subject[1].correctAnswer}`) {
            correctAnswer(subject[1].points)
            disableButton(e2)
        } else if (Q2 != `${subject[1].correctAnswer}`) {
            incorrect(e2)
        } else {  
            }  
    })
    e3.addEventListener('click', () => {
       let Q3 = prompt(`${subject[2].question} 
        ${answerPrompt} 
        ${subject[2].answers}`)
        if (Q3 === `${subject[2].correctAnswer}`) {
            correctAnswer(subject[2].points)
            disableButton(e3)
        } else if (Q3 != `${subject[2].correctAnswer}`) {
            incorrect(e3)
        } else {  
            }  
    })
    e4.addEventListener('click', () => {
        let Q4 = prompt(`${subject[3].question} 
        ${answerPrompt} 
        ${subject[3].answers}`)
        if (Q4 === `${subject[3].correctAnswer}`) {
            correctAnswer(subject[3].points)
            disableButton(e4)
        } else if (Q4 != `${subject[3].correctAnswer}`) {
            incorrect(e4)
        } else {  
            }  
    })
    e5.addEventListener('click', () => {
        let Q5 = prompt(`${subject[4].question} 
        ${answerPrompt} 
        ${subject[4].answers}`)
        if (Q5 === `${subject[4].correctAnswer}`) {
            correctAnswer(subject[4].points)
            disableButton(e5)
        } else if (Q5 != `${subject[4].correctAnswer}`) {
            incorrect(e5)
        } else {  
            }  
    })
}
// function to change score board
 correctAnswer = (x) => {
    score = score + x;
    scoreBoard.innerHTML = score
}
disableButton = (y) => {
    y.style.background = 'green'
    y.style.opacity = 0.5;
    y.disabled = 'true'
}
incorrect = (z) => {
    z.style.background = 'red'
    z.style.opacity = 0.5
    z.disabled = 'true'
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

// let football = [{
//     'points': 100, 
//     'question': 'In the NFL, the championship game is called what?', 
//     'correctAnswer': 'c',
//     'answers': [' a: world cup',' b: NFL championship',' c: super bowl',' d: rose bowl']
// },{
//     'points': 200, 
//     'question': 'Payton Manning missed all of the 2011 season, due to an injury to what body part?', 
//     'correctAnswer': 'a',
//     'answers': [' a: neck', ' b: knee',' c: foot',' d: back']
// },{
//     'points': 300, 
//     'question': 'what NFL team went to 4 superbowls in a row, but did not win a single one', 
//     'correctAnswer': 'b',
//     'answers': [' a: Dallas Cowboys', ' b: Buffalo Bills',' c: San Francisco',' d: Washington Redskins']
// },{
//     'points': 400, 
//     'question': 'The triple crown is awarded to a player who had the most yards, touchdowns, receptions. Who was the last player to be reward the Triple crown?', 
//     'correctAnswer': 'b',
//     'answers': ['a: Randy Moss', 'b: Cooper Kupp','c: Jerry Rice','d: Antonio Brown']
// },{
//     'points': 500, 
//     'question': 'What team was established in 1898 and was the first team to join the NFL?', 
//     'correctAnswer': 'd',
//     'answers': [' a: Pittsburgh Steelers', ' b: Greenbay Packers',' c: Chicago Bears',' d: Arizona Cardinals']
// }]
// let baseball = [{
//     'points': 100, 
//     'question1': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 200, 
//     'question2': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 300, 
//     'question3': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 400, 
//     'question4': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 500, 
//     'question5': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// }]
// let sportHistory = [{
//     'points': 100, 
//     'question1': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 200, 
//     'question2': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 300, 
//     'question3': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 400, 
//     'question4': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 500, 
//     'question5': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// }]
// let olympics = [{
//     'points': 100, 
//     'question1': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 200, 
//     'question2': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 300, 
//     'question3': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 400, 
//     'question4': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 500, 
//     'question5': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// }]
// let losers = [{
//     'points': 100, 
//     'question1': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 200, 
//     'question2': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 300, 
//     'question3': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 400, 
//     'question4': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// },{
//     'points': 500, 
//     'question5': 'banana', 
//     'correctAnswer': 'Apple',
//     'answers': ['Apple', 'b','c','d']
// }]