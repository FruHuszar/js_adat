import { megjelenit } from "./kartya.js";


export function kartyakMegjelenit(ALLATLISTA){
    const ARTICLEELEM = document.querySelector("article");
    ARTICLEELEM.innerHTML = "";
    ALLATLISTA.forEach(function(allat,index){
        megjelenit(allat,ARTICLEELEM);
    });
}