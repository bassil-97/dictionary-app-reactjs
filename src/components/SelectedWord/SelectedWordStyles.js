import styled from "styled-components";

export const SelectedWordWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const Button = styled.button`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: white;
  transition: 0.5s;
  font-weight: bold;
  font-family: "Roboto", sans-serif;

  &:hover {
    cursor: pointer;
    transition-duration: 0.5s;
    background-color: ${({ theme }) => theme.colors.lightPurple};
  }
`;
