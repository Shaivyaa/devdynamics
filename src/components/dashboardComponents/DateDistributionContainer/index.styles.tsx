import styled from "styled-components";

export const DateDistributionContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid #e9e8e8;
  padding: 12px;
  max-height: 400px;
`;

export const DateDistributionHeader = styled.div`
  color: black;
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
`;

export const DistributorDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-right: 1px solid #e9e8e8;
  padding-right: 12px;
`;

export const DistributorDetailsBox = styled.div`
  display: flex;
  gap: 30px;
`;

export const DistributorName = styled.div`
  color: black;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;

export const DateText = styled.div`
  color: gray;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;

export const DaywiseActivityDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ActivityName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ActivityContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const LabelName = styled.div`
  color: black;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;

export const Count = styled.div`
  color: gray;
  font-size: 15px;
  line-height: 20px;
  font-weight: 500;
`;
