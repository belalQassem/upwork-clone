import styled from "styled-components";

export const Stylednav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Head = styled.h1`
  cursor: pointer;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  color: #3c8224;
  @media (min-width: 300px) and (max-width: 1190px) {
    margin: 10px auto;
  }
`;
export const Linkk = styled.link`
text-decoration: none;
`
export const StyledBoxes = styled.div`
  display: flex;
  gap: 300px;
`;
export const Stylednotifecation = styled.div`
  display: flex;
  position: relative;
`;

export const AccountIMg = styled.div`
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 6px;
  position: relative;
  right: 10px;
  cursor: pointer;

  & img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    margin-top: 18px;
  }
`;

export const Profilediv = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 250px;
  border-radius: 6px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0 10px 2px rgba(0, 30, 0, 0.15);
  padding: 10px;
  z-index: 1;
  & img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
  }
  & span {
    margin-top: -12px;
    color: #444;
    font-size: 12px;
    margin-bottom: 10px;
  }

  & div {
    border-radius: 10rem;
    border: 1px solid #a4dd83;
  }

  &::after {
    content: "";

    display: block;
    position: absolute;
    bottom: 100%;
    right: 5%;
    transform: translateX(-50%);
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid #fff;
  }

  & ul {
    width: 100%;

    margin-right: 50px;
  }

  & li {
    padding: 10px;
    width: 98%;
    cursor: pointer;
  }

  & li:hover {
    background-color: #efe;
  }
`;

export const Online = styled.button`
  background-color: ${(props) => (props.isOnline ? "#108a00" : "transparent")};
  color: ${(props) => (props.isOnline ? "#ffffff" : "#111111")};
  padding: 10px;
  border-radius: 10rem;
  border: none;
  transition: all 0.5s;
`;
export const Svg = styled.svg`
height:100px ;
width: 100px;

`