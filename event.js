let convert = document.querySelector(".convert");
let textarea = document.querySelector(".textarea");
let speech = new SpeechSynthesisUtterance();
console.log(speech);
convert.addEventListener("click",() => {
speech.text = textarea.value;
speech.pitch = 0.5;
speech.volume = 1;
speech.lang = "en-US";
speech.rate =1;
speechSynthesis.speak (speech);
});