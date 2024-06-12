let typingBool = false;
let typingIndex = 0;
let typingInt;

const Text = document.getElementById("typing-text");
const typing = document.getElementById("typing");
const typingText = Text.innerText.split("");

if (typingBool == false) {
  typingBool = true;
  typingInt = setInterval(typingHandler, 50);
}

function typingHandler() {
  if (typingIndex < typingText.length) {
    typing.append(typingText[typingIndex]);
    typingIndex++;
  } else {
    clearInterval(typingInt);
  }
}
