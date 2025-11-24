// Use a proxy to bypass CORS
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const chartUrl = "https://api.deezer.com/chart";

const getRandomAlbum = async () => {
  try {
    const res = await fetch(proxyUrl + chartUrl);
    if (!res.ok) throw new Error("Failed to fetch chart data");

    const data = await res.json();
    const albums = data.albums.data;

    const randomIndex = Math.floor(Math.random() * albums.length);
    return albums[randomIndex];
  } catch (err) {
    return { error: err.message };
  }
};

const getArtistInfo = async (artistId) => {
  try {
    const res = await fetch(proxyUrl + `https://api.deezer.com/artist/${artistId}`);
    if (!res.ok) throw new Error("Failed to fetch artist data");

    return await res.json();
  } catch (err) {
    return { error: err.message };
  }
};
