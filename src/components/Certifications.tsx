import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-bottom: 0px;
`;

const StyledH2 = styled.h2`
  font-size: calc(24px + 0.5vw);
  color: black;
  margin-bottom: 20px;
  text-align: center;
`;

const StyledCertsDiv = styled.div`
`;

const StyledCertDiv = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
`;

const StyledH3 = styled.h3`
  font-size: calc(18px + 0.3vw);
  color: Navy;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: calc(14px + 0.2vw);
  color: black;
  line-height: 1.5;
`;

export default function Certifications() {
  return (
    <StyledDiv>
      <StyledH2>Certifications</StyledH2>
      <StyledCertsDiv>
        <StyledCertDiv>
          <StyledH3>Pokémon Professor Certification</StyledH3>
          <StyledP>Expertise in Pokémon training and battles.</StyledP>
        </StyledCertDiv>
        <StyledCertDiv>
          <StyledH3>Clairvoyance Certification</StyledH3>
          <StyledP>Proficient in communicating with spirits.</StyledP>
        </StyledCertDiv>
        <StyledCertDiv>
          <StyledH3>Vlogging Certification</StyledH3>
          <StyledP>Skilled in content creation for Instagram and TikTok.</StyledP>
        </StyledCertDiv>
        <StyledCertDiv>
          <StyledH3>Active Listening Certification</StyledH3>
          <StyledP>Expert in just listening.</StyledP>
        </StyledCertDiv>
        <StyledCertDiv>
          <StyledH3>UFO Investigator Certification</StyledH3>
          <StyledP>Trained in investigating and documenting flying objects.</StyledP>
        </StyledCertDiv>
      </StyledCertsDiv>
    </StyledDiv>
  );
};
