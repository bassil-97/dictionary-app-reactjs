import styled from "styled-components";

export const AudioPlayerConatiner = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    opacity: 0.5;
    transition-duration: 0.5s;
  }
`;
