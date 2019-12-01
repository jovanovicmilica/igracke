var akcija=document.getElementById("decaci");
var h1=document.createElement("h1");
akcija.appendChild(h1);
h1.innerHTML="Program za decake";
var drzac=document.createElement("div");
drzac.setAttribute("id", "drzac");
akcija.appendChild(drzac);
var drzac=document.getElementById("drzac");
var nizNaslov=["Mešalica","Kamion đubretarac","Kamion mešalica","Mini kamion","Puška na vodu","Kofica za plažu","Vitezovi kamuflaža","Zmaj","Mač","Lopta","Viljuškar","Policijski auto","Set alata","Traktor sa prikolicom","Faraonova piramida"];
var novaCena=["1.349,00","2.999,00","10.399,00","489,00","579,00","529,00","3.349,00","399,00","999,00","149,00","1.149,00","899,00","9.449,00","9.999,00","11.999,00"];
for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img")
    slika[i].setAttribute("src", "img/decaci"+[i+1]+".jpg");
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