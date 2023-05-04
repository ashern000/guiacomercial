import {
    SectionCategory,
    BoxCategories,
    ItemCategory, LineDiv
} from "./style.js";

import {
    FiBook,
    FiCpu,
    FiHeart,
    FiSearch,
    FiShoppingCart,
} from "react-icons/fi";

import { Link } from "react-router-dom";

export default function SectionCategoryItems(props) {

    return (
        <SectionCategory backgroundColor={props.backgroundColor} heightSection={props.heightSection} >
            <BoxCategories>
                <Link to="/subcategorias">
                    <ItemCategory>
                        <FiShoppingCart size={100} />
                        <p>Mercados</p>
                        <p>Registro - SP</p>
                    </ItemCategory>
                </Link>

                <ItemCategory>
                    <FiCpu size={100} />
                    <p>Name</p>
                    <p>Registro - SP</p>
                </ItemCategory>

                <ItemCategory>
                    <FiBook size={100} />
                    <p>Name</p>
                    <p>Registro - SP</p>
                </ItemCategory>

                <ItemCategory>
                    <FiHeart size={100} />
                    <p>Name</p>
                    <p>Registro - SP</p>
                </ItemCategory>
            </BoxCategories>

        <LineDiv lineDiv={props.lineDiv}></LineDiv>

        </SectionCategory>
    )

}