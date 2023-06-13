import styled from "styled-components";
import { primaryColor, secondaryColor, lightText, darkText } from "./variables";
import logoUrl from "../../assets/images/logo_24.svg";
import backgroundTexture from "../../assets/images/background-textura.jpg";

export const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  height: 56px;
  justify-content: space-between;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    padding: 0 2rem;
  }

  @media screen and (min-width: 1024px) {
    height: 88px;
    padding: 2rem;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  width: 100vw;

  & span {
    display: none;
  }

  & li {
    align-items: center;
    display: flex;
    gap: 0.5rem;
  }

  & .logo::before {
    content: url(${logoUrl});
  }

  & a {
    align-items: center;
    display: flex;
    font-weight: bold;
    gap: 0.5rem;
  }

  & span a {
    font-weight: 500;
  }

  & a:active {
    color: ${primaryColor};
  }

  @media screen and (min-width: 376px) {
    & img {
      display: none;
    }
  }

  @media screen and (min-width: 1024px) {
    & span {
      display: flex;
      flex-grow: 2;
      gap: 2rem;
      justify-content: flex-end;
      margin: 0 2rem;
    }

    & a:hover {
      color: ${primaryColor};
    }
  }
`;

export const StyledContainer = styled.div`
  align-items: ${({ align }) => (align ? align : "flex-start")};

  color: ${({ backgroundColor }) => (backgroundColor ? lightText : darkText)};

  background-color: ${({ backgroundColor }) =>
    backgroundColor === "primary"
      ? primaryColor
      : backgroundColor === "secondary"
      ? secondaryColor
      : "transparent"};

  display: flex;

  flex-direction: ${({ containerDirection }) =>
    containerDirection ? containerDirection : "row"};

  gap: ${({ gapValue }) => (gapValue ? gapValue : "0")};

  width: ${({ widthValue }) => (widthValue ? widthValue : "100%")};

  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};

  padding: 1rem;

  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${backgroundTexture});
    background-repeat: repeat; /* Repetir a imagem se necessário */
    z-index: -1;
  }

  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

export const StyledList = styled.ul`
  align-items: ${({ align }) => (align ? align : "flex-start")};

  display: flex;

  flex-direction: ${({ containerDirection }) =>
    containerDirection ? containerDirection : "row"};

  gap: ${({ gapValue }) => (gapValue ? gapValue : "0")};

  width: ${({ widthValue }) => (widthValue ? widthValue : "100%")};

  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
`;

export const StyledListItem = styled.li`
  display: flex;
  justify-content: center;

  & a {
    align-items: center;
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    :hover {
      color: ${({ hoverColor }) => (hoverColor ? hoverColor : "inherit")};
      font-size: 1.025rem;
      text-decoration: underline;
    }
  }
`;
