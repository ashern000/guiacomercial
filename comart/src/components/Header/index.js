import { HeaderStyled, ListStyled, ItemStyled } from "./styles"
import {FiUserPlus, FiHeart, FiMenu} from "react-icons/fi"

export default function Header(){
    return(

        <HeaderStyled>
            <ListStyled>
                <ItemStyled><FiMenu size={30}/></ItemStyled>
                <ItemStyled>Comart</ItemStyled>
                <ItemStyled>
                    <FiUserPlus/>
                    <FiHeart/>
                </ItemStyled>
            </ListStyled>
        </HeaderStyled>
    )
}