import "./UserSignIn.css";
import { Mail, Lock } from "lucide-react";
import ImageBoxSignIn from "../components/user/ImageBoxSignIn";
import SignInInput from "../components/SignInInput";
import StdButton from "../components/StdButton";

// TODO: implementar tratamento ao clique no botão
// TODO: implementar tratamento ao clique no "Entrar" caso já tenha conta
// TODO: implementar verificação de senha antes de envio
// TODO: implementar verificação de e-mail antes de envio

// Sign-up page: image on one side, form on the other
export default function UserSignIn() {
  return (
    <div className="sign-in-div">
      <ImageBoxSignIn />

      <div className="sign-in-form-div">
        <h2>HARDWAREHUB</h2>
        <h3>Crie sua conta</h3>
        <h4>Acompanhe pedidos, salve favoritos e receba ofertas.</h4>

        <form className="sign-in-form">
          {/* First and last name side by side */}
          <div className="name-undername-div">
            <SignInInput type="text" label="Nome" placeholder="Ana" />
            <SignInInput type="text" label="Sobrenome" placeholder="Souza" />
          </div>

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
            <SignInInput
              type="password"
              label="Password"
              placeholder="minhasenha"
            >
              <Lock />
            </SignInInput>
            <p>Mínimo de 8 caracteres, com número e símbolos</p>
          </div>

          {/* Terms of Use and Privacy Policy acceptance */}
          <div className="check-terms-div">
            <input type="checkbox"></input>
            <p>
              Li e estou de acordo com os Termos de Uso e Política de
              Privacidade
            </p>
          </div>

          {/* Submit button + link to login */}
          <div className="create-account-or-login-div">
            <StdButton label="Criar conta" />
            <p>Já tem uma conta? Entrar</p>
          </div>
        </form>
      </div>
    </div>
  );
}
