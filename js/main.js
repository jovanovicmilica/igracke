window.onload=function(){
var slajder=document.getElementById("slika");
var slika=document.createElement("img");
slajder.appendChild(slika);
slika.setAttribute("src","img/slajder2.jpg");
slika.setAttribute("id","proba");
slika.setAttribute("alt","Slajder slika");

//FOOTER
var footer=document.getElementById("footer");
var naslovNiz=["Igračke d.o.o.", "Informacije", "Newsletter"];
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
var forma2=document.createElement("form");
forma2.setAttribute("method","GET");
forma2.setAttribute("action","#");
forma2.setAttribute("id","forma2");
treciD.setAttribute("id","treciD");
var input=document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("name", "news");
input.setAttribute("id", "news");
input.setAttribute("placeholder", "E-mail");
treciD.appendChild(forma2);
forma2.appendChild(input);
var posalji=document.createElement("input");
posalji.setAttribute("type", "button");
posalji.setAttribute("value", "Posalji");
posalji.setAttribute("id", "posaljiN");
forma2.appendChild(posalji);
document.querySelectorAll(".footerB")[2].insertBefore(treciD,treci);


var dokumentacija=document.createElement("a");
dokumentacija.innerHTML="Dokumentacija";
dokumentacija.setAttribute("href","#");
document.querySelectorAll(".footerB")[2].appendChild(dokumentacija);


let url=location.href;

if(url.indexOf("index.html")!=-1){
var nizNaslovAkcija=["Lego princeza","Garaza","Plisana maca","Vozilo"];
var novaCenaAkcija=["9.919,20","3.119,21","5.439,19","5.199,19"];
proizvodi("akcija","Ove nedelje na akciji","akcija",nizNaslovAkcija,novaCenaAkcija);
    

var vesti=document.getElementById("vesti");
var vestiH=document.createElement("h2");
vesti.appendChild(vestiH);
vestiH.innerHTML="Vesti";
var nizS=["druzenje.jpg"];
var h3tekst=["Druzenje Ada mall-u"];
var tekstvoviV=["Drugari, u subotu 12.decembra od 14h do 19h na drugom spratu Ada Mall-a oganizuju NEZABORAVNO DRUŽENJE,a svi dobijaju poklone! Pozvani su svi klinci i klinceze da dođu i pridruže se sklapanju slagalica i drugim igrama. Dođite da se igramo, takmičimo i osvajamo poklone! Čekamo vas na drugom spratu ispred naših radnji! Najuspešniji takmičari dobijaju vredne nagrade."]
for(let i=0;i<nizS.length;i++){
    var jednaVest=document.createElement("div");
    jednaVest.setAttribute("class","vesti");
    vesti.appendChild(jednaVest);
    var slike=document.createElement("img");
    jednaVest.appendChild(slike);
    var tekst=document.createElement("div");
    tekst.setAttribute("class","tekstvesti");
    jednaVest.appendChild(tekst);
    var naslov=document.createElement("h3");
    naslov.innerHTML=h3tekst[i];
    var tekstVesti=document.createElement("p");
    tekstVesti.innerHTML=tekstvoviV[i];
    tekst.appendChild(naslov);
    tekst.appendChild(tekstVesti);
    slike.setAttribute("src","img/"+nizS[i]);
}

var plug=document.getElementById("plug");
var brendovi=document.createElement("h2");
brendovi.innerHTML="Brendovi";
plug.appendChild(brendovi);
var drzacB=document.createElement("div");
drzacB.setAttribute("class","drzac");
plug.appendChild(drzacB);
var slicica=[];
for(let i=0;i<10;i++){
    var divdrzac=document.createElement("div");
    divdrzac.setAttribute("class", "slicice");
    drzacB.appendChild(divdrzac);
    slicica[i]=document.createElement("img");
    slicica[i].src="img/slicica"+[i+1]+".jpg";
    divdrzac.appendChild(slicica[i]);
}
}
if(url.indexOf("decaci.html")!=-1){
    var nizNaslovDecaci=["Mešalica","Kamion đubretarac","Kamion mešalica","Mini kamion","Puška na vodu","Kofica za plažu","Vitezovi kamuflaža","Zmaj","Mač","Lopta","Viljuškar","Policijski auto","Set alata","Traktor sa prikolicom","Faraonova piramida"];
    var novaCenaDecaci=["1.349,00","2.999,00","10.399,00","489,00","579,00","529,00","3.349,00","399,00","999,00","149,00","1.149,00","899,00","9.449,00","9.999,00","11.999,00"];
    proizvodi("decaci","Decaci","decaci",nizNaslovDecaci,novaCenaDecaci);
    }
if(url.indexOf("devojcice.html")!=-1){
    var nizNaslovDevojcice=["Slatka kuhinjica","Lutka","Mini Maus torba","Lutka beba doktor","Mini kuhinja","Slagalica","Podloga za crtanje","Obruč","Sudići","Kofica za plažu","Daska za peglanje","Kofica za plažu","Poni figura","Maske za lice","Lopta"];
    var novaCenaDevojcice=["4.599,00","3.299,00","799,00","2.940,00","4.999,00","799,00","1.999,00","449,00","1.149,00","799,00","2.999,00","799,00","3.999,00","399,00","249,00"];
    proizvodi("devojcice","Devojcice","devojcice",nizNaslovDevojcice,novaCenaDevojcice);
    }
if(url.indexOf("bebi.html")!=-1){
    var nizNaslovbebi=["Svetleći medvedić","Žirafa","Figurice","Tomas i drugari vozić","Slonče za uspavljivanje","Noćni projektor ovčice","Zvečka za kolica","Vozić","Slonić na vuču","Knjiga za kupanje","Telefon na vuču","Kružići","Zebra karike","Uhvati bubamaru","Interaktivna muzička knjiga"];
    var novaCenabebi=["3.499,00","2.899,00","1.389,00","1.399,00","2.999,00","6.459,00","2.899,00","1.990,00","1.349,00","569,00","2.999,00","1.999,00","779,00","799,00","2.259,00"];
    proizvodi("bebe","Program za bebe","bebis",nizNaslovbebi,novaCenabebi);
    }

if(url.indexOf("drusigre.html")!=-1){
    var nizNaslovIgre=["Pronađi mi kućicu","Karte","Hranimo se zdravo","Slagalica","Reciklaža","Karte","Ne ljuti se čoveče","Slagalice","Medin dan","Godišnja doba","Monopol","Karte","Engleski za decu","Merenje","Slagalica"];
    var novaCenaIgre=["1.099,00","299,00","1.299,00","989,00","2.499,00","129,00","999,00","799,00","1.899,00","848,00","3.999,00","499,00","2.199,00","1.099,00","799,00"];
    proizvodi("drusigre","Društvene igre","igra",nizNaslovIgre,novaCenaIgre);
}

if(url.indexOf("kontakt.html")!=-1){
    //forma validacija
    var imePrezime=document.getElementById("imePrezime");
    var telefon=document.getElementById("telefon");
    var email=document.getElementById("email");
    var poruka=document.getElementById("poruka");
    var taster=document.getElementById("posalji");


    var reImePrezime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,}(\s[A-Z][a-z]{2,})*$/; 
    var reTelefon=/^06[\d]\/[\d]{3}\-[\d]{2}-[\d]{2,3}$/;
    var reEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    var tacno=0;

    imePrezime.addEventListener("blur", function(){
        if(reImePrezime.test(imePrezime.value)){
            imePrezime.classList.add("ispravno");
            imePrezime.classList.remove("greska");
            tacno++;
        }
        else{
            imePrezime.classList.remove("ispravno");
            imePrezime.classList.add("greska");
            tacno=0;
        }
    });

    telefon.addEventListener("blur", function(){
        if(reTelefon.test(telefon.value)){
            telefon.classList.add("ispravno");
            telefon.classList.remove("greska");
            tacno++;
        }
        else{
            telefon.classList.remove("ispravno");
            telefon.classList.add("greska");
            tacno=0;
        }
    });

    email.addEventListener("blur", function(){
        if(reEmail.test(email.value)){
            email.classList.add("ispravno");
            email.classList.remove("greska");
            tacno++;
        }
        else{
            email.classList.remove("ispravno");
            email.classList.add("greska");
            tacno=0;
        }
    });

    poruka.addEventListener("blur", function(){
        if(poruka.value==''){
            poruka.classList.remove("ispravno");
            poruka.classList.add("greska");
            tacno=0;
        }
        else{
            poruka.classList.add("ispravno");
            poruka.classList.remove("greska");
            tacno++;
        }
    });
    var greske=document.getElementById("greske");
    greske.classList.add("none");
    var ispravno=document.getElementById("tacno");
    ispravno.classList.add("none");
    taster.addEventListener("click",function(){
        if(tacno){
            greske.classList.add("none");
            ispravno.classList.remove("none");
        }
        else{
            greske.classList.remove("none");
            ispravno.classList.add("none");
        }
    });

    var prodavnica=document.querySelector("#prodavnica");
    var slikepr=["img/prodavnica1.jpg","img/prodavnica2.jpg","img/prodavnica3.jpg"];
    var i=0;
    function slajderProdavnice(){
        prodavnica.src=slikepr[i];
        if(i<slikepr.length-1) i++;
        else i=0;
        setTimeout(slajderProdavnice, 3000);
    };
    slajderProdavnice();

}

}

function proizvodi(id, naslov,slikanaziv,nizNaslov,novaCena){
    var akcija=document.getElementById(id);
    var h1=document.createElement("h1");
    akcija.appendChild(h1);
    h1.innerHTML=naslov;
    var drzac=document.createElement("div");
    drzac.setAttribute("class", "drzac");
    akcija.appendChild(drzac);
    for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img");
    slika[i].setAttribute("src", "img/"+slikanaziv+[i+1]+".jpg");
    slika[i].setAttribute("alt", "Slika"+[i+1]);
    blokovi.appendChild(slika[i]);
    var naslov=document.createElement("p");
    blokovi.appendChild(naslov);
    naslov.innerHTML=nizNaslov[i];
    var cenaN=document.createElement("span");
    blokovi.appendChild(cenaN);
    cenaN.innerHTML=novaCena[i]+" "+"RSD";
    cenaN.classList.add("span");
    }
}



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


//JQUERY
//PODMENI HOVER
$(document).ready(function(){




    var podmeni=$("#meni");
    podmeni.addClass("none");
    var lipodmeni=$("#lizapodmeni");
    var aTagovi=$('header a');
    $(lipodmeni).hover(
        function(){
            podmeni.addClass("visible");
            },
        function(){
            podmeni.removeClass("visible");
            }
        );
        $(".hamburger").click(
           function(){
               $(this).toggleClass("none");
               $("nav").toggleClass("visible meniU");
               $(this).toggleClass("none");
           }
       );

        //SKROL ZA MENI
        $(window).scroll(function() {    
           var scroll = $(window).scrollTop();
       
           if (scroll >= 50) {
               $("#header").addClass("scrolling");
               $("#meni").addClass("scrolling");
               $(".meniU").addClass("scrolling");
           } else {
               $("#header").removeClass("scrolling");
               $("#meni").removeClass("scrolling");
               $(".meniU").removeClass("scrolling");
           }
       })

       

  
});
























