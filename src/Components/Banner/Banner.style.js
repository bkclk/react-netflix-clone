import styled from "styled-components";

export const BannerBG = styled.div`
  background-size: cover;
  background-image: url(${({ bgImage }) => bgImage});
  background-position: center center;
  color: #fff;
  object-fit: contain;
  height: 448px;
`;
export const Content = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`;
export const BannerH1 = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`;

export const BannerBtn = styled.button`
  cursor: pointer;
  color: white;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  background-color: rgba(51, 51, 51, 0.5);
  &:hover {
    color: #000;
    background-color: #e6e6e6;
    transition: all 0.2s;
  }
`;

export const BannerDesc = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  max-width: 360px;
  height: 80px;
  text-overflow: ellipsis;
`;

export const BannerFade = styled.div`
  height: 7.4rem;
  background-image: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`;
