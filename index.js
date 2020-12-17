button1 = document.getElementById("button_1").addEventListener("click", clickButton1);
button2 = document.getElementById("button_2").addEventListener("click", clickButton2);
button3 = document.getElementById("button_3").addEventListener("click", clickButton3);
button4 = document.getElementById("button_4").addEventListener("click", clickButton4);

function clickButton1() {
    window.open("https://github.com/jdmclatcher", "_blank");
    document.getElementById("button_1").style.backgroundColor = "#D9EDFF";
    document.getElementById("button_1").style.color = "gray";
}
function clickButton2() {
    window.open("https://www.linkedin.com/in/jdmclatcher/", "_blank");
    document.getElementById("button_2").style.backgroundColor = "#D9EDFF";
    document.getElementById("button_2").style.color = "gray";
}
function clickButton3() {
    window.open("resume.html", "_blank");
    document.getElementById("button_3").style.backgroundColor = "#D9EDFF";
    document.getElementById("button_3").style.color = "gray";
}
function clickButton4() {
    window.open("mailto:jdmclatcher@gmail.com", "_blank");
    document.getElementById("button_4").style.backgroundColor = "#D9EDFF";
    document.getElementById("button_4").style.color = "gray";
}