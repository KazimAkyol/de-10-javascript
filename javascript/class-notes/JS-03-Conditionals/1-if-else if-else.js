//! ************ IF - ELSE
/*
if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

let sicaklik = 30;

if (sicaklik > 50) {
  console.log("yikamaya basla");
} else {
  console.log("isitmaya devam et");
}

// prompt kodu kullanicidan bilgi almayi saglar
//! kullanicidan alinan her bilgi string olarak gelir

// girilen sayi tek mi cift mi oldugunu yazan program

// let sayi = Number(prompt("Bir sayi giriniz"));

// let kalan = sayi % 2;

// if (kalan ===0){
//     console.log("Sayi cifttir");
// }
// else{
//     console.log("Sayi tektir");
// }

//! HESAP MAKINESI

console.log("*******Hesao Makinesi*******");

// 7 + 5= 12
// 7 - 5= 2
// 7 * 5= 35
// 7 / 5= 1

const sayi1 = +prompt("1.Sayiyi giriniz:");
const islem = prompt(" Bir operatör giriniz(+,-,*,/):");
const sayi2 = +prompt("2.Sayiyi giriniz:");

let sonuc;

if (islem == "+") {
  sonuc = sayi1 + sayi2;
} 
else if (islem == "-") {
  sonuc = sayi1 - sayi2;
} 
else if (islem == "*") {
  sonuc = sayi1 * sayi2;
} 
else if (islem == "/") {
  sonuc = sayi1 / sayi2;
} 
else {
  console.log("Yanlis operatör girdiniz");
}

console.log("SONUC:", sonuc);
