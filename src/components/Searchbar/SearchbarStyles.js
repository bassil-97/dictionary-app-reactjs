import styled from "styled-components";

export const SearchbarWrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.inputBgMain};
  border-radius: 10px;

  & span {
    position: absolute;
    right: 30px;
    bottom: 20px;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const SearchbarInput = styled.input`
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:focus {
    outline: none;
  }
`;
