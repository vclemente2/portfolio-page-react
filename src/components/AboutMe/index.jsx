import { StyledContainer, StyledParagraph, StyledSubtitle } from "../UI";

export function AboutMe() {
  return (
    <StyledContainer
      containerDirection="column"
      gapValue="1rem"
      widthValue={() => (window.innerWidth >= 768 ? "60vw" : "100%")}
    >
      <StyledSubtitle id="sobre">Sobre Mim</StyledSubtitle>
      <StyledParagraph>
        Apaixonado por tecnologia e todo seu potencial de transformação. Fiz
        minha transição de carreira de Engenheiro Civil para Desenvolvedor de
        Software, buscando atuar com o que realmente gosto.
      </StyledParagraph>
      <StyledParagraph>
        Sou casado e vivo com minha esposa e o nosso gato Paçoca. Meus
        principais hobbies são sair com minha esposa, seja para aproveitar um
        bom filme no cinema, desfrutar de momentos agradáveis ou participar de
        festas de família nas datas comemorativas. Esses momentos são essenciais
        para mantermos um equilíbrio saudável entre o trabalho e a vida pessoal.
      </StyledParagraph>
    </StyledContainer>
  );
}
