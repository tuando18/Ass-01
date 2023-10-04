console.log("Bài 04: Khai báo mảng object");

// 1. Khai báo mảng object
let thongKeBanHang = [
    {
        sanPham: "iPhone 15",
        soLuong: 5,
        donGia: 21000000
    },
    {
        sanPham: "iPhone 15 Pro",
        soLuong: 2,
        donGia: 28000000
    },
    {
        sanPham: "iPhone 15 Pro Max",
        soLuong: 2,
        donGia: 34000000
    }
]

console.log("// Bài 05: Duyệt mảng object để in dữ liệu");
// Bài 05: Duyệt mảng object để in dữ liệu
for (let sanPham of thongKeBanHang) {
    // In ra giá trị của phần tử
    // console.log("Thông tin sản phẩm: " + sanPham);
    // console.log("Thông tin sản phẩm: ", sanPham);

    // In đẹp
    console.log("Tên sản phẩm: " + sanPham.sanPham);
    console.log("Số lượng: " + sanPham.soLuong);
    console.log("Đơn giá: " + sanPham.donGia);
    console.log("----------------------------------");
}


console.log("// Bài 06: Tìm phần tử có đơn giá lớn nhất từ mảng object");
// Bài 06: Tìm phần tử có đơn giá lớn nhất từ mảng object
// Mời mọi người làm
// Sang, Linh, Khánh, Ký Anh, Minh Long, Nguyễn Anh Tuấn, Duy Mạnh, Thượng, Tuấn Anh, Hoàng + 0.5 điểm


// 1. Đi tìm giá trị max
let donGiaMax = 0; // Khai báo biến trung gian

// Chạy vòng lặp duyệt qua mảng
for (let sp of thongKeBanHang) {
    // So sánh để tìm max
    if (sp.donGia > donGiaMax) {
        donGiaMax = sp.donGia;
    }
}

// Kết thúc vòng lặp thứ nhất sẽ tìm được max
// In thử ra giá trị của max
console.log("Đơn giá max: ", donGiaMax);

// Chạy vòng lặp thứ 2 để tìm những sản phẩm có đơn giá bằng max
let spMax = []; // Khai báo mảng trung gian
for (let sp of thongKeBanHang) {
    if (sp.donGia === donGiaMax) {
        spMax.push(sp.sanPham);
    }
}

// In ra danh sách sản phẩm có đơn giá max
console.log("Sản phẩm có đơn giá max: " + spMax.join(", "));



console.log("// Bài 07: Thêm phần tử object vào mảng object");
// Bài 07: Thêm phần tử object vào mảng object

// Push thêm object vào mảng
thongKeBanHang.push({
    sanPham: "iPhone 15 Plus",
    soLuong: 5,
    donGia: 25000000
})

// Cách 2: Push object vào mảng
let iPhone15Plus = {
    sanPham: "iPhone 15 Plus",
    soLuong: 5,
    donGia: 25000000
}
thongKeBanHang.push(iPhone15Plus);
console.log(thongKeBanHang);

// Mời mọi người duyệt lại giá trị của mảng thongKeBanHang
// Code thôi


// Mời mọi người viết thử bài tìm sản phẩm có doanh lớn nhất của mảng thongKeBanHang
// Code thôi
