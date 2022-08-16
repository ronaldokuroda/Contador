const CURRENT_NUMBER = document.getElementById('currentNumber');
let count = 0;
let incremento = document.querySelector("#btnadc");
let decremento = document.querySelector("btnsub");

function increment() {
    count++;
	CURRENT_NUMBER.innerHTML = count;

    if ( count >= 10){
        
        incremento.setAttribute("disabled", "true");
    } 

    if (count >= 0 ){
        CURRENT_NUMBER.style.color = 'black';
    }


}

function decrement() {
	count--;
	CURRENT_NUMBER.innerHTML = count;

    if (count <= 10 ){
        incremento.removeAttribute("disabled", "false");
    }
    
    if (count <= -1 ){
        CURRENT_NUMBER.style.color = 'red';
    }

}
