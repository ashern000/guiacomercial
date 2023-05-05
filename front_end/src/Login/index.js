import { LoginStyled, ButtonStyled, AreaCadastro, AreaLogin, ImgComercio, BackHome, FormLogin, LogoSite, Wrapper, AlignDiv, ImgLogin, TextCadastro} from "./styles";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import axios from "axios";


export default function Login() {
  const[email,setEmail] = useState("");
  const[senha,setSenha] = useState("");
  
  function valorInputEmail(e){
    setEmail(e.target.value);
  }

  function valorInputSenha(e){
    setSenha(e.target.value);
  }

  function loginUsuario(e){
   let api = axios.post("http://localhost:4040/login");
   api
   .then((api)=>{
    if(api.statusLogin == true){
      console.log("Foi")
    }

   }).catch()
  }
  return (
    <>
    <AlignDiv>
    <Wrapper>
      <LoginStyled>
        <AreaCadastro>
        <h1> Bem vindo(a) ao Comart! </h1>
        <ImgLogin/>
        <TextCadastro>
        <p> Você não tem cadastro? </p>
        <p> Cadastre-se! </p>
        </TextCadastro>
        </AreaCadastro>
        <AreaLogin>
          <BackHome>
            <p><Link to="/home"><IoIosArrowBack size={20} /></Link></p>
          </BackHome>
          <LogoSite />
          <FormLogin>
            <h2>Faça seu login</h2>
            <form method="POST">
              <input type="email" placeholder="Email:" onChange={valorInputEmail} />
              <input type="password" placeholder="Senha:" onChange={valorInputSenha}/>
            </form>
            <ButtonStyled type="submit" onClick={loginUsuario}> Entrar </ButtonStyled>
            <Link to="/"><p>Esqueci a senha.</p></Link>
          </FormLogin>
        </AreaLogin>
      </LoginStyled>
      </Wrapper>
      </AlignDiv>
    </>
  )
}

