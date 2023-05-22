import { useEffect } from "react";
import {
  HeaderStyled,
  ListStyled,
  ItemStyled,
  LogoStyled,
  NavStyled,
  UlStyled,
  LiStyled,
  Search,
  FormStyled,
  InputStyled,
  ButtonStyled,
} from "./styles";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState(null);
  const pesquisar = (e) => {
    e.preventDefault();
    if (pesquisa == null) {
      alert("Insira algo para procurar");
    } else {
      navigate("/subcategorias");
    }
  };

  return (
    <HeaderStyled>
      <ListStyled>
        <ItemStyled>
          <i>
            <MdMenu size={30} />
          </i>
        </ItemStyled>

        <Link to="/">
          <LogoStyled>Comart</LogoStyled>
        </Link>

        <ItemStyled>
          <Link to="/favoritos">
            <BsFillSuitHeartFill size={25} />
          </Link>
          <Link to="/login">
            <BsFillPersonFill size={25} />
          </Link>
        </ItemStyled>
      </ListStyled>

      <NavStyled>
        <UlStyled>
          <LiStyled>
            <Link to="/categorias">Todas categorias</Link>
          </LiStyled>

          <LiStyled>
            <Link to="/categorias">Todas categorias</Link>
          </LiStyled>

          <LiStyled>
            <Link to="/categorias">Todas categorias</Link>
          </LiStyled>

          <LiStyled>
            <Link to="/categorias">Todas categorias</Link>
          </LiStyled>
        </UlStyled>
        <Search>
          <FormStyled onSubmit={pesquisar}>
            <InputStyled
              onChange={(e) => setPesquisa(e.target.value)}
              placeholder="Pesquise o que precisa..."
            />

            <ButtonStyled type="submit">
              <FiSearch />
            </ButtonStyled>
          </FormStyled>
        </Search>
      </NavStyled>
    </HeaderStyled>
  );
}
