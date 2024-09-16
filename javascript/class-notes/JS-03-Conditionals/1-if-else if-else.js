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

let sayi = Number(prompt("Bir sayi giriniz"));

let kalan = sayi % 2;

if (kalan ===0){
    console.log("Sayi cifttir");
}
else{
    console.log("Sayi tektir");
}