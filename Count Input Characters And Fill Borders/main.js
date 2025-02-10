const inp = document.querySelector("input[type='text']");
const progress = document.querySelector(".progress");
const counter = document.querySelector("span.counter");
const maxLen = inp.maxLength;

counter.textContent = maxLen;

inp.oninput = () => {
    const len = inp.value.length;
    const ratio = len / maxLen;
    counter.textContent = maxLen - len;
    progress.style.width = `${ratio * 100}%`;
    counter.classList.toggle("zero", len === maxLen);
};
