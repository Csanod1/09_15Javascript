let lista = [];

export function hozzaad(szam){
    if(szam < 0){
        console.log("HIBAA! adjon meg egy -1-nél nagyobb számot");
    }else{
        lista.push(szam);
    }
}
export function atlag(bemenoLista){
    let szamlalo = 0;
    for(let i = 0; i < bemenoLista.length; i++){
        szamlalo += lista[i];

    }
    return szamlalo/lista.length;
}
