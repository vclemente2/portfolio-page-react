import { SkillCard } from "../SkillCard";
import { StyledContainer } from "../UI";

export function Skills() {
  return (
    <StyledContainer
      id="skills"
      backgroundColor="secondary"
      justifyContent="center"
      gapValue=".5rem"
    >
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
      <SkillCard></SkillCard>
    </StyledContainer>
  );
}
