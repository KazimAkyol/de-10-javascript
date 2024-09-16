//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------

// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar.

// let urun = prompt("Bir ürün giriniz");
// let fiyat;

// switch (urun) {
//   case "kalem": {
//     fiyat = "kalem 5$";
//     tutar=urunAdedi*5
//     break;
//   }

//   case "defter": {
//     fiyat = "defter 10$";
//     tutar=urunAdedi*10
//     break;
//   }
//   default: {
//     console.log("gecerli bir ürün giriniz");
//     break;
//   }
// }

// console.log(fiyat);
// console.log(tutar);

//**********hesap makinesi örnegi - switch-case********* */

// const sayi1=+prompt("1.Sayıyı giriniz:");
// const islem=prompt(" Bir operator giriniz(+,-,*,/):");
// const sayi2=+prompt("2. sayıyı giriniz:");

// let sonuc;

// switch(islem){
//     case"+":sonuc=sayi1+sayi2;break;
//     case"-":sonuc=sayi1-sayi2;break;
//     case"*":sonuc=sayi1*sayi2;break;
//     case"/":sonuc=sayi1/sayi2;break;
//     default:console.log("Lütfen bir islem operatörü giriniz");
// }
// console.log(sonuc);

//  switch(islem){

//     case "+": console.log(sayi1+sayi2); break;
//     case "-": console.log(sayi1-sayi2); break;
//     case "*": console.log(sayi1*sayi2); break;
//     case "/": console.log(sayi1/sayi2); break;
//     default: console.log("Gecerli bir operatör giriniz");
//  }

// let ay=7
// switch (ay){
//     case (ay===12 || ay===1 || ay===2):
//         {console.log("kis");
//         break;}

//     case (ay===3 || ay===4 || ay===5):
//         {console.log("ilkbahar");
//         break;}

//     case (ay===6 || ay===7 || ay===8):
//         {console.log("yaz");
//         break;}

//     case (ay===9 || ay===10 || ay===11):
//         {console.log("sonbahar");
//         break;}

//     default:
//         console.log("Gecersiz bir ay girdiniz");
// }

const day = new Date().getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

//ÖRNEK SORULAR

//1.Bir kullanici girisine göre selamlama yapma
//tr:merhaba
//en:hello
//fr:bonjour

//2.Bir ögrenci notuna göre harf notunu belirleme:
//90 üzeri A
