import styled from "styled-components";
import Calculator from "../components/Calculator";

const StyledDiv = styled.div`
  padding: 20px;
  background-color: whitesmoke;
  border-radius: 8px;
  margin-bottom: 0px;
`;

const StyledH2 = styled.h2`
  font-size: calc(24px + 0.5vw);
  text-align: center;
  color: black;
  margin-bottom: 20px;
`;

const StyledProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledProDiv = styled.div`
  padding: 20px;
  background-color: white;
  border: 1px solid black;
  border-radius: 8px;
`;

const StyledH3 = styled.h3`
  font-size: calc(20px + 0.3vw);
  color: black;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: calc(16px + 0.2vw);
  color: black;
  line-height: 1.5;
`;

const StyledUl = styled.ul`
  list-style: disc;
  padding-left: 20px;
  margin-top: 10px;
`;

const StyledLi = styled.li`
  font-size: calc(16px + 0.2vw);
  margin-bottom: 5px;
`;

const StyledA = styled.a`
  color: blue;  
  text-decoration: none;  
  font-weight: bold;  
  
  &:hover {
    color: navy;  
    text-decoration: underline;  
  }
`;

export default function Projects() {
  return (
    <StyledDiv>
      <StyledH2>Projects</StyledH2>
      <StyledProjectDiv>
        <StyledProDiv>
          <StyledH3>Calculator</StyledH3>
          <Calculator />
        </StyledProDiv>
        <StyledProDiv>
          <StyledH3>Racist Deed Detection Project</StyledH3>
          <StyledP>
            This project focused on processing thousands of historical deeds to detect and 
            analyze racially restrictive covenants. Using OCR, keyword detection, and machine 
            learning techniques, we identified potential racism in these deeds by extracting 
            and analyzing relevant text.
          </StyledP>
          <StyledUl>
            <StyledLi><strong>Duration:</strong> September 2024 - December 2024</StyledLi>
            <StyledLi><strong>Technologies:</strong> OCR, Python, React, NLP, Logistic Regression, BERT</StyledLi>
            <StyledLi><strong>Features:</strong> Extracted location information, detected keywords indicating racial restrictions, and outputted results to structured reports.</StyledLi>
            <StyledLi><strong>Impact:</strong> Improved access to historical records for public awareness and research on racial housing restrictions.</StyledLi>
          </StyledUl>
          <StyledP>
            Try: <StyledA href="https://ml-longfellow-land-use-mass.vercel.app/" target="_blank">Deed Restriction Artificial Intelligence Notification System</StyledA>
          </StyledP>
        </StyledProDiv>
      </StyledProjectDiv>
    </StyledDiv>
  );
};
