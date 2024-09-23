console.log("***** Code Class - Loops *****");

// && >>>>> and
// || >>>>> or

//AND OPERATÖRÜ

//? her iki degerde true ise son true degeri döndürür, aksi takdirde ilk false degeri döndürür.

console.log(true && 1);// 1
console.log(false && 1);// false
console.log(1 && 3);//3
console.log(0 && 1);// 0
console.log(NaN && 1);//NaN
console.log([] && 1);
console.log(Boolean([]));//true

//OR OPERATÖRÜ
console.log("***OR***");
console.log(true || false);//true
console.log( 1 || false);//1
console.log(0 || NaN);//NaN
console.log(213 || "fatma" || true);//213
console.log([] || "" || undefined);//[]
console.log(0 || "" || undefined);//undefined
console.log(0 || false || undefined);//undefined

// const sabah = false

// if (condition) {
//     console.log("merhaba");
// }
// else {
//     console.log("Güle Güle");
// }




//! 18 yasindan büyüklerin oy kullanabilecegini 18 yasindan kücüklerin oy kullanamayacagini ternary yapi ile konsola yazdiran kodu yaziniz. (ternary)

//let yas = +prompt("yasinizi giriniz");

//if(yas < 18) {
    //console.log("Yasiniz 18'den kücüktür.Oy kullanamazsiniz");
//}
//else{
    //console.log("Yasiniz 18'den büyüktür.Oy kullanabilirsiniz");
//}

///let yas = +prompt("yasinizi giriniz");

//yas < 18 ? console.log("Kisi oy kullanamaz") : console.log(Kisi oy kullanabilir);

//!1/2 girilen yilin yüzyilini veren program 1788 > 18.yüzyil

//1788/100
//17,88
//17+1

//let yil = +prompt("Yil giriniz");

//let x = Math.trunc(yil/100); + 1

//console.log(`${x}.yüzyil`);

//! 2 - Bir dersten  alinan notun harfini asagidaki duruma göre console a yazdiriniz

//?  Not:
//?  90'dan büyükse AA.
//? - 80'den büyük yada 90'a eşitse AB,
//? - 70'den büyük yada 80'a eşitse BB,
//? - 60'den büyük yada 70'a eşitse BC,
//? - 50'den büyük yada 60'a eşitse CC,
//? - 40'den büyük yada 50'a eşitse CD,
//? - 30'den büyük yada 40'a eşitse DD,
//? - 30'dan küçük yada eşitse FF,

let x = +prompt("Lütfen notunuzu giriniz");

if (x<0 || x>100) {
    console.log("Lütfen 1-100 arasinda bir deger giriniz");
}
else if (x>90) {
    console.log("AA");
}
else if (x>80) {
    console.log("AB");
}
else if (x>70) {
    console.log("BB");
}
else if (x>60) {
    console.log("BC");
}
else if (x>50) {
    console.log("CC");
}
else if (x>40) {
    console.log("DD");
}
else {
    console.log("FF");
}










