document.getElementById("spinBtn").addEventListener("click", async () => {
  const album = await getRandomAlbum();
  if (album.error) {
    showError(album.error);
    return;
  }

  const artist = await getArtistInfo(album.artist.id);
  showAlbumAndArtist(album, artist);
});
