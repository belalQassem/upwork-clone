import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


body {
    font-family: 'Arial';
}

ul {
    list-style: none;
}


.active {
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
}


`;

export const Container = styled.div`
  padding: 0 1%;
  min-height: 300px;
  margin: 30px auto;
  transition: all 0.5s;
  width: 1200px;
`;
