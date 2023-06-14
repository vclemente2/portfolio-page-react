import { StyledContainer, StyledH3 } from "../UI";
import { DiReact } from "react-icons/di";
import { IconContext } from "react-icons";

export function SkillCard() {
  return (
    <StyledContainer
      widthValue={() =>
        window.innerWidth >= 1024
          ? "15vw"
          : window.innerWidth >= 768
          ? "30vw"
          : "40vw"
      }
      heightValue={() =>
        window.innerWidth >= 1024
          ? "15vw"
          : window.innerWidth >= 768
          ? "30vw"
          : "40vw"
      }
      padding="0.5rem"
    >
      <StyledH3>React</StyledH3>
      <IconContext.Provider value={{ color: "blue", size: "2.5rem" }}>
        <DiReact />
      </IconContext.Provider>
    </StyledContainer>
  );
}
