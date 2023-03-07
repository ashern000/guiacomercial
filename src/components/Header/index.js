import { HeaderStyled, ListStyled, ItemStyled, } from "./styles"
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs"
import { MdMenu } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header() {
    return (

        <HeaderStyled>
            <ListStyled>
                <ItemStyled><MdMenu size={30} /></ItemStyled>
                <ItemStyled>Comart</ItemStyled>
                <ItemStyled>
                    <BsFillSuitHeartFill size={25} />
                    <Link to="/login"><BsFillPersonFill size={25} /></Link>
                </ItemStyled>
            </ListStyled>
        </HeaderStyled>
    )
}