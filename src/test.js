import { hozzaad, atlag, lista } from "./lista";

for (let i = 0; i < 10; i++) {
    hozzaad(Math.random()*100 -1);
    console.log(lista[i]);
}
hozzaad(-10);
