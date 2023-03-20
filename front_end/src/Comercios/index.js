import {
    ComercioPage, Banner, ImgPerfil, LineDiv, LineTransparent, Stars, DataDiv, AddFav,
    ClassificationDiv, DescriptionComercio, InformationDiv, AvaliacaoDiv, Comentarios,
     ImgComentario, ComentarioCliente,
} from "./styles";
import Header from "../components/Header";
import { AiOutlineStar, AiOutlineHeart, AiOutlineClockCircle } from "react-icons/ai"
import { RiMapPin2Line, RiInformationLine } from "react-icons/ri";
import { BsTelephone } from "react-icons/bs";

export default function Comercios() {
    return (
        <>
        <Header/>
            <ComercioPage>

                <Banner>
                    <ImgPerfil />
                </Banner>

                <AddFav>
                    <AiOutlineHeart size={30} />
                    <p>Adicionar local aos Favoritos</p>
                </AddFav>

                <ClassificationDiv>
                    <Stars>
                        <AiOutlineStar size={25} />
                        <AiOutlineStar size={25} />
                        <AiOutlineStar size={25} />
                        <AiOutlineStar size={25} />
                        <AiOutlineStar size={25} />
                    </Stars>

                </ClassificationDiv>

                <InformationDiv>
                    <DescriptionComercio>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dolor tortor, dictum et arcu id, mollis accumsan tortor.
                            Sed a nibh ut urna porttitor volutpat sed eget mi. In fringilla, est in convallis tincidunt, nulla metus blandit massa,
                            ut feugiat ex risus id magna. Nunc malesuada, nunc quis ultrices volutpat, dolor odio porta ex, vel convallis diam metus
                            nec nibh. Sed vel porta erat, eu varius sem. Phasellus sed dapibus nunc.</p>
                    </DescriptionComercio>

                    <LineTransparent></LineTransparent>

                    <DataDiv>
                        <h2>Informações</h2>
                        <ul>
                            <li><AiOutlineClockCircle /><p>Aberto das 09h até as 23h</p></li>
                            <li><RiMapPin2Line /><p>Jardim Esperança, Registro - SP</p></li>
                            <li><BsTelephone /><p>13 999999999</p></li>
                            <li><RiInformationLine /><p>Compras na loja - Retirada na loja - Entrega</p></li>
                        </ul>
                    </DataDiv>
                    <LineDiv></LineDiv>
                </InformationDiv>
                <AvaliacaoDiv>
                    <h2>Avaliações de Clientes</h2>
                    <Comentarios>
                        <ImgComentario />
                        <input type="text" id="name" name="name"></input>
                    </Comentarios>
                </AvaliacaoDiv>
            </ComercioPage>
        </>
    )
}