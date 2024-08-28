import styled from "styled-components";

export const DashoboardWrapper = styled.div``;

export const DashboardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 80px auto;
  border: 1px solid #e9e8e8;
  background-color: #fbfbfb;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
`;

export const DashboardHeader = styled.div`
  border-bottom: 1px solid #e9e8e8;
  padding: 20px;
`;

export const StatsContainer = styled.div`
  display: flex;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 20px 20px 20px;
  border-right: 1px solid #e9e8e8;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const GraphWrapper = styled.div`
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const GraphHeader = styled.div`
  color: black;
  font-size: 22px;
  line-height: 28px;
  font-weight: 500;
`;
