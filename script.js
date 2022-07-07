const adviceText = document.getElementById("advice-text");
const adviceID = document.getElementById("num");
const dice = document.getElementById("dice");
let advices = [];



dice.addEventListener('click', () => {
        loadAdvice();
    });

async function loadAdvice() {
    try {
            let response = await fetch("https://api.adviceslip.com/advice");
            let data = await response.json();
            advices = data;
            displayAdvices(advices)

    } catch (error) {
        console.error(`AN ERROR OCCURED: ${error}`);
       alert(`AN ERROR OCCURED:${error}
Please check your Internet!!`);
        
    }

};


function displayAdvices(param) {
adviceID.innerText = param.slip.id;
adviceText.innerText = param.slip.advice;
}