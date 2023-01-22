import { StyledWrapper, Container } from "./WrapperStyles";

const Wrapper = ({ children }) => {
  return (
    <StyledWrapper>
      <Container>{children}</Container>
    </StyledWrapper>
  );
};

export default Wrapper;
