//write our javascipt in here

var pics = [
    "kitty_bed.jpg",        //0
    "kitty_basket.jpg",     //1
    "kitty_laptop.jpg",     //2
    "kitty_door.jpg",       //3
    "kitty_sink.jpg",       //4
    "kitty_wall.jpg",       //5
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;

btn.addEventListener("click", function(){
    if(counter === 6){
        counter = 0;
    }
    img.src = pics[counter]
    counter = counter + 1;
    
});
