import { CadastroStyled, ButtonStyled, AreaHome, AreaCadastro, ImgComercio, BackHome, FormCadastro, LogoSite, TextLogin, Wrapper, AlignDiv } from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";

export default function Login() {
  
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirm, setSenhaConfirm] = useState("");
  
  function pegarValores(event){
    setNome(event.target.value)
    setEmail(event.target.value)
    setCpf(event.target.value)
    setSenha(event.target.value)
    setSenhaConfirm(event.target.value)
    console.log(nome,email,cpf,senha)

  }

  function cadastrarUsuario(event){
    event.preventDefault()
    if(senhaConfirm !== senha){
      alert("As senhas não são iguais")
    }

  }
  return (
    <>
    <AlignDiv>
      <Wrapper>
      <CadastroStyled>

        <AreaCadastro>
          <BackHome>
            <p><Link to="/login"><IoIosArrowBack size={20} /></Link></p>
          </BackHome>
          <LogoSite/>
          <FormCadastro>
          <h2>Cadastre-se!</h2>
          <form onClick={cadastrarUsuario}>
            <input onChange={pegarValores} type="email" placeholder="Email:" />
            <input onChange={pegarValores} type="text" placeholder="Nome completo:" />
            <input onChange={pegarValores} type="text" placeholder="CPF:" />
            <input onChange={pegarValores} type="password" placeholder="Senha:" />
            <input onChange={pegarValores} type="password" placeholder="Confirme sua Senha:" />
          </form>
          <ButtonStyled type="submit"> Cadastrar </ButtonStyled>
          <TextLogin>Já possui login? Clique aqui.</TextLogin>
          </FormCadastro>
        </AreaCadastro>

        <AreaHome>
        </AreaHome>

      </CadastroStyled>
      </Wrapper>
      </AlignDiv>
    </>
  )
}