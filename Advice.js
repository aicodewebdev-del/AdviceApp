const adviceDisplay = document.getElementById('advice-text');
const advicebtn = document.getElementById('get-advice-btn');
async function fetchAdvice() {
    const response = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`);
    const data = await response.json();
    adviceDisplay.innerText = data.slip.advice;
    }
    advicebtn.addEventListener('click',fetchAdvice)

    