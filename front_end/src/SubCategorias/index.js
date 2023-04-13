import {
  DivBusiness,
  BoxBusiness,
  CircleImg,
  SectionCategory,
  SideBar,
  PageAtual,
  FilterSection,
  ComerciosSection,
  Container,
} from "./style";
import { BiFilterAlt } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function SubCategorias() {
  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <ul>
            <PageAtual>Mercado</PageAtual>
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
            <h2>Mercados em Registro</h2>
            <p>
              <BiFilterAlt size={20} />
              Classificar por:
              <p2>
                Mais Procurados <MdArrowDropDown size={20} />
              </p2>
            </p>
          </FilterSection>

          {/* seção para aparecer os comercios  */}
          <ComerciosSection>
            <DivBusiness>
              <Link to="/comercios">
                <BoxBusiness>
                  <CircleImg></CircleImg>
                </BoxBusiness>
              </Link>
              <h3>Spani Atacadista</h3>
              <p>Aberto das 09h até 23h</p>
            </DivBusiness>

            <DivBusiness>
              <Link to="/comercios">
                <BoxBusiness>
                  <CircleImg></CircleImg>
                </BoxBusiness>
              </Link>
              <h3>Spani Atacadista</h3>
              <p>Aberto das 09h até 23h</p>
            </DivBusiness>

          </ComerciosSection>

          <ComerciosSection>
            <DivBusiness>
              <Link to="/comercios">
                <BoxBusiness>
                  <CircleImg></CircleImg>
                </BoxBusiness>
              </Link>
              <h3>Spani Atacadista</h3>
              <p>Aberto das 09h até 23h</p>
            </DivBusiness>

            <DivBusiness>
              <BoxBusiness>
                <CircleImg></CircleImg>
              </BoxBusiness>
              <h3>aaaaaa</h3>
              <p>bbbbbb</p>
            </DivBusiness>
          </ComerciosSection>  
        </SectionCategory>
      </Container>
    </>
  );
}
