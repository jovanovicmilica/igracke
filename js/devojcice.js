var akcija=document.getElementById("devojcice");
var h1=document.createElement("h1");
akcija.appendChild(h1);
h1.innerHTML="Program za devojcice";
var drzac=document.createElement("div");
drzac.setAttribute("id", "drzac");
akcija.appendChild(drzac);
var drzac=document.getElementById("drzac");
var nizNaslov=["Slatka kuhinjica","Lutka","Mini Maus torba","Lutka beba doktor","Mini kuhinja","Slagalica","Podloga za crtanje","Obruč","Sudići","Kofica za plažu","Daska za peglanje","Kofica za plažu","Poni figura","Maske za lice","Lopta"];
var novaCena=["4.599,00","3.299,00","799,00","2.940,00","4.999,00","799,00","1.999,00","449,00","1.149,00","799,00","2.999,00","799,00","3.999,00","399,00","249,00"];
for(let i=0;i<nizNaslov.length;i++){
    var blokovi=document.createElement("div");
    blokovi.setAttribute("class","blok");
    drzac.appendChild(blokovi);
    slika[i]=document.createElement("img")
    slika[i].setAttribute("src", "img/devojcice"+[i+1]+".jpg");
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