console.log("Bài 02: Vòng lặp từ 1 đến n");

console.log("// Khai báo vòng lặp từ 1 đến 10");
// Khai báo vòng lặp từ 1 đến 10
for (let i = 1; i <= 10; i++) {
    // Log ra giá trị của i
    console.log("i = " + i);
}

console.log("// Khai báo vòng lặp từ 1 đến n");
// Khai báo vòng lặp từ 1 đến n
// 1. Tìm n nhập vào từ bàn phím
let n = Number(prompt("Mời bạn nhập n:"));

// 2. Khai báo vòng lặp từ 1 đến n
for (let i = 1; i <= n; i++) {
    // Log ra giá trị của i
    console.log("i = " + i);
}

console.log("// 3. In ra số chẵn từ 1 đến n");
// 3. In ra số chẵn từ 1 đến n
let soChanArr = [];
for (let i = 1; i <= n; i++) {
    // Tìm số chẵn và in ra giá trị
    if (i%2 === 0) {
        soChanArr.push(i);
    }
}
console.log("Danh sách số chẵn là: " + soChanArr.join(", "));
