const username = 'Thib454';
const projectsList = document.getElementById('projects-list');

fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
  .then(response => response.json())
  .then(repos => {
    if (!Array.isArray(repos)) {
      projectsList.innerHTML = '<p>Could not load projects.</p>';
      return;
    }
    const ul = document.createElement('ul');
    repos.forEach(repo => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a> - ${repo.description || 'No description'}`;
      ul.appendChild(li);
    });
    projectsList.appendChild(ul);
  })
  .catch(() => {
    projectsList.innerHTML = '<p>Error loading projects.</p>';
  });
