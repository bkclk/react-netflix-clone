import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import {
  BannerBG,
  Content,
  BannerBtn,
  BannerH1,
  BannerDesc,
  BannerFade,
} from "./Banner.style";

const image_url = "https://image.tmdb.org/t/p/w500";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchTrending);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ]
      );

      return req;
    }
    fetchData();
  }, []);

  return (
    <BannerBG bgImage={image_url + movie?.backdrop_path}>
      <Content>
        <BannerH1>
          {movie?.name || movie?.title || movie?.original_name}
        </BannerH1>
        <BannerBtn>Play</BannerBtn>
        <BannerBtn>List</BannerBtn>
        <BannerDesc>{movie?.overview}</BannerDesc>
      </Content>
      <BannerFade />
    </BannerBG>
  );
};

export default Banner;
