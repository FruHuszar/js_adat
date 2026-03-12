export function megjelenit(adat=(fajnev,kep,tipus,elohely,atlagEletkor,erdekesseg)){
    const articleElem = document.querySelector("article");
    let kod = `
    <div class="col-lg-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${adat.fajnev}</h4>
                <img src="${adat.kep}" alt="${adat.fajnev} illusztrációja" class="card-img-top">
                <p class="card-text">${adat.tipus}</p>
                <p class="card-text">${adat.elohely}</p>
                <p class="card-text">${adat.atlagEletkor}</p>
                <p class="card-text">${adat.erdekesseg}</p>
            </div>
        </div>
    </div> 
    `
    articleElem.innerHTML += kod;
}