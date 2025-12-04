async function loadLeaderboard() {
  const res = await fetch('leaderboard.json');
  const data = await res.json();

  const container = document.getElementById('leaderboard');
  container.classList.add('leaderboard');
  container.innerHTML = `
    <h2>Leaderboard</h2>
    ${data.map(p => `
      <details>
        <summary>${p.name} — ${p.total} Points</summary>
        <ul>
          ${p.runs.map(r => `<li>${r.name} — ${r.points} pts (${r.note})</li>`).join('')}
        </ul>
      </details>
    `).join('')}
  `;
}

loadLeaderboard();
