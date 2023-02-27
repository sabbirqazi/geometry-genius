//  first card
document.getElementById("triangle-calc-btn").addEventListener("click", function () {
    const base = getInputValue("base-input-value");
    const height = getInputValue("height-input-value");
  
    if (
      isNaN(base) ||
      isNaN(height) ||
      base <= 0 ||
      height <= 0 ||
      !base ||
      !height
    ) {
      alert("Please enter valid positive numbers in both input fields");
    } else {
      const name = getElement("triangle");
      const area = 0.5 * base * height;
      serial += 1;
      setData(serial, name, area);
      document.getElementById("base-input-value").value = "";
      document.getElementById("height-input-value").value = "";
    }
    if (isNaN(base) || isNaN(height)) {
      document.getElementById("base-input-value").value = "";
      document.getElementById("height-input-value").value = "";
    }
  
  });