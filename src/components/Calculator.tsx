import { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  padding: 20px;
  background: white;
  border: 2px solid black;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
`;

const StyledH2 = styled.h2`
  font-size: calc(20px + 0.5vw);
  text-align: center;
  color: Navy;
  margin-bottom: 20px;
`;

const StyledInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-size: calc(14px + 0.2vw);
  color: black;
  margin-bottom: 5px;
`;

const StyledInput = styled.input`
  padding: 10px;
  font-size: calc(16px + 0.2vw);
  border: 1px solid black;
  border-radius: 4px;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
`;

const StyledButton = styled.button`
  width: 30%;
  padding: 10px;
  font-size: calc(16px + 0.2vw);
  border-radius: 4px;
  background-color: black;
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: navy;
  }
`;

const ClearButton = styled(StyledButton)`
  background-color: firebrick;

  &:hover {
    background-color: red;
  }
`;

const ResultDiv = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: calc(18px + 0.2vw);
`;

export default function Calculator() {
  const [firstNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [result, setResult] = useState<string | number | null>(null);

  function calculate(operator: string) {
    const num1 = Number(firstNum);
    const num2 = Number(secondNum);

    if (operator === "/" && num2 === 0) {
      setResult("Can't divide by zero!");
      return;
    }

    let result: number = 0;

    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else if (operator === "^") {
      let total = 1;
      for (let i = 0; i < num2; i++) {
        total *= num1;
      }
      result = total;
    } else if (operator === "%") {
      result = num1 % num2;
    }

    setResult(result);
  };

  function clearCalculator () {
    setFirstNum("");
    setSecondNum("");
    setResult(null);
  };

  return (
    <StyledDiv>
      <StyledH2>Calculator</StyledH2>
      
      <StyledInputDiv>
        <StyledLabel>First number:</StyledLabel>
        <StyledInput
          type="number"
          placeholder="Number"
          value={firstNum}
          onChange={(e) => setFirstNum(e.target.value)}
        />
      </StyledInputDiv>

      <StyledInputDiv>
        <StyledLabel>Second number:</StyledLabel>
        <StyledInput
          type="number"
          placeholder="Number"
          value={secondNum}
          onChange={(e) => setSecondNum(e.target.value)}
        />
      </StyledInputDiv>

      <ButtonDiv>
        <StyledButton onClick={() => calculate("+")}>+</StyledButton>
        <StyledButton onClick={() => calculate("-")}>-</StyledButton>
        <StyledButton onClick={() => calculate("*")}>*</StyledButton>
        <StyledButton onClick={() => calculate("/")}>/</StyledButton>
        <StyledButton onClick={() => calculate("^")}>^</StyledButton>
        <StyledButton onClick={() => calculate("%")}>%</StyledButton>
        <ClearButton onClick={clearCalculator}>Clear</ClearButton>
      </ButtonDiv>

      <ResultDiv>
        {result !== null ? (
            <h3 style={{ color: (typeof result === "number" && result < 0) ? "red" : "purple" }}>
              {result}
            </h3>
          ) : (
            ""
          )}
      </ResultDiv>
    </StyledDiv>
  );
};
