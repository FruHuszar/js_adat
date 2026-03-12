export function megjelenit(adat={fajnev,kepUrl,tipus,elohely,atlagEletkor,kulonlegesseg}, ARTICLEELEM){
    let kod = `
    <div class="col-lg-4 pb-2 pt-3">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">${adat.fajnev}</h4>
                <img src="${adat.kepUrl}" alt="${adat.fajnev} illusztrációja" class="card-img-top">
                <p class="card-text">${adat.tipus}</p>
                <p class="card-text">${adat.elohely}</p>
                <p class="card-text">${adat.atlagEletkor}</p>
                <p class="card-text">${adat.kulonlegesseg}</p>
            </div>
        </div>
    </div> 
    `
    ARTICLEELEM.innerHTML += kod;
}