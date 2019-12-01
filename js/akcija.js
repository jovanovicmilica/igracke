


var akcija=document.getElementById("akcija");
var h1=document.createElement("h1");
akcija.appendChild(h1);
h1.innerHTML="Ove nedelje na akciji";
var drzac=document.createElement("div");
drzac.setAttribute("id", "drzac");
akcija.appendChild(drzac);
var drzac=document.getElementById("drzac");
var nizNaslov=["LEGO DISNEY PRINCESS ","BURAGO STREET FIRE GARAZA","IMC TOYS PLISANA MACA","POWER RANGERS VOZILO"];
var nizCena=["12.399,00","3.899,00", "6.799,00", "6.499,00"];
var novaCena=["9.919,20","3.119,21","5.439,19","5.199,19"];
for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img")
    slika[i].setAttribute("src", "img/akcija"+[i+1]+".jpg");
    slika[i].setAttribute("alt", "slika"+[i+1]);
    blokovi.appendChild(slika[i]);
    var naslov=document.createElement("h2");
    blokovi.appendChild(naslov);
    //naslov[i]=document.write(nizNaslov[i]);
    naslov.innerHTML=nizNaslov[i];
    var cena=document.createElement("p");
    blokovi.appendChild(cena);
    cena.innerHTML=nizCena[i];
    cena.classList.add("pTag");
    var cenaN=document.createElement("span");
    blokovi.appendChild(cenaN);
    cenaN.innerHTML=novaCena[i]+" "+"RSD";
    cenaN.classList.add("span");
}


var vesti=document.getElementById("vesti");
var vestiH=document.createElement("h1");
vesti.appendChild(vestiH);
vestiH.innerHTML="Vesti";
var nizS=["druzenje.jpg"];
var h3tekst=["DRUŽENJE U SHOPPING CENTRU ADA MALL"];
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





