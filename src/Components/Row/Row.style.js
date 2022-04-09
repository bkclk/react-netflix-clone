import styled from "styled-components";

export const RowContainer = styled.div`
  color: white;
  margin-left: 20px;
`;
export const RowImages = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Img = styled.img`
  object-fit: contain;
  margin-right: 8px;
  max-height: ${({ isLargeRow }) => (isLargeRow ? "250px" : "100px")};
  width: 100%;
  transition: transform 450ms;
  cursor: pointer;
  &:hover {
    transform: scale(${({ isLargeRow }) => (isLargeRow ? 1.1 : 1.07)});
    opacity: 1;
    cursor: pointer;
  }
`;
