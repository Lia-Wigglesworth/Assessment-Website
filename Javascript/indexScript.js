function displayimg2() {
    if (document.getElementById("greencat3").style.opacity = "100%") {
        document.getElementById("greencat3").style.visibility = "hidden";
        document.getElementById("threedots1").style.opacity = "0%";
       document.getElementById("threedots2").style.opacity = "100%";
        document.getElementById("greencat").style.visibility = "visible";}
    }
    function displayimg3() {
    if (document.getElementById("greencat3").style.visibility = "hidden") {
        document.getElementById("greencat").style.visibility = "hidden";
        document.getElementById("threedots2").style.opacity = "0%";
       document.getElementById("threedots3").style.opacity = "100%";
        document.getElementById("greencat2").style.visibility = "visible";}
    }
    function displayimg1() {
    if (document.getElementById("greencat").style.visibility = "hidden") {
        document.getElementById("greencat2").style.visibility = "hidden";
        document.getElementById("threedots3").style.opacity = "0%";
       document.getElementById("threedots1").style.opacity = "100%";
        document.getElementById("greencat3").style.visibility = "visible";}
    }