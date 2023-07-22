function confirmCount() {
  let start = Number(window.document.querySelector("input#txtstart").value);
  let end = Number(window.document.querySelector("input#txtend").value);
  let step = Number(window.document.querySelector("input#txtpass").value);
  let res = window.document.querySelector("div#res");
  let result = "";

  if (isNaN(start) || isNaN(end) || isNaN(step)) {
    res.innerHTML = "Invalid input! Please enter numeric values.";
    return;
  }

  if (start <= 0 || end <= 0) {
    res.innerHTML = "Cannot count! Please enter positive values.";
    return;
  } else if (step <= 0) {
    window.alert("Invalid step! Considering STEP 1");
    step = 1;
  }

  if (start < end) {
    // Counting up
    for (let i = start; i <= end; i += step) {
      result += `${i} `;
      for (let j = 1; j <= step; j++) {
        result += "👉";
      }
    }
  } else {
    // Counting down
    for (let c = start; c >= end; c -= step) {
      result += `${c} `;
      for (let j = 1; j <= step; j++) {
        result += "👉";
      }
    }
  }

  result = result.slice(0, -2) + "🏁";
  res.innerHTML = result;
}
