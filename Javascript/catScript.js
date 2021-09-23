/*function for expanding information and closing information on hover*/
/*part 1*/
function moreinfo1() {
document.getElementById("part1img1").style.opacity = "0%";
document.getElementById("info1").style.visibility = "visible";
document.getElementById("closeinfo1").style.opacity = "100%";
}
function lessinfo1() {
document.getElementById("part1img1").style.opacity = "100%";
}
function closeinfo1() {
document.getElementById("info1").style.visibility = "hidden";
document.getElementById("closeinfo1").style.opacity = "0%";
}
/*part 2*/
function moreinfo2() {
document.getElementById("part2img1").style.opacity = "0%";
document.getElementById("info2").style.visibility = "visible";
document.getElementById("closeinfo2").style.opacity = "100%";
}
function lessinfo2() {
document.getElementById("part2img1").style.opacity = "100%";
}
function closeinfo2() {
document.getElementById("info2").style.visibility = "hidden";
document.getElementById("closeinfo2").style.opacity = "0%";
}
/*part 3*/
function moreinfo3() {
document.getElementById("part3img1").style.opacity = "0%";
document.getElementById("info3").style.visibility = "visible";
document.getElementById("closeinfo3").style.opacity = "100%";
}
function lessinfo3() {
document.getElementById("part3img1").style.opacity = "100%";
}
function closeinfo3() {
document.getElementById("info3").style.visibility = "hidden";
document.getElementById("closeinfo3").style.opacity = "0%";
}
/*part 4*/
function moreinfo4() {
document.getElementById("info4").style.visibility = "visible";
document.getElementById("closeinfo4").style.opacity = "100%";
}
function closeinfo4() {
document.getElementById("info4").style.visibility = "hidden";
document.getElementById("closeinfo4").style.opacity = "0%";
}
/*part 5*/
function moreinfo5() {
document.getElementById("info5").style.visibility = "visible";
document.getElementById("closeinfo5").style.opacity = "100%";
}
function closeinfo5() {
document.getElementById("info5").style.visibility = "hidden";
document.getElementById("closeinfo5").style.opacity = "0%";
}
/*part 6*/
function moreinfo6() {
document.getElementById("info6").style.visibility = "visible";
document.getElementById("closeinfo6").style.opacity = "100%";
}
function closeinfo6() {
document.getElementById("info6").style.visibility = "hidden";
document.getElementById("closeinfo6").style.opacity = "0%";
}
/*functions for the side bar*/
function expandsidebar() {
    if (document.getElementById("sidebarinfo").style.visibility == "hidden") {
        document.getElementById("sidebarinfo").style.visibility = "visible";
        document.getElementById("sidebar").style.transform = "translate(-122px)";
        document.getElementById("closesidebar").style.opacity = "100%";
        document.getElementById("sidebar").innerHTML = ">"
    }
    else {
        document.getElementById("sidebarinfo").style.visibility = "hidden";
        document.getElementById("sidebar").style.transform = "translate(0px)";
        document.getElementById("closesidebar").style.opacity = "0%";
        document.getElementById("sidebar").innerHTML = "<";
    }
    }
/*side bar links*/
function gotoparagraph1() {
var elmnt = document.getElementById("paragraph1");
    elmnt.scrollIntoView();
}
function gotoparagraph2() {
var elmnt = document.getElementById("paragraph2");
    elmnt.scrollIntoView();
}
function gotoparagraph2h5() {
var elmnt = document.getElementById("paragraph2subheading");
    elmnt.scrollIntoView();
}
function gotoparagraph3() {
var elmnt = document.getElementById("paragraph3");
    elmnt.scrollIntoView();
}