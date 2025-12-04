let challengesData = [];

async function loadChallenges() {
  const res = await fetch('challenges.json');
  challengesData = await res.json();
  renderChallenges(challengesData);
}

function renderChallenges(data) {
  data.sort((a, b) => b.points - a.points);
  data.forEach((c, i) => c.rank = i + 1);

  const container = document.getElementById('challenges');
  container.innerHTML = data.map(c => {
    const isNew = (Date.now() - new Date(c.dateAdded)) / (1000*60*60*24) < 7;
    return `
      <article class="level">
        <img src="${c.thumbnail}" alt="${c.name}"/>
        <div class="info">
          <h2>${c.rank}. ${c.name} 
            <span class="points">(${c.points} Points)</span>
            ${isNew ? '<span class="new">NEW</span>' : ''}
          </h2>
          <p><strong>ID:</strong> ${c.id}</p>
          <p><strong>Verified by:</strong> ${c.verifier}</p>
          <p><strong>First Victor:</strong> ${c.firstVictor || '—'}</p>
          <p><strong>Second Victor:</strong> ${c.secondVictor || '—'}</p>
        </div>
      </article>
    `;
  }).join('');
}

loadChallenges();
