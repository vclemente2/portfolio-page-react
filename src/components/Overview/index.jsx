import styled from "styled-components";
import {
  StyledContainer,
  StyledH3,
  StyledList,
  StyledListItem,
  StyledTitle
} from "../UI";
import githubIcon from "../../assets/images/icons8-github.svg";
import instagramIcon from "../../assets/images/icons8-instagram.svg";
import linkedinIcon from "../../assets/images/icons8-linkedin.svg";
import pdfIcon from "../../assets/images/picture_as_pdf_FILL0_wght400_GRAD0_opsz36.svg";
import resume from "/document/Curriculo - Vinicius Bastos.pdf";
import { lightText } from "../UI/variables";

const StyledImg = styled.img`
  width: 30vw;
  height: 30vw;
`;

export function Overview() {
  return (
    <StyledContainer
      id="overview"
      backgroundColor="primary"
      containerDirection={() =>
        window.innerWidth >= 768 ? "row" : "column-reverse"
      }
      justifyContent="space-between"
      align={() => (window.innerWidth >= 768 ? "center" : "flex-start")}
    >
      <StyledContainer
        backgroundColor="primary"
        containerDirection="column"
        gapValue="1rem"
        padding="0px"
        widthValue={() => (window.innerWidth >= 768 ? "60vw" : "100%")}
      >
        <StyledTitle color={lightText}>Olá, seja bem-vindo(a)!</StyledTitle>
        <StyledTitle color={lightText}>
          Me chamo Vinicius e esta é a minha página pessoal, nela você poderá
          conhecer um pouco sobre mim e ter acesso ao meu portfólio de projetos
        </StyledTitle>
        <StyledH3 color={lightText}>
          Sou formado em Engenharia Civil e me especializei em desenvolvimento
          de software, com foco em aplicações web.
        </StyledH3>
        <StyledList gapValue="1rem" align="center">
          <StyledListItem>
            <a
              href="https://github.com/vclemente2"
              rel="noreferrer"
              target="_blank"
            >
              <img src={githubIcon} />
              Github
            </a>
          </StyledListItem>

          <StyledListItem>
            <a
              href="https://www.linkedin.com/in/vinicius-bastos-dev/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={linkedinIcon} />
              LinkedIn
            </a>
          </StyledListItem>

          <StyledListItem>
            <a
              href="https://www.instagram.com/clementevinicius/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={instagramIcon} />
              Instagram
            </a>
          </StyledListItem>

          <StyledListItem>
            <a href={resume} rel="noreferrer" target="_blank">
              <img src={pdfIcon} />
              Currículo
            </a>
          </StyledListItem>
        </StyledList>
      </StyledContainer>

      <StyledImg src="https://github.com/vclemente2.png" />
    </StyledContainer>
  );
}
