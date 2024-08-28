import styled from "styled-components";

export const TeamDataContainerBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  gap: 15px;
`;

export const DataContainerDetails = styled.div`
  border: 1px solid #e9e8e8;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 250px;
  border-radius: 12px;
`;

export const DataContainerHeader = styled.div`
  display: flex;
  gap: 10px;
`;

export const DataHeader = styled.div`
  color: black;
  text-align: center;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;

export const DataValueContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const DataValue = styled.div`
  color: black;
  font-size: 27px;
  line-height: 20px;
  font-weight: 600;
`;

export const DataIconContainer = styled.div``;

export const DataDescription = styled.div`
  color: gray;
  text-align: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
`;
