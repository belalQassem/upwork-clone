import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  position: absolute;
  top: 133px;
  right: 100px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;
  padding: 10px;
  & img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
  & span {
    margin-top: -12px;
    color: #444;
    font-size: 14px;
    margin-bottom: 10px;
  }
  & div {
    color: #3c8224;
  }
  &:hover {
    h2 {
      color: #3c8224;
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const Info = styled.ul`
  width: 300px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;
  padding: 20px;
  & li svg {
    background-color: #fff;
    border: 1px solid #909090;

    width: 18px;
    margin-left: 60px;
    padding: 10px;
    border-radius: 30px;
    cursor: pointer;

  }

  & li p {
    width: 150px;
    display: inline-block;
    
  }
  & li p span {
    display: block;
    margin-top: 12px;
    width: 200px;
    color: #888;
  }
`;

export const MoreInfo = styled.div`
  width: 320px;
  border: 1px solid #e4ebe4;
  border-radius: 10px;

  & p {
    display: inline-block;
    cursor: pointer;
  }

  & span {
    width:200px;
    display: inline-block;
    margin-left: 20px;
    
  }
`;
