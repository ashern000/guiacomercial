import styled from "styled-components";

export const HeaderStyled = styled.header`
  width: 100%;
  background-color: #0081c9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListStyled = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 3.1rem;
  font-size: 2rem;
  width: 100%;
  text-decoration: none;

  @media (max-width: 767px) {
    width: 95%;
  }
`;

export const LogoStyled = styled.li`
  text-transform: uppercase;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const ItemStyled = styled.div`
  display: flex;
  width: 5%;
  justify-content: space-around;
  text-transform: uppercase;
  align-items: center;
  color: white;

  svg {
    transition: all 0.5s;
    color: white;
    text-decoration: none;
    justify-content: space-around;
    @media (max-width: 767px) {
    }
  }

  svg:hover {
    transform: scale(1.08);
  }

  i {
    display: none;
    @media (max-width: 767px) {
      display: block;
      margin-left: 2vh;
    }
  }
`;

export const NavStyled = styled.nav`
  width: 100%;
  height: 2.5rem;
  /* background-color: white; */
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const UlStyled = styled.ul`
  width: 62.5%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const LiStyled = styled.li`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* transition: 0.75s ease-in-out; */
  transition: 0.25s ease-in-out;

  :hover {
    /* background-color: rgba(0, 0, 255, 0.1); */
    background-color: #e8e8e8;
  }
`;

export const Search = styled.div`
  width: 15.5%;
  height: 1.52rem;
  border: 1px solid rgb(100, 100, 100);
  border-radius: 40px;
`;

export const FormStyled = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
`;

export const InputStyled = styled.input`
  width: 60%;
  background-color: transparent;
  height: auto;
  border: none;

  ::placeholder {
    /* text-align: center; */
    /* color: rgba(20, 20, 180); */
    color: black;
    /* font-size: 0.65rem; */
    font-size: 0.75rem;
  }

  :focus {
    outline: none;
  }

  @keyframes search {
    0% {
      rotate: 0deg;
    }
    50% {
      transform: scale(1.25, 1.25);
    }

    100% {
      transform: scale(1, 1);
      rotate: 360deg;
    }
  }

  :hover ~ button svg {
    animation: search 1.7s alternate 1 ease;
  }
`;

export const ButtonStyled = styled.button`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  svg {
    transition: 1s;
  }

  :hover svg {
    transform: scale(1.2, 1.2);
  }
`;
