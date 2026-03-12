import { ALLATLISTA } from "./adat.js";
import { kartyakMegjelenit } from "./kartyak.js";
import { rendezesEsemenykezelo, szuresEsemenykezelo } from "./fuggvenyek.js";

/*for (let index = 0; index < ALLATLISTA.length; index++) {
    megjelenit(ALLATLISTA[index]);    
}*/

kartyakMegjelenit(ALLATLISTA);
rendezesEsemenykezelo(ALLATLISTA);
szuresEsemenykezelo(ALLATLISTA);

/* //véletlen sorrend
console.log(ALLATLISTA); Ez most ua írja ki, mert a listánál a referncia fix, és ez itt már az új memóriát mutatja
ALLATLISTA.sort(function(a,b){
    return Math.random()-0.5;
});
console.log(ALLATLISTA);
 */