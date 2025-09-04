const edgeAInput = document.getElementById('edgeA');
const edgeBInput = document.getElementById('edgeB');
const edgeAResult = document.getElementById('edgeAResult');
const edgeBResult = document.getElementById('edgeBResult');
const centeringGrade = document.getElementById('centeringGrade');

function calculate() {
  let a = parseFloat(edgeAInput.value) || 0;
  let b = parseFloat(edgeBInput.value) || 0;
  let total = a + b;

  if (total > 0) {
    let aPercent = ((a / total) * 100).toFixed(1);
    let bPercent = ((b / total) * 100).toFixed(1);

    edgeAResult.textContent = aPercent + '%';
    edgeBResult.textContent = bPercent + '%';

    centeringGrade.textContent = getGrade(aPercent);
    applyGradeColor(centeringGrade.textContent);
  } else {
    edgeAResult.textContent = "0%";
    edgeBResult.textContent = "0%";
    centeringGrade.textContent = "-";
    centeringGrade.style.color = "white";
  }
}

function getGrade(percent) {
  let p = parseFloat(percent);
  if (p >= 50 && p <= 55) return "10";
  if (p >= 55.1 && p <= 60) return "9";
  if (p >= 60.1 && p <= 65) return "8";
  if (p >= 65.1 && p <= 70) return "7";
  if (p >= 70.1 && p <= 80) return "6";
  if (p >= 80.1 && p <= 85) return "5";
  if (p >= 85.1 && p <= 90) return "4";
  if (p >= 90.1) return "MC";
  return "-";
}

function applyGradeColor(grade) {
  switch (grade) {
    case "10": centeringGrade.style.color = "#4CAF50"; break; // green
    case "9": centeringGrade.style.color = "#8BC34A"; break;
    case "8": centeringGrade.style.color = "#CDDC39"; break;
    case "7": centeringGrade.style.color = "#FFC107"; break;
    case "6": centeringGrade.style.color = "#FF9800"; break;
    case "5": centeringGrade.style.color = "#FF5722"; break;
    case "4": centeringGrade.style.color = "#F44336"; break;
    case "MC": centeringGrade.style.color = "#E91E63"; break; // pink/red
    default: centeringGrade.style.color = "white";
  }
}

function resetValues() {
  edgeAInput.value = "";
  edgeBInput.value = "";
  edgeAResult.textContent = "0%";
  edgeBResult.textContent = "0%";
  centeringGrade.textContent = "-";
  centeringGrade.style.color = "white";
}

edgeAInput.addEventListener('input', calculate);
edgeBInput.addEventListener('input', calculate);
