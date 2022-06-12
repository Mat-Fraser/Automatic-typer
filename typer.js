const text =['some extra sugar...','chees cake...','cookies...','browine...'];
let count=0;
let index=0;
let currentText='';
let letter='';

(function typee() {
    if(count === text.length){
        count=0;
    }
    currentText = text[count];
    letter = currentText.slice(0,++index);

    document.querySelector('.typing').textContent =letter;
    if(letter.length === currentText.length){
        count++;
        index =0;
    }
    setTimeout(typee,200);
}());