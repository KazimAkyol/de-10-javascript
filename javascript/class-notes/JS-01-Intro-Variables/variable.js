//!  %%%%%%%%%%% DEĞİŞKEN TANIMLAMA  %%%%%%%%%%%%%%%%

//  CONST ve LET, ECMASCRIPT6 ile gelmiştir. VAR eski versiyonlardan beri bulunmaktadır.

// ===================  CONST  ======================
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler (array..) hariç).

const degiskenAdi = "Javascript";

const sayi = 7;

console.log(typeof degiskenAdi, typeof sayi);

//sayi=8 // Assignment to constant variable.
//const ile tanimlanan degiskenler degistirilemez

// ======================  LET  ========================
//? LET de CONST gibi yaygın kullanılan değişken tanımlama yöntemidir.
//! CONST'dan farkı, sadece tanımlama kısmında değil istenildiği zaman değeri değiştirilebilir.
//* CONST gibi tanımlandığı blok içerisinde geçerlidir. Başka yerlerden erişilemez. (Block-Scoped)
//? CONST kullanamadığımız durumlarda (değişkenin değeri sürekli değişecekse) LET kullanmalıyız.

let dil = "javascript";

dil = "java";

console.log(dil);

let sayi1=23

sayi1=34

let sayi2="45"

console.log(sayi2 + 56);

//bir string ile number toplanirsa aslinda toplama yapmaz, onlari iki kelime gibi yanyana yazar

console.log(sayi2 - 34);
console.log(sayi2);



