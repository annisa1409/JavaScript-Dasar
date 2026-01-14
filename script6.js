let dataString = "data string";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \r \t \b \f)
let data1 = 'ucup \tberkata "apa kabar dunia?"';
console.log(data1);
let data2 = "otong berkata \"tetap asyik\"";
console.log(data2);
let data3 = "ucup berjalan-jalan di tepi pantai, \nkeren";
console.log(data3);

// 2. Literasi string (template literal string)
let namaDepan = "Otong";
let namaBelakang = "Surotong";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; //
console.log(namaLengkap);

// lebih elegan supaya tidak error
let biodata =  `$ {namaDepan} ${namaBelakang} dengan umur $(umur)`;
console.log(biodata);


