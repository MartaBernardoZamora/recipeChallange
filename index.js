
const counterTime=document.querySelector('.main__resources__timmer__settime p');
const startButton=document.querySelector('.main__resources__timmer__start button');
let secondsMark;
let second=0;

function handleCountTimmer(optionButton){
    handleEndTimmer("Comenzar");
    const getTime= optionButton.textContent.padStart(2, '0');
    counterTime.textContent=`0:${getTime}`;
}
function handleMinuteTime(){
    second=0;    
    const getTime= Number(counterTime.textContent.slice(2))-1;
    const setTime=getTime.toString().padStart(2, '0');
    counterTime.textContent=`0:${setTime}`;
    setTime=='00' && handleEndTimmer("Comenzar");
    setTime=='00' && alert("Tiempo finalizado");
}
function handleEndTimmer(buttonText){
    clearInterval(secondsMark);
    startButton.textContent=buttonText;
}
function handleStarTimmer(){
    let buttonCurrentText= startButton.textContent;
    if(buttonCurrentText=="Comenzar"  && counterTime.textContent != "0:00" || buttonCurrentText=="Continuar"){
        startButton.textContent="Pausar";
        secondsMark = setInterval(() => {
            counterTime.textContent = counterTime.textContent.includes(":")
            ? counterTime.textContent.replace(":", " ")
            : counterTime.textContent.replace(" ", ":");
            second++;
            second === 5 && handleMinuteTime();
        }, 1000);
    }else{
        counterTime.textContent == "0:00" ? alert("Elige un tiempo para la cuenta atrás") : handleEndTimmer("Continuar");
    }
}
window.onload = () =>{
    [...document.querySelectorAll('.main__resources__timmer__options__option')].map((optionButton=>{
        optionButton.onclick = () => handleCountTimmer(optionButton);

    }));
    document.querySelector('.main__resources__timmer__start button').onclick = (e) => handleStarTimmer();
}
