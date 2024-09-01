//aturan js const

const bil = [1, 2, 3];
// bil[1] = 5;

bil.push(4, 5, 6);
console.log(bil);

//aturan js : perbedaan (== dan ===)

let a = 3;
let b = "3";

console.log(a == b);
true; // kalo pake (==) akan true, karna sama" angka 3
console.log(a === b);
false; // kalo pake ( === ) akan false. knp, var a = angka, var b = teks

// aturan js : perbedaan for loop dan cara singkat hitung total

//fpr loop
const uts = [75, 87, 80];

let hasil = 0;

for (let i = 0; i < uts.length; i++) {
  hasil += uts[i];
}
console.log(hasil);

// cara singkatnya menggunakan method array<prototype>reduce
const nilai = [75, 87, 80];

let jadi = nilai.reduce((hariIni, besok) => (hariIni += besok));

console.log(jadi);

// aturan js : (??) artinya nullish coalescing berguna mengambil  nilai berikutnya, tapi ada resiko jika nama berikutnya juga kosong. maka dari itu ada cara dengan (||) atau OR.

// (??)
let nama = "oci";

const namaPemilik = nama ?? "";

console.log(namaPemilik);

// (||) OR

let namae = "";

const namePemilik = namae || "oci";

console.log(namePemilik);

//
