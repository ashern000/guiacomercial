import { HeaderStyled, ListStyled, ItemStyled, LogoStyled, NavStyled, UlStyled, LiStyled, Search, FormStyled } from "./styles"
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header() {
    return (

        <HeaderStyled>
            <ListStyled>
                <ItemStyled><i><MdMenu size={30} /></i></ItemStyled>

                <Link to="/"><LogoStyled>Comart</LogoStyled></Link>

                <ItemStyled>
                    <Link to="/favoritos"><BsFillSuitHeartFill size={25} /></Link>
                    <Link to="/login"><BsFillPersonFill size={25} /></Link>
                </ItemStyled>
            </ListStyled>

            <NavStyled>
                <UlStyled>
                    <LiStyled>
                        <Link to="/categorias">
                            Todas categorias
                        </Link>
                    </LiStyled>

                    <LiStyled>
                        <Link to="/categorias">
                            Todas categorias
                        </Link>
                    </LiStyled>

                    <LiStyled>
                        <Link to="/categorias">
                            Todas categorias
                        </Link>
                    </LiStyled>

                    <LiStyled>
                        <Link to="/categorias">
                            Todas categorias
                        </Link>
                    </LiStyled>

                </UlStyled>
                <Search>
                    <FormStyled>

                    </FormStyled>
                </Search>
            </NavStyled>
        </HeaderStyled>
    )
}