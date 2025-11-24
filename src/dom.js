const showAlbumAndArtist = (album, artist) => {
  const output = document.getElementById("output");
  if (album.error || artist.error) {
    output.textContent = "Error loading music data.";
    return;
  }
  output.innerHTML = `
    <h2>${album.title}</h2>
    <p>By ${album.artist.name}</p>
    <img src="${album.cover_medium}" alt="${album.title}">
    <h3>Artist Info</h3>
    <p>Fans: ${artist.nb_fan}</p>
    <img src="${artist.picture_medium}" alt="${artist.name}">
  `;
};

const showError = (message) => {
  document.getElementById("output").textContent = `Error: ${message}`;
};
