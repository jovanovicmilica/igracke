var akcija=document.getElementById("drusigre");
var h1=document.createElement("h1");
akcija.appendChild(h1);
h1.innerHTML="Društvene igre";
var drzac=document.createElement("div");
drzac.setAttribute("id", "drzac");
akcija.appendChild(drzac);
var drzac=document.getElementById("drzac");
var nizNaslov=["Pronađi mi kućicu","Karte","Hranimo se zdravo","Slagalica","Reciklaža","Karte","Ne ljuti se čoveče","Slagalice","Medin dan","Godišnja doba","Monopol","Karte","Engleski za decu","Merenje","Slagalica"];
var novaCena=["1.099,00","299,00","1.299,00","989,00","2.499,00","129,00","999,00","799,00","1.899,00","848,00","3.999,00","499,00","2.199,00","1.099,00","799,00"];
for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img")
    slika[i].setAttribute("src", "img/igra"+[i+1]+".jpg");
    slika[i].setAttribute("alt", "Slika"+[i+1]);
    blokovi.appendChild(slika[i]);
    var naslov=document.createElement("h2");
    blokovi.appendChild(naslov);
    naslov.innerHTML=nizNaslov[i];
    var cenaN=document.createElement("span");
    blokovi.appendChild(cenaN);
    cenaN.innerHTML=novaCena[i]+" "+"RSD";
    cenaN.classList.add("span");
}