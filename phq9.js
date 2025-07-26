document.getElementById("phq9-form").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  let totalScore = 0;

  // Loop through questions q1 to q9
  for (let i = 1; i <= 9; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      totalScore += parseInt(selected.value);
    }
  }

  // Show result section
  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";

  // Determine severity
  let severity = "";
  if (totalScore <= 4) {
    severity = "Minimal or None";
  } else if (totalScore <= 9) {
    severity = "Mild";
  } else if (totalScore <= 14) {
    severity = "Moderate";
  } else if (totalScore <= 19) {
    severity = "Moderately Severe";
  } else {
    severity = "Severe";
  }

  // Add result text
  resultBox.innerHTML = `
    <h2>Your PHQ-9 Score: ${totalScore} (${severity})</h2>
    <p><strong>Management Recommendation:</strong></p>
    <p>Scores ≥10 suggest further assessment by a mental health professional.</p>

    <table style="width:100%; border-collapse: collapse; margin-top: 20px;">
      <thead>
        <tr style="background-color: #bbdefb;">
          <th style="border: 1px solid #90caf9; padding: 10px;">Score</th>
          <th style="border: 1px solid #90caf9; padding: 10px;">Severity</th>
          <th style="border: 1px solid #90caf9; padding: 10px;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1px solid #90caf9; padding: 10px;">0–4</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Minimal or None</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Monitor</td>
        </tr>
        <tr>
          <td style="border: 1px solid #90caf9; padding: 10px;">5–9</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Mild</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Watchful waiting</td>
        </tr>
        <tr>
          <td style="border: 1px solid #90caf9; padding: 10px;">10–14</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Moderate</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Possible clinical intervention</td>
        </tr>
        <tr>
          <td style="border: 1px solid #90caf9; padding: 10px;">15–19</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Moderately Severe</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Active treatment likely needed</td>
        </tr>
        <tr>
          <td style="border: 1px solid #90caf9; padding: 10px;">20–27</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Severe</td>
          <td style="border: 1px solid #90caf9; padding: 10px;">Immediate professional help</td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top: 20px; font-size: 0.95rem;">
      <strong>Note:</strong> This tool is for screening only and doesn't replace professional clinical diagnosis. If you're concerned about your mental health, please talk to a healthcare provider.
    </p>
    <h>Temporary Relief Resources</h>
    <p>
    <div class="result-links" style="margin-top: 20px;">
  <a href="https://www.youtube.com/watch?v=C0akn-xvcX8&pp=0gcJCfwAo7VqN5tD">→ watch a movie</a><br>
  <a href="1800-599-0019 (Minds Foundation)">→ Helpline no. </a><br>
  <a href="https://archive.org/details/overcomingdepres00gilb">→ Overcoming Depression - by paul gilbert</a>
</div>

    
    </p>
  `;
});
