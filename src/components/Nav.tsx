import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: navy;
  width: 30%;
  padding: 10px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 750px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const StyledItem = styled.li`
  margin: 10px 0;

  @media (max-width: 750px) {
    margin: 0 5px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: calc(16px + 0.2vw);
  color: white;

  &:hover {
    color: #007BFF;
  }
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        <StyledItem><StyledLink to="/">Home</StyledLink></StyledItem>
        <StyledItem><StyledLink to="/education">Education</StyledLink></StyledItem>
        <StyledItem><StyledLink to="/employment">Employment</StyledLink></StyledItem>
        <StyledItem><StyledLink to="/certifications">Certifications</StyledLink></StyledItem>
        <StyledItem><StyledLink to="/references">References</StyledLink></StyledItem>
        <StyledItem><StyledLink to="/projects">Projects</StyledLink></StyledItem>
      </StyledList>
    </StyledNav>
  );
};
