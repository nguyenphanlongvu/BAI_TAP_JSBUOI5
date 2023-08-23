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
