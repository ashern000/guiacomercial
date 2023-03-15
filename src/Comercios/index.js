import { ComercioHeader, Banner, ImgPerfil, Stars, AddFav, ClassificationDiv, DescriptionComercio, InformationDiv } from "./styles";
import { AiOutlineStar, AiOutlineHeart } from "react-icons/ai"

export default function Comercios() {
    return (
        <>
            <ComercioHeader>

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
                        nec nibh. Sed vel porta erat, eu varius sem. Phasellus sed dapibus nunc. Curabitur vehicula lorem porttitor, aliquet
                        eros lacinia, hendrerit massa. Morbi at ante id sapien scelerisque pulvinar non quis leo.
                    </p>
                </DescriptionComercio>
                </InformationDiv>
            </ComercioHeader>
        </>
    )
}