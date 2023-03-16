import styled from "styled-components";

export const Styledul = styled.ul`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 25px;

  li {
    position: relative;
    cursor: pointer;
  }
  li > li {
    font-size: 14px;
  }

  p:hover {
    color: #3c8224;
cursor:pointer;

  }
  li > ul {
    display: none;
    position: absolute;
    top: 105%;
    left: 0;
    border: 1px solid rgba(0, 30, 0, 0.15);
    box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
    color: black;
  }

  li:hover > ul {
    display: block;
    border-radius: 6px;
    width: 200px;
    padding: 10px;
    background-color: #ffffff;
  }

  li:hover > ul li {
    color: #000;
  }
  li:hover > ul::after {
    content: "";

    display: block;
    position: absolute;
    bottom: 100%;
    left: 20%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }
`;

export const LiMsg = styled.p`
  margin-top: 13px;
`;
export const LiOptions = styled.li`
  &:hover {
    background-color: #e5f6d3;
    cursor: pointer;
  }
  padding: 10px;
  display: block;
`;
export const P = styled.p`
color:green ;
font-family: Arial, Helvetica, sans-serif;
font-weight: bolder;

`