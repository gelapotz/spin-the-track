document.getElementById("spinBtn").addEventListener("click", async () => {
  const name = document.getElementById("username").value || "Music Lover";

  const album = await getRandomAlbum();
  if (album.error) {
    showError(album.error);
    return;
  }

  const artist = await getArtistInfo(album.artist.id);
  showAlbumAndArtist(album, artist, name);
});
