import styled from "styled-components";
import { primaryColor } from "./variables";
import logoUrl from "../../assets/images/logo_24.svg";

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
