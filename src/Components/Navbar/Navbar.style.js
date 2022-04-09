import styled from "styled-components";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  padding: 20px;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  transition-timing-function: ease-in;
  transition: all 0.5s;

  background-color: ${({ show }) => (show ? "#111" : "none")};
`;

export const Logo = styled.img`
  object-fit: contain;
  position: fixed;
  left: 20px;
  width: 80px;
`;
export const Avatar = styled.img`
  object-fit: contain;
  width: 30px;
  position: fixed;
  right: 20px;
`;
