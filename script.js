// 🌗 Theme Toggle Handler
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "🌞" : "❄️";
});

// 🧭 Navigation Router
const app = document.getElementById("app");

function route(page) {
  switch (page) {
    case 'home':
      return app.innerHTML = `
        <section>
          <h1>🌞 Welcome to the Temperature Converter</h1>
          <p> 🍀 This application helps you convert temperatures between Celsius, Fahrenheit, and Kelvin 🌡️</p>
          <p><strong> 🍀 Why Temperature Conversion Matters:</strong> Different countries use different scales, so conversion helps ensure everyone understands weather, science, cooking, and healthcare the same way.</p>
          <p> 🍀 Use this tool to convert quickly and easily!</p>
        </section>`;
    
    case 'formulas':
      return app.innerHTML = `
        <section>
          <h1>📚 Temperature Conversion Formulas</h1>
          <ul style="line-height: 2;">
            <li>🌡️ <strong>Celsius to Fahrenheit:</strong> (°C × 9/5) + 32</li>
            <li>🌡️ <strong>Fahrenheit to Celsius:</strong> (°F - 32) × 5/9</li>
            <li>🌡️ <strong>Celsius to Kelvin:</strong> °C + 273.15</li>
            <li>🌡️ <strong>Kelvin to Celsius:</strong> K - 273.15</li>
            <li>🌡️ <strong>Fahrenheit to Kelvin:</strong> (°F - 32) × 5/9 + 273.15</li>
            <li>🌡️ <strong>Kelvin to Fahrenheit:</strong> (K - 273.15) × 9/5 + 32</li>
          </ul>
        </section>`;
    
    case 'cf':
      return renderConverter("Celsius", "Fahrenheit");

    case 'ck':
      return renderConverter("Celsius", "Kelvin");

    case 'fk':
      return renderConverter("Fahrenheit", "Kelvin");
  }
}

// 🔁 Render Conversion Interface
function renderConverter(unit1, unit2) {
  app.innerHTML = `
    <section>
      <h1>🔁 ${unit1} ↔ ${unit2} Converter</h1>
      <div class="converter">
        <div class="input-group">
          <label>Enter Temperature in ${unit1}</label>
          <input type="number" id="input1" placeholder="${unit1} (°)">
          <button onclick="convert('${unit1}', '${unit2}', 'input1', 'result1')">Convert to ${unit2}</button>
          <div id="result1" class="result"></div>
        </div>
        <div class="input-group">
          <label>Enter Temperature in ${unit2}</label>
          <input type="number" id="input2" placeholder="${unit2} (°)">
          <button onclick="convert('${unit2}', '${unit1}', 'input2', 'result2')">Convert to ${unit1}</button>
          <div id="result2" class="result"></div>
        </div>
      </div>
    </section>`;
}

// 🧮 Convert Function
function convert(from, to, inputId, resultId) {
  const val = parseFloat(document.getElementById(inputId).value);
  const resultBox = document.getElementById(resultId);

  if (isNaN(val)) {
    resultBox.textContent = "❗ Please enter a valid number.";
    return;
  }

  let result;

  if (from === "Celsius" && to === "Fahrenheit") result = val * 9 / 5 + 32;
  else if (from === "Fahrenheit" && to === "Celsius") result = (val - 32) * 5 / 9;
  else if (from === "Celsius" && to === "Kelvin") result = val + 273.15;
  else if (from === "Kelvin" && to === "Celsius") result = val - 273.15;
  else if (from === "Fahrenheit" && to === "Kelvin") result = (val - 32) * 5 / 9 + 273.15;
  else if (from === "Kelvin" && to === "Fahrenheit") result = (val - 273.15) * 9 / 5 + 32;

  resultBox.textContent = `🌡️ ${val}° ${from} = ${result.toFixed(2)}° ${to}`;
}

// 📦 Load Home on Initial
route('home');
