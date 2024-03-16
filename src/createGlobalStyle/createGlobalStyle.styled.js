import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`

ul {
  list-style: none;
}

li {
  text-decoration: none;
}

ul,
h2,
h3,
p{
  margin: 0;
  padding: 0;
}

body {
  background: ${(props) => props.backgroundColor};
}

.NavLink,
button{
  cursor: pointer;
}

select {
  -webkit-appearance: none;
}

div[id="root"]{
  position: relative;
}
`;

export default GlobalStyled;
