import styled from "styled-components";

const StyledDiv = styled.div`
  margin-bottom: 0px;
`;

const StyledH2 = styled.h2`
  font-size: calc(24px + 0.5vw);
  color: black;
  margin-bottom: 20px;
  margin-top: 0px;
`;

const StyledContentDiv = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageDiv = styled.div`
  margin-right: 20px;
  
  @media (max-width: 750px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const StyledImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 8px;
`;

const StyledTextDiv = styled.div`
  font-size: calc(16px + 0.2vw);
  color: black;
`;

const StyledP = styled.p`
  line-height: 1.5;
`;

const SkillsDiv = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: lightblue;
  border-radius: 8px;
`;

const StyledList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  line-height: 1.5;
`;

const StyledLi = styled.li`
`;

export default function Home() {
  return (
    <StyledDiv>
      <StyledH2>About Me</StyledH2>
      <StyledContentDiv>
        <ImageDiv>
          <StyledImg src="/Portrait.JPG" alt="Chill dude at school" />
        </ImageDiv>
        <StyledTextDiv>
          <StyledP>
            Greetings! I'm Jianying Liu, a senior at Boston University studying computer science.
            I would like to further my academic and professional involvement in research, while
            I continue advancing towards being a professional underwater ceramic cleaner.
          </StyledP>
        </StyledTextDiv>
      </StyledContentDiv>
      <SkillsDiv>
        <StyledH2>Key Skills</StyledH2>
        <StyledList>
          <StyledLi>Can debug code using only pressure points</StyledLi>
          <StyledLi>Can whisper to dragons</StyledLi>
          <StyledLi>Once parallel parked a tricycle</StyledLi>
          <StyledLi>Can turn an Arduino into a fully functional teleportation device</StyledLi>
        </StyledList>
      </SkillsDiv>
    </StyledDiv>
  );
};
