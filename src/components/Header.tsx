import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 20px;
  background: royalblue;
  color: white;
  text-align: left;

  @media (max-width: 750px) {
    text-align: center;
    width: 100%;
  }
`;

const StyledH1 = styled.h1`
  font-size: calc(24px + 0.5vw);
  margin: 0;
`;

const StyledP = styled.p`
  font-size: calc(16px + 0.2vw);
  margin-top: 5px;
  margin-bottom: 0px;
  margin-right: 0px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledH1>Jianying Liu</StyledH1>
      <StyledP>Welcome to my online resume</StyledP>
    </StyledHeader>
  );
};
