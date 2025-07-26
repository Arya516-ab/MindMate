document.getElementById("bipolar-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let totalScore = 0;
  const questions = ["q1", "q2", "q3", "q4", "q5", "q6"];

  for (let q of questions) {
    const selected = document.querySelector(`input[name="${q}"]:checked`);
    if (selected) {
      totalScore += parseInt(selected.value);
    }
  }

  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";

  resultBox.innerHTML = `
    <p><strong>Your Score:</strong> ${totalScore}</p>
  <h2>Management</h2>
    <p>This tool helps screen for possible symptoms of Bipolar Disorder. It cannot replace a clinical diagnosis. Please consult a licensed mental health professional.</p>

    <table>
      <thead>
        <tr>
          <th>Score</th>
          <th>Interpretation</th>
          <th>Comments</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0–2</td>
          <td>Low likelihood</td>
          <td>Unlikely symptoms. No clinical signs of Bipolar Disorder detected.</td>
        </tr>
        <tr>
          <td>3–4</td>
          <td>Moderate likelihood</td>
          <td>Some symptoms suggest Bipolar tendencies. Clinical consultation advised.</td>
        </tr>
        <tr>
          <td>5–6</td>
          <td>High likelihood</td>
          <td>Symptoms strongly suggest Bipolar Disorder. Further professional assessment highly recommended.</td>
        </tr>
      </tbody>
    </table>

    <p class="note">Note: This tool is for awareness and screening purposes only. A full diagnostic assessment by a mental health professional is essential.</p>
  `;
});
