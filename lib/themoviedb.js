const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjQ3N2Y2MWViZjE3MzY1Njg5ZjdhZDE0MTc2M2M3MSIsIm5iZiI6MTc0MTgyNDUxNC4wOTMsInN1YiI6IjY3ZDIyMjAyYTFmMzZlY2RkYzFkZThjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7MrZSgPPieqelgF2Kf8ESLceNN99FlPkPEHR7TM7o9c",
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
      score: item.vote_count,
      slug: id,
      title,
      image: img,
    };
  });
}

export async function getmovieDetails(slug) {
  const MOVIE_DETAILS = `'https://api.themoviedb.org/3/movie/${slug}?language=es-CL'`;

  const rawData = await fetch(MOVIE_DETAILS);
  const json = await rawData.json();

  const { components } = json;
  const { title, description, criticScoreSummary, images } = components[0];
  const { score } = criticScoreSummary;

  // get the card image
  const cardImage = images.find((image) => image.typeName === "cardImage");
  const { bucketType, bucketPath } = cardImage;
  const img = `https://www.metacritic.com/a/img/${bucketType}${bucketPath}`;

  const rawReviews = components[3].data.items;

  // get the reviews
  const reviews = rawReviews.map((review) => {
    const { quote, score, date, publicationName, author } = review;
    return { quote, score, date, publicationName, author };
  });

  return {
    img,
    title,
    slug,
    description,
    score,
    reviews,
  };
}
