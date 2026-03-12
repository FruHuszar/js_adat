export function rendezesEsemenykezelo(){
    let gombok = document.querySelectorAll("button");
    for (let index = 0; index < gombok.length; index++) {
        gombok[index].addEventListener("click", function(){
            console.log(gombok[index].id);
        });
    }
}