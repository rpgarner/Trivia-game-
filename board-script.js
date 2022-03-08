console.log('test')
let subA = document.querySelector('.category1')
let subB = document.querySelector('.category2')
let subC = document.querySelector('.category3')
let subD = document.querySelector('.category4')
let subE = document.querySelector('.category5')
let categoryButton = document.querySelector('.categoryButton')
let questionSelect = document.querySelector('.gameButton')

// subjects and questions
let sports = ['football','baseball','sportHistory','olympics,losers']
let football = [{
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
     let categories = 'Sports, history, music, movies!';
     prompt(`Please enter in a category: ${categories}`);
 })


