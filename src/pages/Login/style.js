import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #999;
  box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
  border-radius: 10px;
  width: 450px;
  margin: 3rem auto;
  padding: 0.7rem;

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 340px;
    padding: 10px;
  }
`;

export const Register = styled.h3`
  font-size: 1.5em;
  letter-spacing: 0.1rem;
  color: #000000;
  font-family: "Arial";
  font-weight: 600;

  @media (min-width: 300px) and (max-width: 1200px) {
    font-size: 0.9em;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px;

  & label {
    font-size: 12px;
    margin-bottom: 6px;
    letter-spacing: 0.1rem;
    font-family: "Arial";
  }
  & input {
    width: 20rem;
    padding: 0.8rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 14px;
    outline: none;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    & input {
      width: 15rem;
    }
  }
`;

export const ShowPassword = styled.img`
  position: absolute;
  width: 1.3rem;
  height: 1.3rem;
  top: 42px;
  left: 330px;
  cursor: pointer;

  @media (min-width: 300px) and (max-width: 1200px) {
    left: 240px;
  }
`;

export const SubmitButton = styled.button`
  width: 22.5rem;
  color: white;
  background: #3c8224;

  margin-top: 20px;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  &[disabled] {
    background-color: grey;
    cursor: not-allowed;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 17.5rem;
  }
`;

export const StyledOR = styled.div`
  font-size: 12px;
  font-family: "Arial";
  margin-top: 10px;
  display: flex;
  justify-content: center;

  & div {
    width: 160px;
    background-color: #a9acb0;
    height: 1px;
    margin-top: 10px;
    box-shadow: 0px 3px 10px rgba(32, 32, 32, 0.1);
    border-radius: 6px;
  }

  & span {
    color: #a9acb0;
    padding: 0 5px;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    & div {
      width: 120px;
    }
  }
`;

export const StyledImg = styled.img`
  height: 20px;
  width: 20px;
  vertical-align: sub;
  margin-right: 5px;
  background-color: #ffffff;
  border-radius: 10px;
`;

export const StyledButton = styled.button`
  width: 22.5rem;
  color: white;
  background: #3c8224;

  margin-top: 20px;
  padding: 1rem;

  border: 1px solid ${(props) => (!props.facebook ? "none" : "#3b5998")};
  border-radius: 25px;

  cursor: pointer;
  font-size: 14px;
  color: ${(props) => (!props.facebook ? "#222" : "#ffffff")};
  background-color: ${(props) => (!props.facebook ? "#ffffff" : "#537FE7")};

  @media (min-width: 300px) and (max-width: 1200px) {
    width: 17.5rem;
  }
`;

export const AlredyAccount = styled.div`
  font-family: "Arial";
  font-size: 12px;
  color: #a9acb0;

  margin: 20px 0;
  text-decoration: none;
`;

export const StyledLink = styled(Link)`
  font-family: "Arial";
  text-decoration: none;
  color: #3c8224;
`;

export const ErrorMessage = styled.span`
  color: red;
  font-size: 16px;
  font-family: "Arial";
  margin: 10px;
`;
