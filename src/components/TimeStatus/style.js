import styled from "styled-components";

export const StatusOfTime = styled.div`
  display: flex;
  padding: 10px;
  margin-bottom: 30px;
  justify-content: space-between;
  border-radius: 10px;
  width: 820px;
  border: 1px solid #e4ebe4;
  & img {
    width: 180px;
    height: 140px;
  }
`;

export const Status = styled.h3`
  letter-spacing: 2px;
  font-size: 28px;
  margin-left: 10px;
  font-weight: 700;
`;

export const Time = styled.p`
  letter-spacing: 1px;

  margin-top: 40px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;
