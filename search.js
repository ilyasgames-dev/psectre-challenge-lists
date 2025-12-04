function sortBy(field) {
  challengesData.sort((a, b) => {
    if (field === 'points') return b.points - a.points;
    if (field === 'name') return a.name.localeCompare(b.name);
    return 0;
  });
  renderChallenges(challengesData);
}

document.getElementById('search').addEventListener('input', e => {
  const term = e.target.value.toLowerCase();
  const filtered = challengesData.filter(c =>
    c.name.toLowerCase().includes(term) ||
    c.verifier.toLowerCase().includes(term) ||
    (c.firstVictor && c.firstVictor.toLowerCase().includes(term)) ||
    (c.secondVictor && c.secondVictor.toLowerCase().includes(term))
  );
  renderChallenges(filtered);
});
