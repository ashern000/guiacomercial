import {
    DivBusiness, BoxBusiness, CircleImg, SectionCategory, SideBar, PageAtual,
    FilterSection, ComerciosSection, Container
} from "./style"
import { FaMapMarkerAlt } from "react-icons/fa"
import { BiFilterAlt } from "react-icons/bi"
import { Link } from "react-router-dom"

export default function SubCategorias() {
    return (
        <>
            <Container>
                <SideBar>
                    <ul>
                        <PageAtual><FaMapMarkerAlt />Mercado</PageAtual>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                        <li>Mercado</li>
                    </ul>
                </SideBar>

                <SectionCategory>
                    <FilterSection>
                        <h3>Mercados em Registro</h3>
                        <p> <BiFilterAlt size={20} />Classificar por: Mais Procurados</p>
                    </FilterSection>

                    {/* seção para aparecer 2 comercios  */}
                    <ComerciosSection>

                        <DivBusiness>
                            <Link to="/comercios">
                                <BoxBusiness>
                                    <CircleImg>

                                    </CircleImg>
                                </BoxBusiness>
                            </Link>
                            <h3>Spani Atacadista</h3>
                            <p>Aberto das 09h até 23h</p>
                        </DivBusiness>


                        <DivBusiness>
                            <BoxBusiness>
                                <CircleImg>

                                </CircleImg>
                            </BoxBusiness>
                            <h3>aaaaaa</h3>
                            <p>bbbbbb</p>
                        </DivBusiness>

                    </ComerciosSection>

                    

                </SectionCategory>
            </Container>
        </>
    )
}