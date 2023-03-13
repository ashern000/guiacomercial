import { DivBusiness, BoxBusiness, CircleImg, SectionBusiness, SectionCategory, SideBar } from "./style"

export default function SubCategorias() {
    return (
        <>
        
            <SideBar>
                <ul>
                    <li><a href="index.php">Página Inicial</a></li>
                    <li><a href="index.php">Consultas</a></li>
                    <li><a href="medicolist.php">Médicos</a></li>
                    <li><a href="#">Pacientes</a></li>
                    <li><a href="#">Configurações</a></li>
                </ul>
            </SideBar>

            <SectionCategory>
                <DivBusiness>
                    <BoxBusiness>
                        <CircleImg>

                        </CircleImg>
                    </BoxBusiness>
                    <h3>aaaaaa</h3>
                    <p>bbbbbb</p>
                </DivBusiness>

                <DivBusiness>
                    <BoxBusiness>
                        <CircleImg>

                        </CircleImg>
                    </BoxBusiness>
                    <h3>aaaaaa</h3>
                    <p>bbbbbb</p>
                </DivBusiness>
            </SectionCategory>

        </>
    )
}