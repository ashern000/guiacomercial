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
import { BiFilterAlt, BiMap } from "react-icons/bi";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function SubCategorias() {
  return (
    <>
      <Header />
      <Container>
        <SideBar>
          <ul>
            <PageAtual> <BiMap size={20}/> Mercado </PageAtual>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
            <Link to=""> <li>Mercado</li> </Link>
          </ul>
        </SideBar>

        <SectionCategory>
          <FilterSection>
            <h2>Mercados em:</h2>
            <p><BiFilterAlt size={20} />Classificar por:
              <select name="filter">
                <option value="Mais Procurados" selected>Mais Procurados</option>
                <option value="A-Z">A-Z</option>
                <option value="A-Z">Z-A</option>
              </select> </p>
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
