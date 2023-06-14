/* O código abaixo é um componente React que renderiza uma página para uma empresa de comércio. Inclui vários
seções como um banner, informações sobre a empresa, fotos e avaliações de clientes. O
O componente também inclui funções que permitem ao usuário adicionar o negócio aos seus favoritos e
avalie a empresa usando estrelas. As funções alteram a aparência dos ícones de coração e estrela com base
na interação do usuário. */


import {
  HeartIcon,
  StarIcon,
  Favorito,
  ComercioPage,
  Banner,
  ImgPerfil,
  LineDiv,
  LineTransparent,
  Stars,
  DataDiv,
  AddFav,
  ClassificationDiv,
  DescriptionComercio,
  InformationDiv,
  AvaliacaoDiv,
  Comentarios,
  AreaComent,
  Wrapper,
  PicturesDiv,
  InfoDiv,
  PicturesArea,
  Picture
} from "./styles";
import Header from "../components/Header";
import { AiOutlineClockCircle } from "react-icons/ai";
import { RiMapPin2Line, RiInformationLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";
import icon from "./img/heart-blue.png";
import yellow from "./img/staryellow.png";
import star from "./img/star.png";
import img from "./img/heart.png";

export default function Comercios() {
  return (
    <>
      <Header />
      <Wrapper>
        <ComercioPage id="allpage">
          <Banner id="banner">
            <ImgPerfil id="imgperfil" />
          </Banner>

          <Favorito>
            <AddFav id="favDiv">
              <HeartIcon id="Heart1" onClick={ChangeHeart1} />
              <p id="addFav">Adicionar local aos Favoritos</p>
            </AddFav>
          </Favorito>

          <ClassificationDiv>
            <Stars>
              <StarIcon id="Star1" onClick={Star1} />
              <StarIcon id="Star2" onClick={Star2} />
              <StarIcon id="Star3" onClick={Star3} />
              <StarIcon id="Star4" onClick={Star4} />
              <StarIcon id="Star5" onClick={Star5} />
            </Stars>
          </ClassificationDiv>

          <InformationDiv>
            <h2>Descrição do Comercio:</h2>
            <DescriptionComercio>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                dolor tortor, dictum et arcu id, mollis accumsan tortor. Sed a
                nibh ut urna porttitor volutpat sed eget mi. In fringilla, est in
                convallis tincidunt, nulla metus blandit massa, ut feugiat ex
                risus id magna. Nunc malesuada, nunc quis ultrices volutpat, dolor
                odio porta ex, vel convallis diam metus nec nibh. Sed vel porta
                erat, eu varius sem. Phasellus sed dapibus nunc.
              </p>
            </DescriptionComercio>

            <DataDiv>
              <InfoDiv>
              <h2>Informações</h2>
              <ul>
                <li>
                  <AiOutlineClockCircle />
                  <p>Aberto das 09h até as 23h</p>
                </li>
                <li>
                  <RiMapPin2Line />
                  <p>Jardim Esperança, Registro - SP</p>
                </li>
                <li>
                  <BsTelephone />
                  <p>13 999999999</p>
                </li>
                <li>
                  <RiInformationLine />
                  <p>Compras na loja - Retirada na loja - Entrega</p>
                </li>
              </ul>
              </InfoDiv>

              <PicturesDiv>
                  <PicturesArea>
                    <Picture>Img 1</Picture>
                    <Picture>Img 2</Picture>
                    <Picture>Img 3</Picture>
                    <Picture>Img 4</Picture>
                  </PicturesArea>
              </PicturesDiv>

            </DataDiv>
            <LineDiv></LineDiv>
          </InformationDiv>
          <AvaliacaoDiv>
            <h2>Avaliações de Clientes</h2>
            <Comentarios>
              <AreaComent>
                <textarea name="comentarios" id="comentarios"></textarea>
              </AreaComent>
            </Comentarios>
          </AvaliacaoDiv>
        </ComercioPage>
      </Wrapper>
    </>
  );
}

function ChangeHeart1() {
  if (
    document.getElementById("addFav").textContent ===
    "Adicionar local aos Favoritos"
  ) {
    document.getElementById("Heart1").style.backgroundImage = `url(${icon})`;
    document.getElementById("Heart1").style.backgroundRepeat = "no-repeat";
    document.getElementById("addFav").textContent = "Adicionado!";
    document.getElementById("addFav").style.right = "40vh";
  } else {
    document.getElementById("Heart1").style.backgroundImage = `url(${img})`;
    document.getElementById("addFav").textContent =
      "Adicionar local aos Favoritos";
  }
}

/////////////////////////////////////////
function Star1() {
  document.getElementById("Star1").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star2").style.backgroundImage = `url(${star})`;
  document.getElementById("Star3").style.backgroundImage = `url(${star})`;
  document.getElementById("Star4").style.backgroundImage = `url(${star})`;
  document.getElementById("Star5").style.backgroundImage = `url(${star})`;
}

function Star2() {
  document.getElementById("Star1").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star2").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star3").style.backgroundImage = `url(${star})`;
  document.getElementById("Star4").style.backgroundImage = `url(${star})`;
  document.getElementById("Star5").style.backgroundImage = `url(${star})`;
}

function Star3() {
  document.getElementById("Star1").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star2").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star3").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star4").style.backgroundImage = `url(${star})`;
  document.getElementById("Star5").style.backgroundImage = `url(${star})`;
}

function Star4() {
  document.getElementById("Star1").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star2").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star3").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star4").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star5").style.backgroundImage = `url(${star})`;
}

function Star5() {
  document.getElementById("Star1").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star2").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star3").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star4").style.backgroundImage = `url(${yellow})`;
  document.getElementById("Star5").style.backgroundImage = `url(${yellow})`;
}
