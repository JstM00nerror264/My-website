document.addEventListener('DOMContentLoaded', (event) => {
  // Create containers for the buttons
  const linkButtonContainer = document.getElementById('link-button-container');
  const nonLinkButtonContainer = document.getElementById('non-link-button-container');

  // Function to create a link button
  function createLinkButton(text, link, iconClass) {
      const linkButton = document.createElement('a');
      linkButton.href = link;
      linkButton.target = '_blank'; // Open link in a new tab
      linkButton.className = 'link-button';
      linkButton.innerHTML = `<i class="${iconClass}"></i> ${text}`;
      linkButtonContainer.appendChild(linkButton);
  }

  // Function to create a regular button
  function createButton(text, iconClass) {
      const button = document.createElement('button');
      button.className = 'regular-button';
      button.innerHTML = `<i class="${iconClass}"></i> ${text}`;
      nonLinkButtonContainer.appendChild(button);
  }

  // Create link buttons
  createLinkButton('DeviantArt', 'https://www.deviantart.com/JstM00Nerror264', 'fab fa-deviantart');
  createLinkButton('YouTube', 'https://www.youtube.com/@MoonWatcher-NightWingSeer', 'fab fa-youtube');
  createLinkButton('GitHub', 'https://github.com/JstM00nerror264', 'fab fa-github');

  // Create regular buttons
  createButton('Visual Studio Code', 'fas fa-code'); // Visual Studio Code icon
  createButton('OBS Studio', 'fas fa-video'); // OBS Studio icon
  createButton('GIMP', 'fas fa-paint-brush'); // GIMP icon
});