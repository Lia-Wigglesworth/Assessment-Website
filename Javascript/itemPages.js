
/*function for expanding the reviews across the different pages*/
function arrowClick() {
    if (document.getElementById("reviews3").style.display != "block") {
    document.getElementById("reviews1").style.display = "none";
    document.getElementById("reviews2").style.display = "none";
    document.getElementById("reviews3").style.display = "block";
    document.getElementById("arrow").style.transform = "translate(0,20px)";
    }
    else {
    document.getElementById("reviews1").style.display = "block";
    document.getElementById("reviews2").style.display = "block";
    document.getElementById("reviews3").style.display = "none";
    document.getElementById("arrow").style.transform = "translate(0,0px)";
    }
}
function arrowClick2() {
    if (document.getElementById("reviews3").style.display != "block") {
    document.getElementById("reviews1").style.display = "none";
    document.getElementById("reviews2").style.display = "none";
    document.getElementById("reviews3").style.display = "block";
    document.getElementById("arrow").style.transform = "translate(0,35px)";
    }
    else {
    document.getElementById("reviews1").style.display = "block";
    document.getElementById("reviews2").style.display = "block";
    document.getElementById("reviews3").style.display = "none";
    document.getElementById("arrow").style.transform = "translate(0,0px)";
    }
}
function arrowClick3() {
    if (document.getElementById("reviews3").style.display != "block") {
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
/*function for changing your rating of product*/
function clickRating() {
document.getElementById("yourRating").style.display = "none";
document.getElementById("yourRating1").style.display = "block";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "none";
}
function clickRating1() {
document.getElementById("yourRating").style.display = "none";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "block";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "none";
}
function clickRating2() {
document.getElementById("yourRating").style.display = "none";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "block";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "none";
}
function clickRating3() {
document.getElementById("yourRating").style.display = "none";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "block";
document.getElementById("yourRating5").style.display = "none";
}
function clickRating4() {
document.getElementById("yourRating").style.display = "none";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "block";
}
function clickRating5() {
document.getElementById("yourRating").style.display = "block";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "none";
}
/*function to submit the rating*/
function clicksubmitRating() {
document.getElementById("yourRating").style.display = "block";
document.getElementById("yourRating1").style.display = "none";
document.getElementById("yourRating2").style.display = "none";
document.getElementById("yourRating3").style.display = "none";
document.getElementById("yourRating4").style.display = "none";
document.getElementById("yourRating5").style.display = "none";
window.alert("Your form has been submitted");
window.location.reload();
}
/*function for expanding different paragraphs*/
/*expansion 1 for feedback*/
function expansion1() {
    /*all expansions are open*/
    if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("yourFeedback").style.display = "none";
    document.getElementById("information").style.transform = "translate(0,0)";
    document.getElementById("mainimage").style.height = "480px";
    document.getElementById("informationbackground").style.height = "1010px";
    document.getElementById("subimagesbackground").style.height = "166px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 0)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 890px 150px";
    document.getElementById("information").style.height = "890px";
    }
    /*expansions 1 and 2 are open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("yourFeedback").style.display = "none";
    document.getElementById("information").style.transform = "translate(0,0)";
    document.getElementById("mainimage").style.height = "480px";
    document.getElementById("informationbackground").style.height = "610px";
    document.getElementById("subimagesbackground").style.height = "166px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 0)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 605px 150px";
    document.getElementById("information").style.height = "605px";
    }
    /*expansions 1 and 3 are open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("yourFeedback").style.display = "none";
    document.getElementById("information").style.transform = "translate(0,0)";
    document.getElementById("mainimage").style.height = "480px";
    document.getElementById("informationbackground").style.height = "780px";
    document.getElementById("subimagesbackground").style.height = "166px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 0)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 775px 150px";
    document.getElementById("information").style.height = "775px";
    }
    /*expansions 2 and 3 are open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("yourFeedback").style.display = "block";
    document.getElementById("information").style.transform = "translate(0,117px)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 772px 1000px 150px";
    document.getElementById("mainimage").style.height = "605px";
    document.getElementById("informationbackground").style.height = "1150px";
    document.getElementById("subimagesbackground").style.height = "240px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 125px)";
    document.getElementById("information").style.height = "885px";
    }
    /*only expansion 3 is open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("yourFeedback").style.display = "block";
    document.getElementById("information").style.transform = "translate(0,117px)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 772px 895px 150px";
    document.getElementById("mainimage").style.height = "605px";
    document.getElementById("informationbackground").style.height = "1010px";
    document.getElementById("subimagesbackground").style.height = "240px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 125px)";
    document.getElementById("information").style.height = "779px";
    }
    /*only expansion 1 is open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("yourFeedback").style.display = "none";
    document.getElementById("information").style.transform = "translate(0,0)";
    document.getElementById("mainimage").style.height = "480px";
    document.getElementById("informationbackground").style.height = "510px";
    document.getElementById("subimagesbackground").style.height = "166px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 0)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 500px 150px";
    document.getElementById("information").style.height = "500px";
    }
    /*only expansion 2 is open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("yourFeedback").style.display = "block";
    document.getElementById("information").style.transform = "translate(0,117px)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 772px 720px 150px";
    document.getElementById("mainimage").style.height = "605px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("subimagesbackground").style.height = "240px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 125px)";
    document.getElementById("information").style.height = "602px";
    } 
    /*no expansions are open*/
    else {
    document.getElementById("yourFeedback").style.display = "block";
    document.getElementById("information").style.transform = "translate(0,117px)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 772px 620px 150px";
    document.getElementById("mainimage").style.height = "605px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("subimagesbackground").style.height = "240px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 125px)";
    document.getElementById("information").style.height = "502px";
    }
}
/*expansion 2 for a description*/
function expansion2() {
    /*all expansions are open*/
    if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("description").style.display = "none";
    document.getElementById("informationbackground").style.height = "1010px";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 890px 150px";
    document.getElementById("information").style.height = "773px";
    }
    /*expansions 1 and 2 are open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("description").style.display = "none";
    document.getElementById("information").style.transform = "translate(0,117px)";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 640px 150px";
    document.getElementById("mainimage").style.height = "605px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("information").style.height = "523px";
    document.getElementById("subimagesbackground").style.height = "240px";
    document.getElementById("subimagesbackground").style.transform = "translate(0, 125px)";
    }
    /*expansions 1 and 3 are open*/
    else if((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("description").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 995px 150px";
    document.getElementById("informationbackground").style.height = "1200px";
    document.getElementById("information").style.height = "878px";
    }
    /*expansions 2 and 3 are open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("description").style.display = "none";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 780px 150px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("information").style.height = "803px";
    }
    /*only expansion 3 is open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("description").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 875px 150px";
    document.getElementById("informationbackground").style.height = "900px";
    document.getElementById("information").style.height = "875px";
    }
    /*only expansion 1 is open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("description").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 773px 740px 150px";
    document.getElementById("informationbackground").style.height = "830px"
    document.getElementById("information").style.height = "623px";
    }
    /*only expansion 2 is open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("description").style.display = "none";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 500px 150px";
    document.getElementById("informationbackground").style.height = "600px"
    document.getElementById("information").style.height = "550px";
    }
    /*no expansions are open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("description").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 620px 150px";
    document.getElementById("informationbackground").style.height = "650px"
    document.getElementById("information").style.height = "620px";
    }
}
/*expansion 3 for additional information*/
function expansion3() {
    /*all expansions are open*/
    if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("infotable").style.display = "none";
    document.getElementById("informationbackground").style.height = "950px";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 730px 150px";
    document.getElementById("information").style.height = "612px";
    }
    /*expansions 1 and 2 are open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("infotable").style.display = "block";
    document.getElementById("informationbackground").style.height = "1110px";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 1000px 150px";
    document.getElementById("information").style.height = "882px";
    }
    /*expansions 1 and 3 are open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("infotable").style.display = "none";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 774px 633px 150px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("information").style.height = "518px";
    }
    /*expansions 2 and 3 are open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("infotable").style.display = "none";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 605px 150px";
    document.getElementById("informationbackground").style.height = "610px";
    document.getElementById("information").style.height = "605px";
    }
    /*only expansion 3 is open*/
    else if ((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display == "block")) {
    document.getElementById("infotable").style.display = "none";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 500px 150px";
    document.getElementById("informationbackground").style.height = "510px";
    document.getElementById("information").style.height = "500px";
    }
    /*only expansion 1 is open*/
    else if ((document.getElementById("yourFeedback").style.display == "block") && (document.getElementById("description").style.display != "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("infotable").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 773px 895px 150px";
    document.getElementById("informationbackground").style.height = "1000px"
    document.getElementById("information").style.height = "777px";
    }
    /*only expansion 2 is open*/
    else if((document.getElementById("yourFeedback").style.display != "block") && (document.getElementById("description").style.display == "block") && (document.getElementById("infotable").style.display != "block")) {
    document.getElementById("infotable").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 880px 150px";
    document.getElementById("informationbackground").style.height = "890px"
    document.getElementById("information").style.height = "880px";
    }
    /*no expansions are open*/
    else {
    document.getElementById("infotable").style.display = "block";
    document.getElementById("wrapper").style.gridTemplateRows = "83px 42px 113px 690px 780px 150px";
    document.getElementById("informationbackground").style.height = "810px";
    document.getElementById("information").style.height = "790px";
    }
}
/*function for selecting sizes*/
function clicksize1() {
document.getElementById("size1").style.backgroundColor = "rgb(141, 155, 138)";
document.getElementById("size1").style.color = "rgb(238, 237, 236)";
document.getElementById("size2").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size2").style.color = "var(--darkgrey)";
document.getElementById("size3").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size3").style.color = "var(--darkgrey)";
document.getElementById("size4").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size4").style.color = "var(--darkgrey)";
document.getElementById("size5").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size5").style.color = "var(--darkgrey)";
document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size6").style.color = "var(--darkgrey)";
}
function clicksize2() {
document.getElementById("size2").style.backgroundColor = "rgb(141, 155, 138)";
document.getElementById("size2").style.color = "rgb(238, 237, 236)";
document.getElementById("size1").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size1").style.color = "var(--darkgrey)";
document.getElementById("size3").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size3").style.color = "var(--darkgrey)";
document.getElementById("size4").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size4").style.color = "var(--darkgrey)";
document.getElementById("size5").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size5").style.color = "var(--darkgrey)";
document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size6").style.color = "var(--darkgrey)";
}
function clicksize3() {
document.getElementById("size3").style.backgroundColor = "rgb(141, 155, 138)";
document.getElementById("size3").style.color = "rgb(238, 237, 236)";
document.getElementById("size1").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size1").style.color = "var(--darkgrey)";
document.getElementById("size2").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size2").style.color = "var(--darkgrey)";
document.getElementById("size4").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size4").style.color = "var(--darkgrey)";
document.getElementById("size5").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size5").style.color = "var(--darkgrey)";
document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size6").style.color = "var(--darkgrey)";
}
function clicksize4() {
document.getElementById("size4").style.backgroundColor = "rgb(141, 155, 138)";
document.getElementById("size4").style.color = "rgb(238, 237, 236)";
document.getElementById("size2").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size2").style.color = "var(--darkgrey)";
document.getElementById("size3").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size3").style.color = "var(--darkgrey)";
document.getElementById("size1").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size1").style.color = "var(--darkgrey)";
document.getElementById("size5").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size5").style.color = "var(--darkgrey)";
document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size6").style.color = "var(--darkgrey)";
}
function clicksize5() {
document.getElementById("size5").style.backgroundColor = "rgb(141, 155, 138)";
document.getElementById("size5").style.color = "rgb(238, 237, 236)";
document.getElementById("size2").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size2").style.color = "var(--darkgrey)";
document.getElementById("size3").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size3").style.color = "var(--darkgrey)";
document.getElementById("size4").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size4").style.color = "var(--darkgrey)";
document.getElementById("size1").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size1").style.color = "var(--darkgrey)";
document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
document.getElementById("size6").style.color = "var(--darkgrey)";
}
/*function for changing number using spin button*/
function leftspinbutton() {
if (document.getElementById("quantity").innerHTML == "1") {
    document.getElementById("quantity").innerHTML = "10"}
else if (document.getElementById("quantity").innerHTML == "10") {
    document.getElementById("quantity").innerHTML = "9"}
else if (document.getElementById("quantity").innerHTML == "9") {
    document.getElementById("quantity").innerHTML = "8"}
else if (document.getElementById("quantity").innerHTML == "8") {
    document.getElementById("quantity").innerHTML = "7"}
else if (document.getElementById("quantity").innerHTML == "7") {
    document.getElementById("quantity").innerHTML = "6"}
else if (document.getElementById("quantity").innerHTML == "6") {
    document.getElementById("quantity").innerHTML = "5"}
else if (document.getElementById("quantity").innerHTML == "5") {
    document.getElementById("quantity").innerHTML = "4"}
else if (document.getElementById("quantity").innerHTML == "4") {
    document.getElementById("quantity").innerHTML = "3"}
else if (document.getElementById("quantity").innerHTML == "3") {
    document.getElementById("quantity").innerHTML = "2"}
else {document.getElementById("quantity").innerHTML = "1"}
}
function rightspinbutton() {
if (document.getElementById("quantity").innerHTML == "1") {
    document.getElementById("quantity").innerHTML = "2"}
else if (document.getElementById("quantity").innerHTML == "2") {
    document.getElementById("quantity").innerHTML = "3"}
else if (document.getElementById("quantity").innerHTML == "3") {
    document.getElementById("quantity").innerHTML = "4"}
else if (document.getElementById("quantity").innerHTML == "4") {
    document.getElementById("quantity").innerHTML = "5"}
else if (document.getElementById("quantity").innerHTML == "5") {
    document.getElementById("quantity").innerHTML = "6"}
else if (document.getElementById("quantity").innerHTML == "6") {
    document.getElementById("quantity").innerHTML = "7"}
else if (document.getElementById("quantity").innerHTML == "7") {
    document.getElementById("quantity").innerHTML = "8"}
else if (document.getElementById("quantity").innerHTML == "8") {
    document.getElementById("quantity").innerHTML = "9"}
else if (document.getElementById("quantity").innerHTML == "9") {
    document.getElementById("quantity").innerHTML = "10"}
else {document.getElementById("quantity").innerHTML = "1"}
}
/*function for the add to cart button*/
function buttonClick() {
/*if any of the sizes have been seleted, unselect sizes and send message*/
    if ((document.getElementById("size1").style.color == "rgb(238, 237, 236)") || (document.getElementById("size2").style.color == "rgb(238, 237, 236)") || (document.getElementById("size3").style.color == "rgb(238, 237, 236)") || (document.getElementById("size4").style.color == "rgb(238, 237, 236)") || (document.getElementById("size5").style.color == "rgb(238, 237, 236)")) {
    window.alert("Item has been added to cart");
    document.getElementById("quantity").innerHTML = "1";
    document.getElementById("size1").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size1").style.color = "var(--darkgrey)";
    document.getElementById("size2").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size2").style.color = "var(--darkgrey)";
    document.getElementById("size3").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size3").style.color = "var(--darkgrey)";
    document.getElementById("size4").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size4").style.color = "var(--darkgrey)";
    document.getElementById("size5").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size5").style.color = "var(--darkgrey)";
    document.getElementById("size6").style.backgroundColor = "rgb(240, 240, 240)";
    document.getElementById("size6").style.color = "var(--darkgrey)";
    }
    else {
    window.alert("Please select a sizing option");
    }
}
function leftscrollItems() {
if (document.getElementById("itemspart1").style.display != "none") {
    document.getElementById("itemspart1").style.display = "none";
    document.getElementById("itemspart2").style.display = "block";
}
else {
    document.getElementById("itemspart1").style.display = "block";
    document.getElementById("itemspart2").style.display = "none";
}
}
function rightscrollItems() {
if (document.getElementById("itemspart1").style.display != "none") {
    document.getElementById("itemspart1").style.display = "none";
    document.getElementById("itemspart2").style.display = "block";
}
else {
    document.getElementById("itemspart1").style.display = "block";
    document.getElementById("itemspart2").style.display = "none";
}
}