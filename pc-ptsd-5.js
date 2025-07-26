document.getElementById('ptsd-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let totalScore = 0;

  // Loop through 5 questions
  for (let i = 1; i <= 5; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      totalScore += parseInt(selected.value);
    } else {
      alert("Please answer all questions before submitting.");
      return;
    }
  }

  const resultBox = document.getElementById('result');
  resultBox.style.display = 'block';

  const positiveScreening = totalScore >= 3;

  resultBox.innerHTML = `
    <h2>PC-PTSD-5 Score: ${totalScore} / 5</h2>
    <p><strong>Screening Result:</strong> ${positiveScreening ? "Positive" : "Negative"} for PTSD</p>

    <h3>Interpretation & Next Steps</h3>
    <table>
      <thead>
        <tr>
          <th>Score</th>
          <th>Screening Outcome</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>0–2</td>
          <td>Negative</td>
          <td>Monitoring or no further action</td>
        </tr>
        <tr>
          <td>3–5</td>
          <td>Positive</td>
          <td>Further clinical evaluation recommended</td>
        </tr>
      </tbody>
    </table>

    <p style="margin-top: 20px; font-style: italic;">
      This screening tool is not a diagnostic instrument. Please consult a licensed mental health professional for diagnosis and treatment.
    </p>
  `;
});