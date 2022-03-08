const photos = [
    {
        name: "ROCK",
        src: "/images/rock.png"
    },
    {
        name: "PAPER",
        src: "/images/paper.png"
    },
    {
        name: "SCISSORS",
        src: "/images/scissors.png"
    }
];


const gameSection = document.querySelector('.rps-section');
const formRegister = document.querySelector('.form-for-players');
const inputPlayers = document.querySelectorAll('.input-form');
const btnSubmit = document.getElementById('btn-form');
const alertBox = document.querySelector('.alert');
const btnAlert = document.getElementById('btn-alert');
const thPlayers = document.querySelectorAll('.th-players')
const tdPlayers = document.querySelectorAll('.td-players')

const btnStart = document.getElementById('btn-roll');
const images = document.querySelectorAll('.img-for-game');
const showWinner = document.getElementById('p-winner');
const imagesName = document.querySelectorAll('.image-name');

let playerOne = document.getElementById('player-name-one');
let playerTwo = document.getElementById('player-name-two');




btnSubmit.addEventListener('click', ()=> {
    
    if(inputPlayers[0].value === '' || inputPlayers[1].value === '') {
        alertBox.style.display = 'block';
        btnAlert.addEventListener('click', ()=> {
            alertBox.style.display ='none';
        })
        return;
    } else {
        playerOne.textContent = inputPlayers[0].value;
        thPlayers[0].textContent = inputPlayers[0].value;
        playerTwo.textContent = inputPlayers[1].value;
        thPlayers[1].textContent = inputPlayers[1].value;
        formRegister.style.display = 'none';
        gameSection.style.display = 'flex';
    };
});



btnStart.addEventListener('click', () => {
    for ( let i =0; i < images.length; i++){

        images[i].setAttribute('src', getRandomImage());
        let atrribute = images[i].getAttribute('src');

        if(atrribute === "/images/rock.png") {
            imagesName[i].textContent = "ROCK";
        } else if(atrribute === "/images/paper.png") {
            imagesName[i].textContent = "PAPER";
        } else {
            imagesName[i].textContent = "SCISSORS";
        };
    };
    conditionWinning();
});



//Creating function to generate a random image
function getRandomImage() {
    let randomIMG = '';
    for( let i = 0; i < photos.length; i++) {
        randomIMG = photos[Math.floor(Math.random() * photos.length)].src;
    };
    return randomIMG;
};



//Condition for winning the roll
function conditionWinning() {
    if (imagesName[0].textContent === imagesName[1].textContent ) {
        showWinner.textContent = 'Equality';
        return;
    } else if( imagesName[0].textContent === "ROCK" && imagesName[1].textContent === "PAPER") {
        showWinner.textContent = `${playerTwo.textContent} is winner`;
        tdPlayers[1].textContent ++;
        return;
    }  else if( imagesName[0].textContent === "SCISSORS" && imagesName[1].textContent === "PAPER") {
        showWinner.textContent = `${playerOne.textContent} is winner`;
        tdPlayers[0].textContent ++;
        return;
    } else if ( imagesName[0].textContent === "PAPER" && imagesName[1].textContent === "ROCK") {
        showWinner.textContent = `${playerOne.textContent} is winner`;
        tdPlayers[0].textContent ++;
        return;
    } else if ( imagesName[0].textContent === "SCISSORS" && imagesName[1].textContent === "ROCK") {
        showWinner.textContent = `${playerTwo.textContent} is winner`;
        tdPlayers[1].textContent ++;
        return;
    } else if ( imagesName[0].textContent === "ROCK" && imagesName[1].textContent === "SCISSORS") {
        showWinner.textContent = `${playerOne.textContent} is winner`;
        tdPlayers[0].textContent ++;
        return;
    } else if ( imagesName[0].textContent === "PAPER" && imagesName[1].textContent === "SCISSORS") {
        showWinner.textContent = `${playerTwo.textContent} is winner`;
        tdPlayers[1].textContent ++;
        return;
    }

};



