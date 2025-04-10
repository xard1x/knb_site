var player_choice = '' 
var result = ''
var choice = ['камень', 'ножницы', 'бумага']

var counter = 0
var win = 0
var defeat = 0
var now_nod = 0

function exam(){
    var randIndex = Math.floor(Math.random() * choice.length)
    var randElement = choice[randIndex]
    const bot = document.getElementById('bot_choice')
    const img = document.getElementById('img')
    const res = document.getElementById('t1')
    bot.innerText = randElement
    if (randElement === 'камень') {
        img.src = 'stone.png'
    }
    if (randElement === 'ножницы') {
        img.src = 'nojn.png'
    }
    if (randElement === 'бумага') {
        img.src = 'paper.png'
    }
    
    if (player_choice === randElement) {
        result = 'ничья'
        res.innerText = result
        now_nod += 1
    }
    if (player_choice === 'камень' && randElement === 'ножницы' || player_choice === 'ножницы' && randElement === 'бумага' || player_choice === 'бумага' && randElement ==='камень'){
        result = 'победа'
        counter += 1
        win += 1
        console.log(counter)
        res.innerText = result
    }
    if (player_choice === 'ножницы'  && randElement === 'камень' || player_choice ===  'бумага' && randElement === 'ножницы' || player_choice === 'камень' && randElement ==='бумага'){
        result = 'поражение'
        res.innerText = result
        counter -= 1
        defeat += 1
        console.log(counter)
    }
}

function stone() {
    player_choice = 'камень'
    exam()
}

function scissors() {
    player_choice = 'ножницы'
    exam()
}

function paper() {
    player_choice = 'бумага'
    exam()
}

function statis() {
    console.log('Общий счет: ' + String(counter))
    alert('Общий счет: ' + String(counter))
    alert('Победы: ' + String(win))
    alert('Поражения: ' +String(defeat))
    alert('Ничьи: ' + String(now_nod))
}

function dark(){
    const body = document.querySelector('body')
    body.style.color = 'white'
    body.style.background = 'black'
}

function white(){
    const body = document.querySelector('body')
    body.style.color = 'black'
    body.style.background = 'white'
}