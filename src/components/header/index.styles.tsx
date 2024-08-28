import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const LoginButton = styled.button`
  background-color: transparent;
  color: black;
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
  cursor: pointer;

  &:hover {
    background-color: #e5e6e5;
  }
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
