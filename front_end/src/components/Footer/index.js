import { FooterStyled, DivComart, DivInfo, DivDevs, Divs } from "./styles";

export default function Footer() {
  return (
    <>
      <FooterStyled>
        <DivComart>
          <p>COMART</p>
        </DivComart>

        <Divs>
          <DivInfo>
            <p>Copyright © 2023 Comart</p>
          </DivInfo>
          <DivDevs>
            <p>
              Asher Novellli, João Siedlarczyk, Matheus Dos Anjos, João Suzuki
            </p>
          </DivDevs>
        </Divs>
      </FooterStyled>
    </>
  );
}
