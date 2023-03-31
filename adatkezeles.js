export function rendezesSzoveg(list) {
    list.sort(function (a, b) {
        return a - b
    });
    console.log(list)
}

export function veletlenSor(list) {
    list.sort(function (a, b) {
        return Math.random() - 0.5
    });
    console.log(list)
}

export function rendezKorSzerint(list) {
    list.sort(function (a, b) {
        return a.kor - b.kor
    });
    console.log(list)
}

export function rendezNevSzerint(list) {
    list.sort(function (a, b) {
        let e = 1;
        console.log(a.nev < b.nev);
        if (a.nev < b.nev) {
            e = -1
        }
        return e;
    });
}

export function rendezesBarmi(list, kulcs) {
    list.sort(function (a, b) {
        let e = 1;
        console.log(a[kulcs] < b[kulcs]);
        if (a[kulcs] < b[kulcs]) {
            e = -1
        }
        return e;
    });
}

export function szuresKorSzerint(list) {
    const szurtLista = list.filter(function (elem) {
        return elem.kor <= 50;
    })
    console.log(szurtLista)
    return szurtLista;
}