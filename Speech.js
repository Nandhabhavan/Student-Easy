// get references to the input and button elements
var input = document.getElementById("text-input");
var button = document.getElementById("speak-button");

// create a new instance of the SpeechSynthesisUtterance object
var msg = new SpeechSynthesisUtterance();

// set the voice to a female voice
var voices = window.speechSynthesis.getVoices();
msg.voice = voices.find(function(voice) {
return voice.name === 'Microsoft Zira';
});

// set the pitch and rate of the voice
msg.pitch = 1.0;
msg.rate = 1.0;

// add a click event listener to the button
button.addEventListener("click", function() {
// set the text that you want to synthesize
msg.text = input.value;

// speak the text
window.speechSynthesis.speak(msg);
});