import styled from "styled-components";

export const SelectedWordContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
`;

export const SelectedWordHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  & h1 {
    font-size: 3rem;
  }

  & small {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const SelectedWordBody = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;

  & a {
    text-decoration: underline;
  }
`;

export const SelectedWordSection = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Unbounded", cursive;
`;

export const ListTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  text-transform: capitalize;
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: 200;
`;

export const List = styled.ul`
  list-style: none;
  margin: 30px 0px 40px 20px;
  font-size: 1.2rem;

  & li:not(:last-child) {
    margin-bottom: 14px;
  }

  & li::before {
    content: "\\2022";
    color: ${({ theme }) => theme.colors.purple};
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;

export const SynonymsTitle = styled.h2`
  text-transform: capitalize;
  font-weight: 200;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const SynonymsList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  & h2 {
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const Divider = styled.hr`
  width: 100%;
  background-color: lightgray;
`;
