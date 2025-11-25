const showAlbumAndArtist = (album, artist, name) => {
  const output = document.getElementById("output");

  if (album.error || artist.error) {
    output.textContent = "Error loading music data.";
    return;
  }

  // Format fan number with commas
  const formattedFans = artist.nb_fan.toLocaleString();

  output.innerHTML = `
    <div class="greeting">
      <p>Hey <strong>${name}</strong>, you might wanna give this a listen today!</p>
    </div>

    <div class="album-card">
      <h2>${album.title}</h2>
      <p>By ${album.artist.name}</p>
      <img src="${album.cover_medium}" alt="Album cover for ${album.title}">
    </div>

    <div class="artist-card">
      <h3>Artist</h3>
      <p>Fans: ${formattedFans}</p>
      <img src="${artist.picture_medium}" alt="Portrait of ${artist.name}">
    </div>
  `;
};
