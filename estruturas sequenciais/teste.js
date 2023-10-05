var area = 500;
var capA = 108;
var capB = 21.6;
var resto = 500;
var lata1 = 0;
var lata2 = 0;
while (resto > 0) {
    if (resto >= 108) {
        resto = resto - 108;
        lata1++;
    } else if (resto > 0) {
        resto = resto - 21.6;
        lata2++;
    }
}

console.log(lata1);
console.log(lata2);
console.log(resto);