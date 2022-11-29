const autoText = ['Made on the earth with love and peace...'];
const lettersText = autoText[0];
const numberLetters = lettersText.length;

function pulse() {
  for(let i = 0; i < numberLetters; i++) {      
    setTimeout( function(){
    $('.text-letters').append(lettersText[i]);
    }, i*200); 
  }
}

ScrollOut({
  targets: '.scroll-animate',
  once: true,
  onShown(el) {
    el.classList.add("new-animate");
    pulse();
  }
});