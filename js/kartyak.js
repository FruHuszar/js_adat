import { megjelenit } from "/js/kartya.js";


export function kartyakMegjelenit(ALLATLISTA){
    const ARTICLEELEM = document.querySelector("article");
    ALLATLISTA.forEach(function(allat,index){
        megjelenit(allat,ARTICLEELEM);
    });
}