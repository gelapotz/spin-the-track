document.getElementById("spinBtn").addEventListener("click", async () => {
  const nameInput = document.getElementById("username");
  const name = nameInput.value.trim();

  // If no name entered, show an alert and stop
  if (!name) {
    alert("Please enter your name before spinning!");
    nameInput.focus();
    return;
  }

  const album = await getRandomAlbum();
  if (album.error) {
    showError(album.error);
    return;
  }

  const artist = await getArtistInfo(album.artist.id);
  showAlbumAndArtist(album, artist, name);
});
