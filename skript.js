alert("Привет, это игра, угадай цифру от 1 до 100")

let min = 1
let max = 100

function getRandomInRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomInRange(min, max)

while (1) {
    if (prompt("Введите число") == num) {
        alert("Верно")
        break
    } else {
        alert("Не верно")
    }
    
}
    