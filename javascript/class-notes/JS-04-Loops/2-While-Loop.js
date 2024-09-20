//!  ***** WHILE LOOP *******
// For loop ile benzer şekilde sadece syntax farklılığı vardır.Birbirini yerine kullanılabilir
//*"while" döngüsü, belirli bir koşul doğru olduğu sürece kod bloğunu tekrarlayan bir döngüdür. "While" döngüsü, başlangıçta belirtilen koşul doğru olduğu sürece çalışır ve koşul yanlış olduğunda döngüyü sonlandırır.
//! NOT: Eğer koşul düzgün yapılındırılmamışsa, "while" döngüsü sonsuz bir döngü oluşturabilir ve bu durum sayfanızın veya uygulamanızın donmasına neden olabilir.
// while(Koşul) {
//      çalıştırılacak kodlar
//   }

// 1den 10 a kadar olan sayıları yazdıran program:

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// Kullanicidan 100 ile 200 arasinda bir sayi girildigi muddetce sayi istemeyi devam ettiren bir program:

let number = 100;

while (number >= 100 && number <= 200) {
  number = +prompt("Bir sayi giriniz");
}

console.log("100 ile 200 arasinda bir deger girmediniz");

//! Kullanicidan cevap alinip devam etme/etmeme durumlarinda kullanabiliyoruz

let cevap = prompt;
