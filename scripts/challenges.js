async function loadChallenges() {
  try {
    const res = await fetch('challenges.json');
    if (!res.ok) throw new Error("Failed to load challenges.json");
    const data = await res.json();

    // ⭐ SORT BY POINTS (highest → lowest)
    data.sort((a, b) => b.points - a.points);

    const container = document.getElementById('challenges');
    if (!container) throw new Error("Challenges container not found");

    container.classList.add('challenges');
    container.innerHTML = `
      <h2>Challenges</h2>
      <div class="challenge-list">
        ${data.map((ch, index) => `
          <div class="challenge">
            <img src="${ch.thumbnail}" alt="${ch.name} thumbnail">
            
            <!-- ⭐ Add numbering here -->
            <h3>#${index + 1} — ${ch.name}</h3>

            <p><strong>Points:</strong> ${ch.points}</p>
            <p><strong>ID:</strong> ${ch.ID:}</p>
            <p><strong>Verifier:</strong> ${ch.verifier}</p>
            <p><strong>First Victor:</strong> ${ch.firstVictor ?? '—'}</p>
            <p><strong>Second Victor:</strong> ${ch.secondVictor ?? '—'}</p>
            <p><strong>Date Added:</strong> ${ch.dateAdded}</p>
          </div>
        `).join('')}
      </div>
    `;
  } catch (err) {
    console.error("Error loading challenges:", err);
  }
}

loadChallenges();
