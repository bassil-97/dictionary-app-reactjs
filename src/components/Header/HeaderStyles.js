import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;

  & h2 {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const HeaderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ThemeToggle = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
