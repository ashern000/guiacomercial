import {FilterSection, FilterStyled, SectionBusiness, DivBusiness, BoxBusiness, CircleImg, HeartIcon} from "./styles" 
import {BiFilterAlt} from "react-icons/bi"

export default function Favoritos(){
    return(
        <>
        <FilterSection>
        <h1>Meus Favoritos</h1>
        <FilterStyled>
            <BiFilterAlt size={20} />
          <p>Classificar por: Mais Procurados</p>
        </FilterStyled>
        </FilterSection>
        <SectionBusiness>

        <DivBusiness>
          <BoxBusiness>
            <CircleImg>

            </CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon/>
          </DivBusiness>


          <DivBusiness>
          <BoxBusiness>
            <CircleImg>

            </CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon/>
          </DivBusiness>

          <DivBusiness>
          <BoxBusiness>
            <CircleImg>

            </CircleImg>
          </BoxBusiness>
          <h3>aaaaaa</h3>
          <HeartIcon/>
          </DivBusiness>
         

        </SectionBusiness>


        
        </>
    )

}