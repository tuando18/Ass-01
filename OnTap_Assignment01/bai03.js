console.log("Bài 03: Vòng lặp ngược từ n đến 1");

// Khai báo vòng lặp ngược từ 10 đến 1
for (let i = 10; i >= 1; i--) {
    // Log giá trị i để kiểm tra
    console.log("i = " + i);
}


// Ứng dụng vòng lặp ngược, in ra số lẻ từ 1 đến 20 theo thứ tự giảm dần
// Mời mọi người làm ạ
let soLeArr = [];
for (let i = 20; i >= 1; i--) {
    // Tìm số lẻ
    if (i%2 == 1) {
        soLeArr.push(i);
    }
}
console.log("Danh sách số lẻ: " + soLeArr.join("; "));
