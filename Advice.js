const adviceDisplay = document.getElementById("advice-text");
const advicebtn = document.getElementById("get-advice-btn");

async function fetchAdvice() {
  try {
    adviceDisplay.innerText = "Loading advice...";
    advicebtn.disabled = true;

    const response = await fetch(
      `https://api.adviceslip.com/advice?t=${Date.now()}`,
    );

    if (!response.ok) {
      throw new Error(` ${response.status}`);
    }

    const data = await response.json();

    adviceDisplay.innerText = `"${data.slip.advice}"`;
  } catch (error) {
    console.error("Error:", error);
    adviceDisplay.innerText =
      "ਸਲਾਹ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀ, ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।";
  } finally {
    advicebtn.disabled = false;
  }
}

advicebtn.addEventListener("click", fetchAdvice);

fetchAdvice();
