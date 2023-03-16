import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: auto;
  margin: 0 auto;
  background-color: #001e00;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  gap: 20px;
  @media (min-width: 300px) and (max-width: 1200px) {
    width: 400px;
  }
`;

export const Ul = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  div > ul > li {
    padding-top: 10px;
  }

  & div > ul > li:hover {
    color: #3c8224;
    text-decoration: underline;
    cursor: pointer;
  }

  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
    width: 400px;
  }
`;

export const Icon = styled.img`
  width: 20px;
  height: 20px;
  vertical-align: bottom;
  margin-left: 20px;
  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
    margin-bottom: 5px;
  }
`;

export const Icons = styled.div`
  & div {
    margin-bottom: 20px;
  }
  width: 1200px;
  border-bottom: 1px solid #ffffff;
  display: flex;
  justify-content: space-between;
  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
    margin-left: 70px;
    width: 400px;
  }
`;
export const Foot2 = styled.div`
  margin: 10px auto;
  letter-spacing: 2px;
  font-size: 10px;

  @media (min-width: 300px) and (max-width: 1200px) {
    display: block;
    margin-left: 50px;
    font-size: 8px;
    width: 400px;
  }
`;
