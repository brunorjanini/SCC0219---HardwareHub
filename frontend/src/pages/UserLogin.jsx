import "./UserLogin.css";
import { Mail, Lock } from "lucide-react";
import ImageBoxSignIn from "../components/user/ImageBoxSignIn";
import SignInInput from "../components/SignInInput";
import StdButton from "../components/StdButton";

// TODO: implementar tratamento ao clique no botão
// TODO: implementar tratamento ao clique no "Entrar" caso já tenha conta
// TODO: implementar verificação de senha antes de envio
// TODO: implementar verificação de e-mail antes de envio

// Login page: image on one side, form on the other
export default function UserLogin() {
  return (
    <div className="sign-in-div">
      <ImageBoxSignIn />

      <div className="sign-in-form-div">
        <h2>HARDWAREHUB</h2>
        <h3>Bem-vindo de volta</h3>
        <h4>Entre para acessar seus pedidos e configurações.</h4>

        <form className="sign-in-form">
          {/* Icon is passed as children and rendered inside the input */}
          <SignInInput
            type="text"
            label="E-mail"
            placeholder="meunome@email.com"
          >
            <Mail />
          </SignInInput>

          {/* Password input + requirements hint */}
          <div className="password-criteria-div">
            <SignInInput type="password" label="Senha" placeholder="minhasenha">
              <Lock />
            </SignInInput>
            <p>Mínimo de 8 caracteres, com número e símbolos</p>
          </div>

          {/* Submit button + link to login */}
          <div className="create-account-or-login-div">
            <StdButton label="Entrar" />
            <p>Não tem uma conta? Cadastrar</p>
          </div>
        </form>
      </div>
    </div>
  );
}
