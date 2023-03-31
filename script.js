import { OBJLISTA, SZOVEGLISTA, SZAMLISTA } from "./adat.js";
import {rendezesSzoveg, veletlenSor, rendezesBarmi, szuresKorSzerint} from "./adatkezeles.js";

$(function () {

    console.log(OBJLISTA[1].csaladiAllapot)
    let jsonObj = JSON.stringify(OBJLISTA)
    rendezesSzoveg(SZAMLISTA);
    veletlenSor(SZAMLISTA);
    rendezesBarmi(OBJLISTA, "nev");
    szuresKorSzerint(OBJLISTA)
})

