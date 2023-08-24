//bai 1
function calculateResult() {
    var standardScore = parseFloat(document.getElementById("standardScore").value);
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    const subject3 = parseFloat(document.getElementById("subject3").value);
    var areaScore = parseFloat(document.getElementById("areaScore").value) || 0;
   var targetScore = parseFloat(document.getElementById("targetScore").value) || 0;

    if (subject1 === 0 || subject2 === 0 || subject3 === 0) {
        document.getElementById("result").textContent = "Bạn đã rớt";
        return;
    }

    var totalScore = subject1 + subject2 + subject3 + areaScore + targetScore;

    if (totalScore >= standardScore) {
        document.getElementById("result").textContent = `Bạn đã đậu, Tổng điểm: ${totalScore}`;
    } else {
        document.getElementById("result").textContent = "Bạn đã rớt";
    }
}
//bài 2
function tinhTien() {
    var hoVaTen = document.getElementById("hoVaTen").value*1 ;
    var soKw = document.getElementById("soKw").value*1;
    var tienTra = 0 ;
    if (soKw < 50 ) {
        tienTra = soKw * 500;

    }else if (50 <soKw && soKw <100 ) {
        tienTra = soKw * 650 ;
    }else if (100 < soKw && soKw < 150) {
        tienTra = soKw * 1100;
    }else {
        tienTra = soKw *1300 ;
    }
    document.getElementById("result1").textContent = `số tiền phải trả là : ${tienTra} VND`




}
// bài 3
function calculateTax() {
    var fullName = document.getElementById("fullName").value;
    var totalIncome = parseFloat(document.getElementById("totalIncome").value);
    var dependents = parseInt(document.getElementById("dependents").value);

    if (!fullName || isNaN(totalIncome) || isNaN(dependents)) {
        document.getElementById("taxResult").textContent = "Vui lòng nhập đầy đủ thông tin";
        return;
    }

   var taxableIncome = totalIncome  - 4000000 - dependents * 1600000;
 var taxRate = calculateTaxRate(taxableIncome);
    var taxAmount = taxableIncome * taxRate;

    document.getElementById("taxResult").textContent = `${fullName}, Thuế thu nhập cá nhân phải trả: ${taxAmount} VND`;
}

function calculateTaxRate(taxableIncome) {
    if (taxableIncome <= 60000000) {
        return 0.05;
    } else if (taxableIncome <= 120000000) {
        return 0.1;
    } else if (taxableIncome <= 210000000) {
        return 0.15;
    } else if (taxableIncome <= 384000000) {
        return 0.2;
    } else if (taxableIncome <= 624000000) {
        return 0.25;
    } else if (taxableIncome <= 960000000) {
        return 0.3;
    } else {
        return 0.35;
    }
}
//bài 4
function toggleKetNoi() {
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoiInput = document.getElementById("soKetNoi").value*1;

    if (loaiKhachHang === "nhaDan") {
        soKetNoiInput.disabled = true;
        soKetNoiInput.value = "";
    } evar
        soKetNoiInput.disabled = false;
    }

function tinhHoaDon() {
    var maKhachHang = document.getElementById("maKhachHang").value;
    var loaiKhachHang = document.getElementById("loaiKhachHang").value;
    var soKetNoi = parseInt(document.getElementById("soKetNoi").value);
    var soKenhCaoCap = parseInt(document.getElementById("soKenhCaoCap").value);

    let phiXuLy = 0;
    let phiDichVuCoBan = 0;
    let phiKenhCaoCap = 0;

    if (loaiKhachHang === "nhaDan") {
        phiXuLy = 4.5;
        phiDichVuCoBan = 20.5;
        phiKenhCaoCap = 7.5 * soKenhCaoCap;
    } else if (loaiKhachHang === "doanhNghiep") {
        phiXuLy = 15;
        phiDichVuCoBan = 75 + (soKetNoi - 10) * 5;
        phiKenhCaoCap = 50 * soKenhCaoCap;
    }

    var tongHoaDon = phiXuLy + phiDichVuCoBan + phiKenhCaoCap;

    document.getElementById("hoaDonResult").textContent = `Mã khách hàng: ${maKhachHang}\nTổng hóa đơn: ${tongHoaDon} $`;
}


