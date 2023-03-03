import { HeaderStyled, ListStyled, ItemStyled, } from "./styles"
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md"

export default function Header() {
    return (

        <HeaderStyled>
            <ListStyled>
                <ItemStyled><MdMenu size={30} /></ItemStyled>
                <ItemStyled>Comart</ItemStyled>
                <ItemStyled>
                    <BsFillSuitHeartFill size={25} />
                    <BsFillPersonFill size={25} />
                </ItemStyled>
            </ListStyled>
        </HeaderStyled>
    )
}