function changeText(){
    var userInput = prompt("Enter a color name for text")
   var textcolor = document.getElementsByTagName("h1")
   console.log(textcolor);
   textcolor[1].style.color = userInput
   textcolor[0].style.color = userInput
}

function changeBg(){
    var userInput = prompt("Enter a color name for background")
    var bgcolor = document.getElementsByTagName("div")
    bgcolor[0].style.backgroundColor =userInput
}

function bigImage(){
    var myImg = document.getElementById("myImg")
    myImg.className = "myImgbig"
}

function bigImage(){
    var myImg = document.getElementById("myImg")
    myImg.className = "myImgbig"
}

function smallImage(){
    var myImg = document.getElementById("myImg")
    myImg.className = "myImgsmall"
}

function hideImage(){
    var myImg = document.getElementById("myImg")
    myImg.className = "hidden"
}

function showImage(){
    var myImg = document.getElementById("myImg")
    myImg.className = "show"
}

function lighOn(){
    var lightBulb = document.getElementById("lightBulb")
    lightBulb.src ="./images/on.jpg"
}

function lighOff(){
    var lightBulb = document.getElementById("lightBulb")
    lightBulb.src ="./images/off.jpg"
}

function changeAllPara(){
    var changeAllPara = document.getElementsByTagName("p")
    var userInput = prompt("enter color")
    for (var i = 0 ; i<changeAllPara.length ; i++){
        changeAllPara[i].style.color = userInput
    }
}