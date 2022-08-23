getAdvice();
document.getElementsByClassName("dice-circle")[0].addEventListener('click', (event) => {
   getAdvice();
});
 function getAdvice() {
     fetch('https://api.adviceslip.com/advice')
         .then((response) => response.json())
         .then((json) => {
                 let number = json.slip.id;
                 let advice = json.slip.advice;
                 document.getElementById("number").innerText = number;
                 document.getElementById("advice").innerText = "\"" + advice + "\"";
             }
         );
 }