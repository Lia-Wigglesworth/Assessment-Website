
function arrowClick() {
    if (document.getElementById("reviews3").style.display == "none") {
    document.getElementById("reviews1").style.display = "none";
    document.getElementById("reviews2").style.display = "none";
    document.getElementById("reviews3").style.display = "block";
    document.getElementById("arrow").style.transform = "translate(0,50px)";
    }
    else {
    document.getElementById("reviews1").style.display = "block";
    document.getElementById("reviews2").style.display = "block";
    document.getElementById("reviews3").style.display = "none";
    document.getElementById("arrow").style.transform = "translate(0,0px)";
    }
}
function expansion1() {
    if (document.getElementById("yourFeedback").style.display == "block") {
    document.getElementById("yourFeedback").style.display = "none";
    }
    else {
    document.getElementById("yourFeedback").style.display = "block";
    }
}
function expansion2() {
    if (document.getElementById("description").style.display == "block") {
    document.getElementById("description").style.display = "none";
    }
    else {
    document.getElementById("description").style.display = "block";
    }
}
function expansion3() {
    if (document.getElementById("infotable").style.display == "block") {
    document.getElementById("infotable").style.display = "none";
    }
    else {
    document.getElementById("infotable").style.display = "block";
    }
}