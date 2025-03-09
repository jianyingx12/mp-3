import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px;
  background: royalblue;
  color: white;
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 14px;
  margin: 0;
`;

const StyledA = styled.a`
  color: white;
  text-decoration: underline;
  &:hover {
    color: lightgray;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledP>
        All Rights Reserved By Jianying Liu | <StyledA href="#">Credits</StyledA> &copy;
      </StyledP>
    </StyledFooter>
  );
};
