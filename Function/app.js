function user(name, fav){
    console.log(`I am ${name}. My Fav person is :  ${fav}`)
}

//Process-1
function areaOfCircle(radius){
    const PI = 3.1416;
    const result = PI * radius * radius;
    console.log(`The area of circle is : ${result}`)
}

//Process-2
function areaOfCircle2(radius){
    console.log(`The are of circle is : ${3.1416 * radius * radius}`)
}



function area(rad){
    const resultOfArea = 3.1416 * rad * rad;
    console.log(`The area is : ${resultOfArea}`)
}


function diameter(rad){
    const reusltOfDiameter = 2 * rad;
    console.log(`The diameter is : ${reusltOfDiameter}`)
}

function circumference(rad){
    const resultOfCirference = 2 * 3.1416 * rad;
    console.log(`The circumference is : ${resultOfCirference}`)
}

function calculationOfCircle(rad){
    const area = 3.1416 * rad * rad;
    const diameter = 2 *rad;
    const circumference = 2 * 3.1416 * rad;
    console.log(`The are is : ${area}.\nThe diameter is : ${diameter}.\nThe circumference is : ${circumference}`)
}

calculationOfCircle(5)

function loop(){
    for(let i = 0; i < 10; i++){
        console.log('My name is Safi', i)
    }
}

const character = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

for(let i = 0; i < character.length; i++ ){
    console.log(character[i])
}


document.getElementById('plus').addEventListener('click', () => {
    let h1 = document.getElementById('value');
    h1.innerText = parseInt(h1.innerText) + 1;
})


