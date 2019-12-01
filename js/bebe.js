var akcija=document.getElementById("bebe");
var h1=document.createElement("h1");
akcija.appendChild(h1);
h1.innerHTML="Program za bebe";
var drzac=document.createElement("div");
drzac.setAttribute("id", "drzac");
akcija.appendChild(drzac);
var drzac=document.getElementById("drzac");
var nizNaslov=["Svetleći medvedić","Playgro Žirafa","Fisher Roly Poly","Tomas i drugari vozić","Slonče za uspavljivanje","Noćni projektor ovčice","Zvečka za kolica","Vozić","Slonić na vuču","Knjiga za kupanje","Telefon na vuču","Kružići","Zebra karike","Uhvati bubamaru","Interaktivna muzička knjiga"];
var novaCena=["3.499,00","2.899,00","1.389,00","1.399,00","2.999,00","6.459,00","2.899,00","1.990,00","1.349,00","569,00","2.999,00","1.999,00","779,00","799,00","2.259,00"];
for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img")
    slika[i].setAttribute("src", "img/bebis"+[i+1]+".jpg");
    slika[i].setAttribute("alt", "Slika"+[i+1]);
    blokovi.appendChild(slika[i]);
    var naslov=document.createElement("h2");
    blokovi.appendChild(naslov);
    naslov.innerHTML=nizNaslov[i];
    // var cena=document.createElement("p");
    // blokovi.appendChild(cena);
    // cena.innerHTML=nizCena[i];
    //cena.classList.add("pTag");
    var cenaN=document.createElement("span");
    blokovi.appendChild(cenaN);
    cenaN.innerHTML=novaCena[i]+" "+"RSD";
    cenaN.classList.add("span");
}