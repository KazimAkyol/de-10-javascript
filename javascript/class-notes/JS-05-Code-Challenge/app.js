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

let age = 27

if(age > 18) {
    console.log("Kisi oy kullanabilir");
}
else{
    console.log("Kisi oy kullanamaz");
}










