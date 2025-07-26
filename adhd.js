document.getElementById('adhd-form').addEventListener('submit', function (e) {
  e.preventDefault();

  let totalScore = 0;
  const totalQuestions = 5;
  let answered = 0;

  for (let i = 1; i <= totalQuestions; i++) {
    const options = document.getElementsByName(`q${i}`);
    let selected = false;

    for (let opt of options) {
      if (opt.checked) {
        totalScore += parseInt(opt.value);
        selected = true;
        break;
      }
    }

    if (selected) answered++;
  }

  const resultBox = document.getElementById('result');

  if (answered < totalQuestions) {
    resultBox.innerHTML = `<p style="color:red;">Please answer all the questions.</p>`;
    resultBox.style.display = 'block';
    return;
  }

  let severity = '';
  let comment = '';

  if (totalScore < 8) {
    severity = 'Low likelihood';
    comment = 'Symptoms do not strongly indicate ADHD. Monitor and consult if needed.';
  } else if (totalScore <= 12) {
    severity = 'Moderate likelihood';
    comment = 'Symptoms may suggest ADHD. Further evaluation recommended.';
  } else {
    severity = 'High likelihood';
    comment = 'Likely ADHD symptoms. Clinical evaluation strongly recommended.';
  }
     
  resultBox.innerHTML = `
  <h2>Management</h2>
  <p><strong>Your Score:</strong> ${totalScore}</p>
  <p>This tool is for screening and monitoring symptom severity. It cannot replace a clinical diagnosis. Please consult a mental health professional for further evaluation.</p>

  <table>
    <thead>
      <tr>
        <th>Score</th>
        <th>Symptom Severity</th>
        <th>Comments</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>0–7</td>
        <td>Low likelihood</td>
        <td>Symptoms do not strongly indicate ADHD. Monitor as needed.</td>
      </tr>
      <tr>
        <td>8–12</td>
        <td>Moderate likelihood</td>
        <td>Symptoms may suggest ADHD. Consider further evaluation.</td>
      </tr>
      <tr>
        <td>13+</td>
        <td>High likelihood</td>
        <td>Symptoms strongly suggest ADHD. Clinical evaluation recommended.</td>
      </tr>
    </tbody>
  </table>

  <p class="note">Note: This tool is for informational purposes only and not a substitute for professional diagnosis.</p>
`;




  resultBox.style.display = 'block';
});
