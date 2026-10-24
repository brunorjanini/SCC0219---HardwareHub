import "./UserHeader.css";
import Logo from "../Logo";
import { NavLink } from "react-router";
import { Search, UserRound, ShoppingCart } from "lucide-react";

export default function UserHeader() {
  // Handles the search form submit
  function handleSubmit(e) {
    // Avoid unexpect behavior
    e.preventDefault();

    const search = e.target.search.value;

    console.log("Pesquisando!" + search);
  }

  return (
    <div className="header-style">
      {/* Top bar */}
      <div className="free-delivery">
        <p>Frete grátis acima de R$ 499</p>
        <p>Central de Ajuda</p>
      </div>

      {/* Main header: logo, search, links, icons */}
      <div className="main-header">
        <Logo theme="light" className="logo-style" />

        <form className="search-bar" onSubmit={handleSubmit}>
          <Search className="search-icon" />
          <input
            name="search"
            placeholder="Busque hardware e serviços..."
          ></input>
        </form>

        <NavLink to="/monte-seu-pc" className="link-monte-seu-pc">
          Monte seu PC
        </NavLink>

        <UserRound className="user-icon" />
        <ShoppingCart className="shop-cart-icon" />
      </div>

      {/* Product categories (missing "to" prop) */}
      <div className="search-classes">
        <ul>
          <NavLink className="product-class">Hardware</NavLink>
          <NavLink className="product-class">Periféricos</NavLink>
          <NavLink className="product-class">Computadores</NavLink>
          <NavLink className="product-class">Serviços</NavLink>
          <NavLink className="product-class-red">Ofertas</NavLink>
        </ul>
      </div>
    </div>
  );
}
