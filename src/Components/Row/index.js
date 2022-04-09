import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { RowContainer, RowImages, Img } from "./Row.style";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const image_url = "https://image.tmdb.org/t/p/w500";

const Row = ({ fetchUrl, title, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(fetchUrl);
      setMovies(req.data.results);

      return req;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <RowContainer>
        <h2>{title}</h2>
        <RowImages>
          {movies.map((movie) => (
            <Img
              onClick={() => handleClick(movie)}
              isLargeRow={isLargeRow}
              key={movie.id}
              src={
                isLargeRow
                  ? image_url + movie.poster_path
                  : image_url + movie.backdrop_path
              }
              alt={movie.title}
            />
          ))}
        </RowImages>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </RowContainer>
    </>
  );
};

export default Row;
