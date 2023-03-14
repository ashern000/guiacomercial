import { DivBusiness, BoxBusiness, CircleImg, SectionBusiness, SectionCategory, SideBar, PageAtual, FilterSection, TesteDiv, Container } from "./style"
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
                    
                    <h1>Mercados em Registro</h1>

                    <FilterSection>
                        <BiFilterAlt size={20} /> <p>Classificar por: Mais Procurados</p>
                    </FilterSection>

                    <TesteDiv>

                        
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

                    </TesteDiv>
                </SectionCategory>
            </Container>
        </>
    )
}