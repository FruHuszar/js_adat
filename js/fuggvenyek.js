import { kartyakMegjelenit } from "./kartyak.js";

export function rendezesEsemenykezelo(lista){
    let gombok = document.querySelectorAll("button");
    for (let index = 0; index < gombok.length; index++) {
        gombok[index].addEventListener("click", function(){
            if (gombok[index].id == "kor_no"){
                lista.sort(function(a,b){
                    return a.atlagEletkor-b.atlagEletkor
                });
                kartyakMegjelenit(lista);
            } else if (gombok[index].id == "kor_csokken"){
                lista.reverse(function(a,b){
                    return a.atlagEletkor-b.atlagEletkor
                });
                kartyakMegjelenit(lista);
            } else if (gombok[index].id == "nev_no"){
                lista.sort(function(a,b){
                    return a.fajnev<b.fajnev?-1:+1;
                });
                kartyakMegjelenit(lista);
            } else if (gombok[index].id == "nev_csokken"){
                lista.sort(function(a,b){
                    return a.fajnev<b.fajnev?+1:-1;
                });
                kartyakMegjelenit(lista);
            }
        });
    }
}

export function szuresEsemenykezelo(lista) {
    const SZUROBUTTONOK = document.querySelectorAll(".szures");
    SZUROBUTTONOK.forEach(function(buttonElem) {
        buttonElem.addEventListener("click", function(event) {
            //console.log(event.target.innerText);
            let szuro = event.target.innerText;
            const SZURT = lista.filter(function(a) {
                return a.tipus === szuro;
            });
            console.log(SZURT);
            kartyakMegjelenit(SZURT);
        });
    });
}