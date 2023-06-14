import { StyledContainer, StyledH3 } from "../UI";
import { IconContext } from "react-icons";

export function SkillCard({ children, icon, iconColor, iconSize }) {
  return (
    <StyledContainer
      widthValue={() =>
        window.innerWidth >= 1024
          ? "13.5vw"
          : window.innerWidth >= 768
          ? "30vw"
          : "40vw"
      }
      heightValue={() =>
        window.innerWidth >= 1024
          ? "13.5vw"
          : window.innerWidth >= 768
          ? "30vw"
          : "40vw"
      }
      padding="1rem"
      containerDirection="column"
      justifyContent="flex-end"
      gapValue=".5rem"
      marginValue="1rem 0.5rem"
    >
      <IconContext.Provider value={{ color: iconColor, size: iconSize }}>
        {icon}
        <StyledH3>{children}</StyledH3>
      </IconContext.Provider>
    </StyledContainer>
  );
}
