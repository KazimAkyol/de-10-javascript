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

const sayi1=+prompt("1.Sayıyı giriniz:");
const islem=prompt(" Bir operator giriniz(+,-,*,/):");
const sayi2=+prompt("2. sayıyı giriniz:");

// let sonuc;

// switch(islem){
//     case"+":sonuc=sayi1+sayi2;break;
//     case"-":sonuc=sayi1-sayi2;break;
//     case"*":sonuc=sayi1*sayi2;break;
//     case"/":sonuc=sayi1/sayi2;break;
//     default:console.log("Lütfen bir islem operatörü giriniz");
// }
// console.log(sonuc);

 switch(islem){

    case "+": console.log(sayi1+sayi2); break;
    case "-": console.log(sayi1-sayi2); break;
    case "*": console.log(sayi1*sayi2); break;
    case "/": console.log(sayi1/sayi2); break;
    default: console.log("Gecerli bir operatör giriniz");
 }



let ay=7
switch (ay){
    case 12:case 1:case 2:
        console.log("kis");
        break;
    case 3:case 4:case 5:
        console.log("ilkbahar");
        break;
    case 6:case 7:case 8:
        console.log("yaz");
        break;
    case 9:case 10:case 11:
        console.log("sonbahar");
        break;
    default:
        console.log("Gecersiz bir ay girdiniz");
}
