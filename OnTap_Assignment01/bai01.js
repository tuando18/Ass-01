console.log("// Bài 01: Khai Báo & Sử dụng hàm có tham số và giá trị trả về");

// Cú pháp khai báo hàm có tham số và giá trị trả về
function tenHam(thamSo) {
    let ketQua;
    return ketQua;
}

// 1. Khai báo hàm tính chu vi
function timChuVi(thamSoBanKinh) {
    let ketQua = thamSoBanKinh * 2 * 3.14;

    return ketQua;
}

// 2. Sử dụng hàm
let banKinh = Number(prompt("Mời bạn nhập vào bán kính:"));
let chuVi = timChuVi(banKinh);
console.log("Chu vi là: " + chuVi);