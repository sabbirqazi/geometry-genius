let serial = 0;
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
  // second card 
document.getElementById("rectangle-calc-btn").addEventListener("click", function () {
    const width = getInputValue("width-value");
    const length = getInputValue("length-value");
    if (
      isNaN(width) ||
      isNaN(length) ||
      width <= 0 ||
      length <= 0 ||
      !width ||
      !length
    ) {
      alert("Please enter valid positive numbers in both input fields");
    } else {
      const name = getElement("rectangle");
      const area = width * length;
      serial += 1;
      setData(serial, name, area);
      document.getElementById("width-value").value = "";
      document.getElementById("length-value").value = "";
    }
    if (isNaN(width) || isNaN(length)) {
      document.getElementById("width-value").value = "";
      document.getElementById("length-value").value = "";
    }
  });
  // third card
  
  document
    .getElementById("Parallelogram-calc-btn")
    .addEventListener("click", function () {
      const base = getInputValue("para-base-value");
      const height = getInputValue("para-height-value");
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
        const name = getElement("Parallelogram");
        const area = base * height;
        serial += 1;
        setData(serial, name, area);
        document.getElementById("para-base-value").value = "";
        document.getElementById("para-height-value").value = "";
      }
      if (isNaN(base) || isNaN(height)) {
        document.getElementById("para-base-value").value = "";
        document.getElementById("para-height-value").value = "";
      }
    });
  // fourth  card 
  document.getElementById("Rhombus-calc-btn").addEventListener("click", function () {
    const d1 = getInputValue("rhombus-d1-value");
    const d2 = getInputValue("rhombus-d2-value");
    if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0 || !d1 || !d2) {
      alert("Please enter valid positive numbers in both input fields");
    } else {
      const name = getElement("Rhombus");
      const area = 0.5 * d1 * d2;
      serial += 1;
      setData(serial, name, area);
      document.getElementById("rhombus-d1-value").value = "";
      document.getElementById("rhombus-d2-value").value = "";
    }
    if (isNaN(d1) || isNaN(d2)) {
      document.getElementById("rhombus-d1-value").value = "";
      document.getElementById("rhombus-d2-value").value = "";
    }
  });
  //  fifth card 
  document.getElementById("Pentagon-calc-btn").addEventListener("click", function () {
    const p = getInputValue("pentagon-p-value");
    const b = getInputValue("pentagon-b-value");
    if (isNaN(p) || isNaN(b) || p <= 0 || b <= 0 || !p || !b) {
      alert("Please enter valid positive numbers in both input fields");
    } else {
      const name = getElement("Pentagon");
      const area = 0.5 * p * b;
      serial += 1;
      setData(serial, name, area);
      document.getElementById("pentagon-p-value").value = "";
      document.getElementById("pentagon-b-value").value = "";
    }
    if (isNaN(p) || isNaN(b)) {
      document.getElementById("pentagon-p-value").value = "";
      document.getElementById("pentagon-b-value").value = "";
    }
  });
  //   sixth card
  document.getElementById("Ellipse-calc-btn").addEventListener("click", function () {
    const pi = 3.14;
  
    const a = getInputValue("ellipse-a-value");
    const b = getInputValue("ellipse-b-value");
    if (isNaN(a) || isNaN(b) || a <= 0 || b <= 0 || !a || !b) {
      alert("Please enter valid positive numbers in both input fields");
    } else {
      const name = getElement("Ellipse");
      const ellipseArea = pi * a * b;
      const area = ellipseArea.toFixed(2);
      serial += 1;
      setData(serial, name, area);
      document.getElementById("ellipse-a-value").value = "";
      document.getElementById("ellipse-b-value").value = "";
    }
    if (isNaN(a) || isNaN(b)) {
      document.getElementById("ellipse-a-value").value = "";
      document.getElementById("ellipse-b-value").value = "";
    }
  });
  
  //getting value
  function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
  }
  
  function getElement(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    return elementValue;
  }
  //showing on table with dynamic elements
  function setData(serial, name, area) {
    const tbody = document.getElementById("table-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${serial}</td>
      <td>${name}</td>
      <td>${area.toFixed(2)}<span>cm <sup>2</sup></span></td>
    `;
    tbody.appendChild(tr);
  }
//set the randomcolor
  function colorChangeOnHover(cards) {
    cards.forEach(function(card) {
      card.addEventListener("mouseover", function() {
        let color = "#" + Math.random().toString(16).slice(2, 8);
        card.style.backgroundColor = color;
      });
      card.addEventListener("mouseout", function() {
        card.style.backgroundColor = "";
      });
    });
  }
  
  var cards = document.querySelectorAll(".card");
  colorChangeOnHover(cards);
   