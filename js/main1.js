
//HEADER
//LOGO
var header=document.getElementById("header");
var logo=document.createElement("div");
header.appendChild(logo);
logo.setAttribute("id","logo");
var aTag=document.createElement("a");
aTag.setAttribute("href","index.html");
logo.appendChild(aTag);
var logoSlika=document.createElement("img");
logoSlika.setAttribute("src","img/logo.png");
logoSlika.setAttribute("alt","Logo");
aTag.appendChild(logoSlika);



function f(){
    //NAV
var nav=document.createElement("nav");
header.appendChild(nav);
var meniUl=document.createElement("ul");
nav.appendChild(meniUl);
var nizNav=["Početna", "Proizvodi", "Kontakt","Autor"];
var navLink=["index.html", "#", "kontakt.html", "autor.html"];
for(let i=0;i<nizNav.length;i++){
    var li=document.createElement("li");
    meniUl.appendChild(li);
    var link=document.createElement("a");
    li.appendChild(link);
    link.setAttribute("href",navLink[i]);
    link.innerHTML=nizNav[i];
    if(nizNav[i]=="Proizvodi"){
        var podmeniLi=document.getElementsByTagName("li")[i];
        podmeniLi.setAttribute("id","lizapodmeni");
        var podmeniA=document.getElementsByTagName("li a")[i];
    }
}
var podMeni=document.createElement("ul");
podmeniLi.appendChild(podMeni);
podMeni.setAttribute("id", "meni");
var podmeniNaz=["Devojčice", "Dečaci", "Program za bebe", "Društvene igre"];
var podmeniLink=["devojcice.html", "decaci.html", "bebi.html", "drusigre.html"];
for(let i=0;i<podmeniNaz.length;i++){
    var lipod=document.createElement("li");
    podMeni.appendChild(lipod);
    var linkPod=document.createElement("a");
    lipod.appendChild(linkPod);
    linkPod.setAttribute("href",podmeniLink[i]);
    linkPod.innerHTML=podmeniNaz[i];
}



//HAMBURGER
var divH=document.createElement("div");
header.appendChild(divH);
var linkHamburger=document.createElement("a");
divH.appendChild(linkHamburger);
linkHamburger.setAttribute("href","#");
var hamburger=document.createElement("i");
linkHamburger.appendChild(hamburger);
hamburger.setAttribute("class","fas fa-bars");
divH.setAttribute("class","hamburger none");




//PODMENI HOVER
 $(document).ready(function(){
     var podmeni=$("#meni");
     podmeni.addClass("none");
     var lipodmeni=$("#lizapodmeni");
     $(lipodmeni).hover(
         function(){podmeni.addClass("visible");},
         function(){podmeni.removeClass("visible");}
         );


         //SKROL ZA MENI
         $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
        
            if (scroll >= 50) {
                $("#header").addClass("scrolling");
                $('a') .addClass("scrollingA");
                $("#meni").addClass("scrolling");
            } else {
                $("#header").removeClass("scrolling");
                $('a') .removeClass("scrollingA");
                $("#meni").removeClass("scrolling");
            }

            $(".hamburger").click(
                function(){alert("radi");}
            );
        })
 });


}


var slajder=document.getElementById("slika");
var slika=document.createElement("img");
slajder.appendChild(slika);
slika.setAttribute("src","img/slajder3.jpeg");
slika.setAttribute("id","proba");
slika.setAttribute("alt","Slajder slika");

//FOOTER
var footer=document.getElementById("footer");
var naslovNiz=["Igracke", "Informacije", "Newsletter"];
for(let i=0;i<naslovNiz.length;i++){
    var footerBlokovi=document.createElement("div");
    footerBlokovi.setAttribute("class","footerB");
    footer.appendChild(footerBlokovi);
    var naslov=document.createElement("h3");
    var tekst=document.createElement("ul");
    tekst.setAttribute("id", "ul"+[i]);
    footerBlokovi.appendChild(naslov);
    footerBlokovi.appendChild(tekst);
    naslov.innerHTML=naslovNiz[i];
}

var nizLi=["Adresa:Beograd","Telefon:585-541","E-mail:igracke@gmail.com"];
for(let i=0;i<nizLi.length;i++){
    var prvi=document.getElementById("ul0");
    var liel=document.createElement("li");
    liel.innerHTML=nizLi[i];
    prvi.appendChild(liel);
}

var nizInfo=["Radno vreme:","Ponedeljak-Subota 9h-20h","Nedelja 9h-15h "];
for(let i=0;i<nizLi.length;i++){
    var drugi=document.getElementById("ul1");
    var nizIn=document.createElement("li");
    nizIn.innerHTML=nizInfo[i];
    drugi.appendChild(nizIn);
}
var nizMreze=["fab fa-facebook-square","fab fa-instagram","fab fa-youtube"];
var mrezeLink=["https://www.facebook.com/","https://www.instagram.com/","https://www.youtube.com/"];

var treci=document.getElementById("ul2");
for(let i=0;i<nizMreze.length;i++){
    var liMreze=document.createElement("li");
    treci.appendChild(liMreze);
    var putanja=document.createElement("a");
    putanja.setAttribute("href",mrezeLink[i]);
    liMreze.appendChild(putanja);
    var ico=document.createElement("i");
    putanja.appendChild(ico);
    ico.setAttribute("class",nizMreze[i]);
}
var treciD=document.createElement("div");
treciD.setAttribute("id","treciD");
var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "news");
input.setAttribute("id", "news");
input.setAttribute("placeholder", "E-mail");
treciD.appendChild(input);
var posalji=document.createElement("input");
posalji.setAttribute("type", "button");
posalji.setAttribute("value", "Posalji");
posalji.setAttribute("id", "posaljiN");
treciD.appendChild(posalji);
document.querySelectorAll(".footerB")[2].insertBefore(treciD,treci);
























