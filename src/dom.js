const showAlbumAndArtist = (album, artist, name) => {
  const output = document.getElementById("output");

  if (album.error || artist.error) {
    output.textContent = "Error loading music data.";
    return;
  }

  // Personalized greeting
  output.innerHTML = `
    <p>Hey ${name}, you might wanna give these a listen today!</p>
    <h2>${album.title}</h2>
    <p>By ${album.artist.name}</p>
    <img src="${album.cover_medium}" alt="${album.title}">
    <h3>Artist Info</h3>
    <p>Fans: ${artist.nb_fan}</p>
    <img src="${artist.picture_medium}" alt="${artist.name}">
  `;
};
