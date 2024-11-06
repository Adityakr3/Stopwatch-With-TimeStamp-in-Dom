const minTag = document.querySelector('.minute');
const secTag = document.querySelector('.second');
const minisecTag = document.querySelector('.minisecond')
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const timestamp = document.getElementById('timestamp');

let min = 0;
let sec = 0;
let minisec = 0;
let temp = false;


function timer(){
    if(temp){
        minisec+=10;
        if(minisec==1000){
            sec+=1
            minisec=0;
            if(sec==60){
                min+=1
                sec=0;
            }
        }
    }
    minTag.textContent = concateZero(min)
    secTag.textContent = concateZero(sec)
    minisecTag.textContent = concateZero(minisec / 10); 
}

let intervel = null;

startBtn.addEventListener("click",function(){
      if(!temp){
        intervel = setInterval(timer,10);
        temp = true;
      }
})

stopBtn.addEventListener('click',function(){
    if(temp){
        clearInterval(intervel);
        temp = false;
    }
    addtimeStamp()
})

resetBtn.addEventListener("click",function(){
    clearInterval(intervel);
    temp = false;
    min = 0;
    sec = 0;
    minisec = 0;
    minTag.textContent = "00";
    secTag.textContent = "00";
    minisecTag.textContent = "00";
})

function concateZero(time){
    if(time <= 9)return '0' + time;
    return time;
}


function addtimeStamp(){
    const formattedTime = `${concateZero(min)}:${concateZero(sec)}:${concateZero(minisec/10)}`;
    const time = new Date().toLocaleString();
    let timestampElement = document.createElement('div')
    timestampElement.classList.add('border-white', 'border-2', 'rounded', 'p-6', 'mt-2')
    timestampElement.textContent = `Stopped at: ${formattedTime} (Timestamp: ${time})`;
    timestamp.appendChild(timestampElement)
}