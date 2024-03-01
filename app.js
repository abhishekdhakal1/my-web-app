let buttonAboutMe = document.querySelector("#aboutMe");
let currentMode = "";
let body = document.querySelector("body");
let buttonAboutMe1 = document.querySelector(".main");
buttonAboutMe.addEventListener("click",()=>{
    if(currentMode === "display"){
        currentMode = "none";
        buttonAboutMe1.style.display ="block";
        buttonAboutMe.innerText ="Hide";
        body.style.backgroundColor = "#db9c58";
    }
    else{
        currentMode = "display";
        buttonAboutMe1.style.display ="none";
        buttonAboutMe.innerText ="Display";
        body.style.backgroundColor = "white";
    }
})
