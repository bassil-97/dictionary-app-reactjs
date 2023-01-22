import styled from "styled-components";

export const StyledWrapper = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content-center;
  flex-direction: column;
  min-height: 100vh;
  padding: 5rem 1.5rem;
  background-color: ${(props) => props?.theme?.colors?.bgMain};
  font-family: "Roboto", sans-serif;
  transition: background-color 400ms ease-in-out;

  @media screen and (max-width: 768px) {
    padding: 3rem .5rem;
  }
`;

export const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content-center;
    flex-direction: column;

    @media screen and (max-width: 992px) {
        width: 90%;
    }
`;
