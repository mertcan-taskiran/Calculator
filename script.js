let screen = document.getElementById("screen");

function dis(value){
    screen.value += value;
}

function clr(){
    screen.value = "";
}

function backspace(){
    screen.value = screen.value.substring(0, screen.value.length - 1);
}

function solve(){
    let x = screen.value;
    let y = eval(x);
    screen.value = y;
}

screen.addEventListener("keypress", function(event) {
    if (event.key == "Enter") {    
      document.getElementById("solve").click();
    }
  });
