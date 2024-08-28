import styled from "styled-components";

export const HeroSectionWrapper = styled.div`
  background-color: #fcfcfe;
`;

export const HeroSectionContainer = styled.div`
  width: 100%;
  max-width: 780px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 45px;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;

export const HeroHeader = styled.div`
  color: black;
  text-align: center;
  font-size: 56px;
  font-weight: 600;
  line-height: 72px;
`;

export const HeroSubheader = styled.div`
  color: black;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const TrialButton = styled.button`
  background-color: transparent;
  color: #4d4dff;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1.125rem;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  transition: all 0.3s;
  display: flex;
  cursor: pointer;
  border: 1px solid #4d4dff;
`;

export const DemoButton = styled.button`
  background-color: #4d4dfe;
  color: white;
  border: none;
  text-align: center;
  white-space: nowrap;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.625rem 1.125rem;
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration: none;
  transition: all 0.3s;
  display: flex;
  color: 0 1px 2px #1018280d;
  cursor: pointer;
`;
