//! ********* FOR - LOOP ************
// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz

//? FOR -LOOP
//? for (initialization;condition;increment/decrement){

//? }

//bir kelimeyi 10 defa tekrar gösteren bir kod yazalim:

const kelime="Günaydin Latte ve Dibek"

for (let i=0 ; i<10 ; i++) {
    console.log(kelime);
}

//Baslangic degeri hep 0, 1 gibi baslayip artmak zorunda degil, azaltarak da islem yapilabilir

for (let i=20 ; i>0 ; i--) {
    console.log(i);
}

// 1'den 20'ye kadar olan sayilari yazdiralim:

for (let i=1 ; i<21 ; i++) {
    console.log(i);
}