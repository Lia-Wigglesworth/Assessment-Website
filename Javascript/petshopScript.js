 /*function for the menu*/
    /*cat section*/
    function Catsmenu() {
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        }
        function offCatsmenu() {
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        }
        function clickCat() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("mainheader").innerHTML = "Cat Items";
        document.getElementById("location").innerHTML = "Cats";
        document.getElementById("description").innerHTML = "Our range of cat products includes both dry and wet food from reputable and trusted brands, several different treats, multiple enjoyable and safe toys for your cat to play with, items for grooming and health, scratchers, litter and litter boxes, crates and carriers, and collars!"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        /*main options*/
        function Catoption1() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("suboption1").style.display = "block";
        document.getElementById("suboption2").style.display = "block";
        document.getElementById("suboption3").style.display = "block";    
        }
        function offCatoption1() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.backgroundColor = "lightgrey";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("suboption1").style.display = "none";
        document.getElementById("suboption2").style.display = "none";
        document.getElementById("suboption3").style.display = "none";
        }
        function clickCatoption1() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Food";
        document.getElementById("location").innerHTML = "Cats > Food";
        document.getElementById("paragraph1Catfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "We offer many different types of cat food, designed to be nutritious and healthy for your pet! These foods have also been designed so that they are appealing to the cats and are easy for them to eat. If you have any questions regarding what type of food to buy, how much to feed your pet, or if they should be eating dry or wet food, don't hesitate to contact the staff and ask!";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function expandoptions1Click() {
        document.getElementById("paragraph1Catpart2").style.display = "block";
        document.getElementById("paragraph1Catpart1").style.display = "none";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        }
        function closeoptions1Click() {
        document.getElementById("paragraph1Catpart2").style.display = "none";
        document.getElementById("paragraph1Catpart1").style.display = "block";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        }
        function expandoptions2Click() {
        if (document.getElementById("paragraph1Dogpart1").style.display != "none") {
        document.getElementById("paragraph1Dogpart2").style.display = "block";
        document.getElementById("paragraph1Dogpart1").style.display = "none";
        document.getElementById("paragraph1Dogpart3").style.display = "none";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        }
        else {
        document.getElementById("paragraph1Dogpart2").style.display = "none";
        document.getElementById("paragraph1Dogpart1").style.display = "block";
        document.getElementById("paragraph1Dogpart3").style.display = "none";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        }
        }
        function expandoptions3Click() {
        document.getElementById("paragraph1Dogpart2").style.display = "none";
        document.getElementById("paragraph1Dogpart1").style.display = "none";
        document.getElementById("paragraph1Dogpart3").style.display = "block";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        }
        function Catoption2() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption2").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        }
        function offCatoption2() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption2").style.backgroundColor = "lightgrey";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        }
        function clickCatoption2() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Toys";
        document.getElementById("location").innerHTML = "Cats > Toys";
        document.getElementById("paragraph1Cattoys").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Cat toys provide entertainment, mental and physical stimulation and enjoyment for you and your cat. These simple toys can help to keep your cat content and prevent unwanted behaviours.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Catoption3() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offCatoption3() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickCatoption3() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Essentials";
        document.getElementById("location").innerHTML = "Cats > Essentials";
        document.getElementById("paragraph1Catessentials").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "These essentials are necessary to caring for your cat and include all the items that you will need. Our range of items have been designed to enhance the health, safety, comfort and appearance of your pet. Essentials include crates, collars, grooming items, scratchers, litter and litter boxes.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        /*sub-options for cat section*/
        function Suboption1() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption1").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption1").style.display = "block";
        document.getElementById("suboption2").style.display = "block";
        document.getElementById("suboption3").style.display = "block";
        }
        function offSuboption1() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption1").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption1").style.display = "none";
        document.getElementById("suboption2").style.display = "none";
        document.getElementById("suboption3").style.display = "none";
        }
        function clickSuboption1() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Dry Food";
        document.getElementById("location").innerHTML = "Cats > Food > Dry";
        document.getElementById("paragraph1Catdryfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption2() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption2").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption1").style.display = "block";
        document.getElementById("suboption2").style.display = "block";
        document.getElementById("suboption3").style.display = "block";
        }
        function offSuboption2() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption2").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption1").style.display = "none";
        document.getElementById("suboption2").style.display = "none";
        document.getElementById("suboption3").style.display = "none";
        }
        function clickSuboption2() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Wet Food";
        document.getElementById("location").innerHTML = "Cats > Wet > Dry";
        document.getElementById("paragraph1Catwetfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Many cat nutrition experts recommend that you do not only feed your cat dry food. Dry food averages around 7-12% water content which means that it is easy for your cat to become dehydrated if they do not drink enough water. Dry food also has a high sodium content, and overall this can cause urinary tract issues and health complications. This is one of the benefits of wet cat food as it is normally around 70% moisture content, which is similar to prey that cats would naturally hunt. It also contains more protein and less carbohydrates. This helps with losing excess weight. Wet cat food is also useful for kittens as it makes for an easy transition from milk or formula to solids. ";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }  
        function Suboption3() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption3").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption1").style.display = "block";
        document.getElementById("suboption2").style.display = "block";
        document.getElementById("suboption3").style.display = "block";
        }
        function offSuboption3() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption3").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption1").style.display = "none";
        document.getElementById("suboption2").style.display = "none";
        document.getElementById("suboption3").style.display = "none";
        }
        function clickSuboption3() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Treats";
        document.getElementById("location").innerHTML = "Cats > Food > Treats";
        document.getElementById("paragraph1Cattreats").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Many cat treats do a good job of supplementing your cat's diet, providing additional nutrition and benefits that they can't get from their regular food. Treats provide the opportunity for important one-on-one time with your cat and can go a long way toward strengthening your bond. While cats don't require treats and it can be bad for their health in excess, occassional treats are beneficial.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption4() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption4").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offSuboption4() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption4").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickSuboption4() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Crates & Carriers";
        document.getElementById("location").innerHTML = "Cats > Essentials > Crates";
        document.getElementById("paragraph1Catcrates").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "While people tend to talk about crates for dogs more than they do for cats, crates are important for transporting cats, even just to the vet or another home. Unlike dogs you can not simply place a cat in the front or back seat as they could jump around or escape when possible. They could also distract the driver which could result in a crash.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption5() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption5").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offSuboption5() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption5").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickSuboption5() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Collars";
        document.getElementById("location").innerHTML = "Cats > Essentials > Collars";
        document.getElementById("paragraph1Catcollars").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Cat collars hold identification and registration tags. This is critical in case your cat becomes lost and needs to be identified. Without collars it is difficult for the cat to be returned and they could be seen as a stray and taken to a shelter. Some of the collars that we offer also contain bells or make other noises which scare off potential prey from the cat when they get too close.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption6() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption6").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offSuboption6() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption6").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickSuboption6() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Grooming Items";
        document.getElementById("location").innerHTML = "Cats > Essentials > Grooming";
        document.getElementById("paragraph1Catgrooming").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Regular grooming for long or medium haired cats is important for your cat's health and wellbeing, as well as their appearance. An untended coat can become long, matted, and uncomfortable for your pet. Grooming helps rid the coat of shed hair and dead skin while spreading natural oils. It is also important to clip your cats nails regularly and to clean their ears and eyes to improve their senses and lower risk of infection.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption7() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption7").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offSuboption7() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption7").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickSuboption7() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Scratchers";
        document.getElementById("location").innerHTML = "Cats > Essentials > Scratchers";
        document.getElementById("paragraph1Catscratcher").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "Cats scratch and climb to leave their scent and visual markings, to sharpen their claws and to stretch their legs. Instead of declawing your cat, provide a scratching post where normal scratching can safely be practiced. This will protect your property while also allowing natural behaviours and not frustrating your cat.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        function Suboption8() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption1").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("catoption1").style.display = "block";
        document.getElementById("catoption2").style.display = "block";
        document.getElementById("catoption3").style.display = "block";
        document.getElementById("catoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption8").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption4").style.display = "block";
        document.getElementById("suboption5").style.display = "block";
        document.getElementById("suboption6").style.display = "block";
        document.getElementById("suboption7").style.display = "block";
        document.getElementById("suboption8").style.display = "block";
        }
        function offSuboption8() {
        document.getElementById("mainoption1").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption1").style.border = "none";
        document.getElementById("catoption1").style.display = "none";
        document.getElementById("catoption2").style.display = "none";
        document.getElementById("catoption3").style.display = "none";
        document.getElementById("catoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption8").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption4").style.display = "none";
        document.getElementById("suboption5").style.display = "none";
        document.getElementById("suboption6").style.display = "none";
        document.getElementById("suboption7").style.display = "none";
        document.getElementById("suboption8").style.display = "none";
        }
        function clickSuboption8() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Cat Litter";
        document.getElementById("location").innerHTML = "Cats > Essentials > Litter";
        document.getElementById("paragraph1Catlitter").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "A well-kept litter box not only helps a cat stay mentally and physically healthy, but it also allows our feline companions to remain interested in using it for doing their “business”. Otherwise, they could opt for a cleaner area of the house which may or may not contain a litter box.";
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        }
        /*dog section*/
        function Dogsmenu() {
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        }
        function offDogsmenu() {
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        }
        function clickDog() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("paragraph1Dog").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("mainheader").innerHTML = "Dog Items";
        document.getElementById("location").innerHTML = "Dogs";
        document.getElementById("description").innerHTML = "Our range of dog products includes both dry and wet food from reputable and trusted brands, several different treats, multiple enjoyable and safe toys for your dog to play with, items for grooming and health, scratchers, litter and litter boxes, crates and carriers, and collars!"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView(); 
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        /*main options for dog section*/
        function Dogoption1() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("suboption9").style.display = "block";
        document.getElementById("suboption10").style.display = "block";
        document.getElementById("suboption11").style.display = "block";
        }
        function offDogoption1() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.backgroundColor = "lightgrey";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("suboption9").style.display = "none";
        document.getElementById("suboption10").style.display = "none";
        document.getElementById("suboption11").style.display = "none";
        }
        function clickDogoption1() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Food";
        document.getElementById("location").innerHTML = "Dogs > Food";
        document.getElementById("paragraph1Dogfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Dogoption2() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption2").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        }
        function offDogoption2() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption2").style.backgroundColor = "lightgrey";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        }
        function clickDogoption2() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Toys";
        document.getElementById("location").innerHTML = "Dogs > Toys";
        document.getElementById("paragraph1Dogtoys").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Dogoption3() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offDogoption3() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickDogoption3() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Essentials";
        document.getElementById("location").innerHTML = "Dogs > Essentials";
        document.getElementById("paragraph1Dogessentials").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        /*sub-options*/
        function Suboption9() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption9").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption9").style.display = "block";
        document.getElementById("suboption10").style.display = "block";
        document.getElementById("suboption11").style.display = "block";
        }
        function offSuboption9() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption9").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption9").style.display = "none";
        document.getElementById("suboption10").style.display = "none";
        document.getElementById("suboption11").style.display = "none";
        }
        function clickSuboption9() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Dry Food";
        document.getElementById("location").innerHTML = "Cats > Food > Dry";
        document.getElementById("paragraph1Dogdryfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption10() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption10").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption9").style.display = "block";
        document.getElementById("suboption10").style.display = "block";
        document.getElementById("suboption11").style.display = "block";
        }
        function offSuboption10() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption10").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption9").style.display = "none";
        document.getElementById("suboption10").style.display = "none";
        document.getElementById("suboption11").style.display = "none";
        }
        function clickSuboption10() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Wet Food";
        document.getElementById("location").innerHTML = "Cats > Food > Wet";
        document.getElementById("paragraph1Dogwetfood").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption11() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption1").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption11").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption9").style.display = "block";
        document.getElementById("suboption10").style.display = "block";
        document.getElementById("suboption11").style.display = "block";
        }
        function offSuboption11() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption1").style.backgroundColor = "lightgrey";
        document.getElementById("suboption11").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption9").style.display = "none";
        document.getElementById("suboption10").style.display = "none";
        document.getElementById("suboption11").style.display = "none";
        }
        function clickSuboption11() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Treats";
        document.getElementById("location").innerHTML = "Cats > Food > Treats";
        document.getElementById("paragraph1Dogtreats").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption12() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption12").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offSuboption12() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption12").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickSuboption12() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Bedding";
        document.getElementById("location").innerHTML = "Cats > Essentials > Beds";
        document.getElementById("paragraph1Dogbeds").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption13() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption13").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offSuboption13() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption13").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickSuboption13() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Leads & Collars";
        document.getElementById("location").innerHTML = "Cats > Essentials > Leads/Collars";
        document.getElementById("paragraph1Dogcollars").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption14() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption14").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offSuboption14() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption14").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickSuboption14() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Crates";
        document.getElementById("location").innerHTML = "Cats > Essentials > Crates";
        document.getElementById("paragraph1Dogcrates").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption15() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption15").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offSuboption15() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption15").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickSuboption15() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Clothing & Accessories";
        document.getElementById("location").innerHTML = "Cats > Essentials > Clothing/Accessories";
        document.getElementById("paragraph1Dogclothing").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Doggrooming").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }
        function Suboption16() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(167, 167, 167, 0.8)";
        document.getElementById("mainoption2").style.border = "1px solid var(--middlegrey)"; 
        document.getElementById("dogoption1").style.display = "block";
        document.getElementById("dogoption2").style.display = "block";
        document.getElementById("dogoption3").style.display = "block";
        document.getElementById("dogoption3").style.backgroundColor = "rgba(187, 187, 187)";
        document.getElementById("suboption16").style.backgroundColor = "rgb(196, 199, 192)";
        document.getElementById("suboption12").style.display = "block";
        document.getElementById("suboption13").style.display = "block";
        document.getElementById("suboption14").style.display = "block";
        document.getElementById("suboption15").style.display = "block";
        document.getElementById("suboption16").style.display = "block";
        }
        function offSuboption16() {
        document.getElementById("mainoption2").style.backgroundColor = "rgba(211, 211, 211, 0.1)";
        document.getElementById("mainoption2").style.border = "none";
        document.getElementById("dogoption1").style.display = "none";
        document.getElementById("dogoption2").style.display = "none";
        document.getElementById("dogoption3").style.display = "none";
        document.getElementById("dogoption3").style.backgroundColor = "lightgrey";
        document.getElementById("suboption16").style.backgroundColor = "rgb(211, 214, 206)";
        document.getElementById("suboption12").style.display = "none";
        document.getElementById("suboption13").style.display = "none";
        document.getElementById("suboption14").style.display = "none";
        document.getElementById("suboption15").style.display = "none";
        document.getElementById("suboption16").style.display = "none";
        }
        function clickSuboption16() {
        document.getElementById("paragraph1main").style.display = "none";
        document.getElementById("paragraph1items").style.display = "none";
        document.getElementById("mainheader").innerHTML = "Dog Grooming Items";
        document.getElementById("location").innerHTML = "Cats > Essentials > Grooming";
        document.getElementById("paragraph1Doggrooming").style.display = "block";
        document.getElementById("sidebar").style.display = "block";
        document.getElementById("description").innerHTML = "N/A"; 
        var elmnt = document.getElementById("mainheader");
        elmnt.scrollIntoView();
        /*all pages that have to be hidden*/
        document.getElementById("paragraph1Dog").style.display = "none";
        document.getElementById("paragraph1Dogfood").style.display = "none";
        document.getElementById("paragraph1Dogtoys").style.display = "none";
        document.getElementById("paragraph1Dogessentials").style.display = "none";
        document.getElementById("paragraph1Dogdryfood").style.display = "none";
        document.getElementById("paragraph1Dogwetfood").style.display = "none";
        document.getElementById("paragraph1Dogtreats").style.display = "none";
        document.getElementById("paragraph1Dogbeds").style.display = "none";
        document.getElementById("paragraph1Dogcollars").style.display = "none";
        document.getElementById("paragraph1Dogcrates").style.display = "none";
        document.getElementById("paragraph1Dogclothing").style.display = "none";
        document.getElementById("paragraph1Cat").style.display = "none";
        document.getElementById("paragraph1Catfood").style.display = "none";
        document.getElementById("paragraph1Cattoys").style.display = "none";
        document.getElementById("paragraph1Catessentials").style.display = "none";
        document.getElementById("paragraph1Catwetfood").style.display = "none";
        document.getElementById("paragraph1Catdryfood").style.display = "none";
        document.getElementById("paragraph1Cattreats").style.display = "none";
        document.getElementById("paragraph1Catcrates").style.display = "none";
        document.getElementById("paragraph1Catcollars").style.display = "none";
        document.getElementById("paragraph1Catgrooming").style.display = "none";
        document.getElementById("paragraph1Catscratcher").style.display = "none";
        document.getElementById("paragraph1Catlitter").style.display = "none";
        }