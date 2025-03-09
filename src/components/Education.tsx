import styled from "styled-components";

const StyledDiv = styled.div`
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 0px;
    background-color: whitesmoke;
`;

const StyledH2 = styled.h2`
    font-size: calc(24px + 0.5vw);
    color: black;
    margin-bottom: 20px;
    text-align: center;
`;

const StyledTableDiv = styled.div`
`;

const StyledTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 0 auto;
`;

const StyledThead = styled.thead`
`;

const StyledTr = styled.tr`
`;

const StyledTh = styled.th`
    padding: 10px;
    border: 1px solid black;
    text-align: left;
    background-color: mintcream;
`;

const StyledTbody = styled.tbody`
    background-color: lightblue;
`;

const StyledTd = styled.td`
    padding: 10px;
    border: 1px solid black;
    text-align: left;
`;

export default function Education() {
  return (
    <StyledDiv>
      <StyledH2>Education</StyledH2>
      <StyledTableDiv>
        <StyledTable>
          <StyledThead>
            <StyledTr>
              <StyledTh>Degree</StyledTh>
              <StyledTh>Institution</StyledTh>
              <StyledTh>Graduation Date</StyledTh>
            </StyledTr>
          </StyledThead>
          <StyledTbody>
            <StyledTr>
              <StyledTd>B.F.A. in Puppet Arts</StyledTd>
              <StyledTd>University of Connecticut, CT</StyledTd>
              <StyledTd>May 2012</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>B.S. in Fermentation Science</StyledTd>
              <StyledTd>Appalachian State University, NC</StyledTd>
              <StyledTd>May 2016</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Certificate in Bicycle Design and Fabrication</StyledTd>
              <StyledTd>Minnesota State College Southeast, MN</StyledTd>
              <StyledTd>December 2018</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>B.S. in Bakery Science</StyledTd>
              <StyledTd>Kansas State University, KS</StyledTd>
              <StyledTd>May 2020</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>B.A. in Bagpiping</StyledTd>
              <StyledTd>Carnegie Mellon University, PA</StyledTd>
              <StyledTd>May 2022</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>M.S. in Memeology</StyledTd>
              <StyledTd>University of Texas at Austin, TX</StyledTd>
              <StyledTd>May 2023</StyledTd>
            </StyledTr>
            <StyledTr>
              <StyledTd>Ph.D. in Packaging</StyledTd>
              <StyledTd>Michigan State University, MI</StyledTd>
              <StyledTd>Ongoing</StyledTd>
            </StyledTr>
          </StyledTbody>
        </StyledTable>
      </StyledTableDiv>
    </StyledDiv>
  );
};