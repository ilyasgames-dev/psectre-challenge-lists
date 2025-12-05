async function loadLeaderboard() {
  try {
    const res = await fetch('leaderboard.json');
    if (!res.ok) throw new Error("Failed to load leaderboard.json");
    const data = await res.json();

    const container = document.getElementById('leaderboard');
    if (!container) throw new Error("Leaderboard container not found");

    container.classList.add('leaderboard');
    container.innerHTML = `
      <h2>Leaderboard</h2>
      ${data.map(player => `
        <details>
          <summary>${player.name} — ${player.total} Points</summary>
          <ul>
            ${player.runs.map(run => `
              <li>${run.name} — ${run.points} pts (${run.note})</li>
            `).join('')}
          </ul>
        </details>
      `).join('')}
    `;
  } catch (err) {
    console.error("Error loading leaderboard:", err);
  }
}

loadLeaderboard();
