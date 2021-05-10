import styled from "styled-components";

const StyledHello = styled.h1``;

const Hello = ({ name }) => <StyledHello>Hello {name}!</StyledHello>;

export default Hello;
