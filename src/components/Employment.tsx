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

const StyledJobsDiv = styled.div`
`;

const StyledJobDiv = styled.div`
  margin-bottom: 30px;
  padding: 15px;
  border: 1px solid black;
  border-radius: 8px;
  background-color: white;
`;

const StyledH3 = styled.h3`
  font-size: calc(20px + 0.3vw);
  color: Navy;
  margin-bottom: 10px;
`;

const StyledP = styled.p`
  font-size: calc(16px + 0.2vw);
  margin-bottom: 5px;
  font-weight: bold;
`;

const StyledUl = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
`;

const StyledLi = styled.li`
  font-size: calc(16px + 0.2vw);
  margin-bottom: 5px;
`;

export default function Employment() {
  return (
    <StyledDiv>
      <StyledH2>Employment</StyledH2>
      <StyledJobsDiv>
        <StyledJobDiv>
          <StyledH3>Feng Shui Consultant</StyledH3>
          <StyledP>Company: Expert Designers</StyledP>
          <StyledP>Dates: Mar 2017 - Oct 2018</StyledP>
          <StyledUl>
            <StyledLi>Reorganized furniture to optimize energy flow.</StyledLi>
            <StyledLi>Provided personalized consultations for clients.</StyledLi>
            <StyledLi>Boosted customer satisfaction scores by 1000%.</StyledLi>
          </StyledUl>
        </StyledJobDiv>
        <StyledJobDiv>
          <StyledH3>Professional Queuer</StyledH3>
          <StyledP>Company: WaitBuddy</StyledP>
          <StyledP>Dates: Aug 2015 - Feb 2017</StyledP>
          <StyledUl>
            <StyledLi>Waited on behalf of clients for events up to 40 days.</StyledLi>
            <StyledLi>Maintained communication updates.</StyledLi>
            <StyledLi>Built a reputation for reliability.</StyledLi>
          </StyledUl>
        </StyledJobDiv>
        <StyledJobDiv>
          <StyledH3>Human Statue</StyledH3>
          <StyledP>Company: StreetArt Group</StyledP>
          <StyledP>Dates: Jun 2013 - Jul 2015</StyledP>
          <StyledUl>
            <StyledLi>Performed in public as a statue.</StyledLi>
            <StyledLi>Maintained statue position for over 363 days.</StyledLi>
            <StyledLi>Trained new performers in balance and endurance techniques.</StyledLi>
          </StyledUl>
        </StyledJobDiv>
        <StyledJobDiv>
          <StyledH3>Ice Rink Hand Holder</StyledH3>
          <StyledP>Company: Ice Arena</StyledP>
          <StyledP>Dates: Nov 2011 - May 2013</StyledP>
          <StyledUl>
            <StyledLi>Held 45,500 hands at various skating rinks.</StyledLi>
            <StyledLi>Provided a comforting presence to clients.</StyledLi>
            <StyledLi>Saved 5 people from falling.</StyledLi>
          </StyledUl>
        </StyledJobDiv>
      </StyledJobsDiv>
    </StyledDiv>
  );
};
