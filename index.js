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
