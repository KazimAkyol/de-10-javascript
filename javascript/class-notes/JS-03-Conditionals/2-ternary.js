//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

//ÖRNEK 1: Askerlik örnegi if yapisi ile

// let yas = 17;

// console.log(typeof h);

// if (yas > 18 && h == "saglikli") {
//   console.log("Askerlik yapabilir");
// } 
// else {
//   console.log("Askerlik yapamaz");
// }

// Ternary ile ÖRNEK 1

// yas > 18 ? console.log("Askerlik yapabilir") : console.log("Askerlik yapamaz");

const age=19
const health=true 
const gender= "male"

if (age>18 && health==true && gender=="male"){
    console.log("Askerlik yapabilir");
}
else{
    console.log("Askerlik yapamaz");
}

let mesaj= (age>18 && health==true && gender=="male")
? "tamam sen git askere":
 "hayir asla gidemezsin";

 console.log(mesaj);

 (age>18 && health==true && gender=="male") ? console.log("tamam sen git askere") :console.log("hayir asla gidemezsin");

 const sayi1=56;
 const sayi2=23;

 // toplamindan cikan sonuc 60dan büyükse sayilari carp kücükse bölme yap
 