import styled from "styled-components";

export const Icons =styled.div`
position: relative;
right: 10px;

`

export const IconContainer = styled.span`
  position: relative;

  svg {
    margin: 38px 0 0 10px;
    width: 24px;
  }

  &:hover:before {
    content: attr(data-text);
    position: absolute;
    top: 100%;

    white-space: nowrap;
    background-color: #fefefe;
    color: #111;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
  }


  
`;
