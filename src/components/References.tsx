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

const StyledTableDiv = styled.div`
  margin-bottom: 40px;
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 0 auto;
`;

const StyledThead = styled.thead`
`;

const StyledTbody = styled.tbody`
    background-color: lightblue;
`;

const StyledTr = styled.tr`
`;

const StyledTh = styled.th`
  padding: 10px;
  border: 1px solid black;
  text-align: left;
  background-color: mintcream;
`;

const StyledTd = styled.td`
  padding: 10px;
  border: 1px solid black;
  text-align: left;
`;

export default function References() {
  return (
    <StyledDiv>
      <StyledH2>Professional References</StyledH2>
      <StyledTableDiv>
        <StyledTable>
          <StyledThead>
            <StyledTr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Position</StyledTh>
              <StyledTh>Contact</StyledTh>
            </StyledTr>
          </StyledThead>
          <StyledTbody>
            <StyledTr>
              <StyledTd>Barack Obama</StyledTd>
              <StyledTd>Former President</StyledTd>
              <StyledTd>obama@politics.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Taylor Swift</StyledTd>
              <StyledTd>Musician</StyledTd>
              <StyledTd>taylor@musicstar.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Jackie Chan</StyledTd>
              <StyledTd>Actor/Martial Artist</StyledTd>
              <StyledTd>jackie@kungfu.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Harry Houdini</StyledTd>
              <StyledTd>Magician</StyledTd>
              <StyledTd>houdini@magic.com</StyledTd>
            </StyledTr>
          </StyledTbody>
        </StyledTable>
      </StyledTableDiv>

      <StyledH2>Personal References</StyledH2>
      <StyledTableDiv>
        <StyledTable>
          <StyledThead>
            <StyledTr>
              <StyledTh>Name</StyledTh>
              <StyledTh>Relation</StyledTh>
              <StyledTh>Contact</StyledTh>
            </StyledTr>
          </StyledThead>
          <StyledTbody>
            <StyledTr>
              <StyledTd>LeBron James</StyledTd>
              <StyledTd>Father</StyledTd>
              <StyledTd>lebron@family.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Savannah James</StyledTd>
              <StyledTd>Mother</StyledTd>
              <StyledTd>savannah@family.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Bronny James</StyledTd>
              <StyledTd>Sibling</StyledTd>
              <StyledTd>bronny@family.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Bryce James</StyledTd>
              <StyledTd>Sibling</StyledTd>
              <StyledTd>bryce@family.com</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Zhuri James</StyledTd>
              <StyledTd>Sibling</StyledTd>
              <StyledTd>zhuri@family.com</StyledTd>
            </StyledTr>
          </StyledTbody>
        </StyledTable>
      </StyledTableDiv>
    </StyledDiv>
  );
};
