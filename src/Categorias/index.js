import { SearchStyled, ButtonStyled, SectionSearch, FilterSection } from "./styles";
import { FiSearch } from "react-icons/fi";
import {BiFilterAlt} from "react-icons/bi"
export default function Categorias(){
    return(
        <SectionSearch>
            <h1>Todas as Categorias</h1>
        <SearchStyled>
            <form>
            <input
              type="text"
              placeholder="Pesquise por Categorias"
            />
            <ButtonStyled type="submit">
              <FiSearch size={20} />
            </ButtonStyled>
          </form>
        </SearchStyled>
        <FilterSection>
        <BiFilterAlt size={20}/>
        <p>Classificar por: Mais Procurados</p>      
        </FilterSection>
        </SectionSearch>
    )
}