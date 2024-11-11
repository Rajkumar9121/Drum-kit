for(var i=0; i<(document.querySelectorAll(".drum").length); i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        buttonPress(button);
        animation(button);
    });
}

document.addEventListener("keydown",function(event){
    buttonPress(event.key);
    animation(event.key);
})

function animation(a){
    document.querySelector("." + a).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + a).classList.remove("pressed");
    },200);
}


function buttonPress(button){
    switch (button){
        case "r":
                var audio1 = new Audio("./sounds/crash.mp3");
                audio1.play();
                break;
        case "a":
            var audio2 = new Audio("sounds/kick-bass.mp3");
                audio2.play();
                break;
        case "j":
            var audio3 = new Audio("sounds/snare.mp3");
            audio3.play();
            break;
        case "k":
            var audio4 = new Audio("sounds/tom-1.mp3");
            audio4.play();
            break;
        case "u":
            var audio5 = new Audio("sounds/tom-2.mp3");
            audio5.play();
            break;
        case "m":
            var audio6 = new Audio("sounds/tom-3.mp3");
            audio6.play();
            break;
        case "A":
            var audio7 = new Audio("sounds/tom-4.mp3");
            audio7.play();
            break;
        case "R":
            var audio8 = new Audio("sounds/snare.mp3");
            audio8.play();
            break;
        default:
            console.log(button);
    
    
    }
}

