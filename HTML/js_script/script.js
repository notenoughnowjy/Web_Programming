function calculateArea() {
  const radius = parseFloat(document.getElementById("radius").value);
  if (!isNaN(radius)) {
      const area = Math.PI * Math.pow(radius, 2);
      document.getElementById("result").textContent = `지름이 ${radius}인 원의 넓이: ${area.toFixed(10)}`;
  } else {
      document.getElementById("result").textContent = "반지름을 유효한 숫자로 입력하세요.";
  }
}
