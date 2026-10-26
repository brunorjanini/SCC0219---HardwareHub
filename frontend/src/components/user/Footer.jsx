import "./Footer.css";
import Logo from "../Logo";
import { Check } from "lucide-react";

// TODO: adicionar link nos elementos de <ul>

// Site footer: brand block, links list and copyright
export default function Footer() {
  return (
    <div className="footer-div">
      {/* Logo (dark theme variant), slogan and security badge */}
      <div className="logo-slogan-div">
        <Logo theme="dark" className="footer-logo" />
        <p className="slogan">
          Tecnologia certa, montagem segura e suporte de <br />
          verdade
        </p>
        <div className="safe-purchase-div">
          <Check className="check-icon" />
          <p>Compra 100% segura</p>
        </div>
      </div>

      {/* Footer links and payment info (laid out as a grid in the CSS) */}
      <ul>
        <li>Institucional</li>
        <li>Atendimento</li>
        <li>Pagamento</li>
        <li>Sobre nós</li>
        <li>Central de Ajuda</li>
        <li>Pix • Cartão em 12x</li>
      </ul>

      <p>© 2026 HardwareHub</p>
    </div>
  );
}
