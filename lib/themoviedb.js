const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_THEMOVIEDB_API_KEY}`,
  },
};

export async function getLatestMovies() {
  const apiUrl =
    "https://api.themoviedb.org/3/movie/popular?language=es-CL&page=1";

  const rawData = await fetch(apiUrl, options);
  if (!rawData.ok) {
    throw new Error("Error fetching data");
  }
  const json = await rawData.json();

  const { results: items } = json;

  return items.map((item) => {
    const { id, poster_path, title } = item;

    // crea la imagen
    const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return {
      description: item.overview,
      releaseDate: item.release_date,
      score: item.vote_average,
      slug: id,
      title,
      image: img,
    };
  });
}

export async function getMovieDetails(slug) {
  const MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/${slug}?language=es-CL`;
  const rawData = await fetch(MOVIE_DETAILS, options);
  const json = await rawData.json();
  const {
    id,
    poster_path,
    title,
    release_date,
    status,
    vote_average,
    overview,
    original_title,
    backdrop_path,
  } = json;
  // get the card image
  const poster = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backdrop = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  return {
    id,
    title,
    slug,
    release_date,
    status,
    vote_average,
    overview,
    original_title,
    backdrop,
    poster,
  };
}
