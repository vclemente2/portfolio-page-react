import { SkillCard } from "../SkillCard";
import {
  StyledContainer,
  StyledList,
  StyledListItem,
  StyledSubtitle
} from "../UI";
import { lightText, primaryColor } from "../UI/variables";
import { DiNodejsSmall, DiReact } from "react-icons/di";
import { SiPostgresql, SiMongodb } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";

export function Skills() {
  return (
    <StyledContainer
      id="skills"
      align="center"
      backgroundColor="secondary"
      justifyContent="center"
      containerDirection="column"
    >
      <StyledSubtitle color={lightText}>Skills</StyledSubtitle>

      <StyledList justifyContent="center">
        <StyledListItem>
          <SkillCard
            icon={<DiNodejsSmall />}
            iconColor={primaryColor}
            iconSize="2.5rem"
          >
            Node JS
          </SkillCard>
        </StyledListItem>

        <SkillCard
          icon={<SiPostgresql />}
          iconColor={primaryColor}
          iconSize="2.5rem"
        >
          PostgreSQL
        </SkillCard>

        <SkillCard
          icon={<SiMongodb />}
          iconColor={primaryColor}
          iconSize="2.5rem"
        >
          MongoDB
        </SkillCard>

        <SkillCard
          icon={<DiReact />}
          iconColor={primaryColor}
          iconSize="2.5rem"
        >
          React
        </SkillCard>

        <SkillCard
          icon={<AiFillHtml5 />}
          iconColor={primaryColor}
          iconSize="2.5rem"
        >
          HTML
        </SkillCard>

        <SkillCard
          icon={<IoLogoCss3 />}
          iconColor={primaryColor}
          iconSize="2.5rem"
        >
          CSS
        </SkillCard>
      </StyledList>
    </StyledContainer>
  );
}
