//! ********* FOR - LOOP ************
// Karar durumları gibi döngülerde günlük hayatta çok karşımıza çıkan yapılardır.
//Tekrarlı olan işlerde farklı türlerde döngülerden birini kullanabiliriz

//? FOR -LOOP
//? for (initialization;condition;increment/decrement){

//? }

//bir kelimeyi 10 defa tekrar gösteren bir kod yazalim:

const kelime = "Günaydin Latte ve Dibek";

for (let i = 0; i < 10; i++) {
  console.log(kelime);
}

//Baslangic degeri hep 0, 1 gibi baslayip artmak zorunda degil, azaltarak da islem yapilabilir

for (let i = 20; i > 0; i--) {
  console.log(i);
}

// 1'den 20'ye kadar olan sayilari yazdiralim:
//const sayi=+prompt("sayi giriniz")

for (let i = 1; i < 21; i++) {
  console.log(i);
}

// 1'den 20'ye kadar olan sayilarin tek mi cift mi oldugunu ve 5'e bölünenleri yazdiran  program:

for (let i = 1; i < 21; i++) {
  i % 2 === 0 ? console.log(i, "cifttir") : console.log(i, "tektir");
  i % 5 === 0 ? console.log(i, "5'e bölünür") : null;
}

// 1'den 20'ye kadar olan sayilarin toplamini bulan program:

let toplam = 0;

for (let i = 1; i <= 20; i++) {
  toplam = toplam + i;
}

console.log(toplam);                                 
