import { NavLink, Outlet } from "react-router";
import "./AdminLayout.css";
import Logo from "../components/Logo";

// Layout for the admin area: fixed sidebar + content area for nested routes
export default function AdminLayout() {
  return (
    <>
      <div className="layout">
        {/* Sidebar */}
        <div className="navbar">
          {/* Logo links back to the dashboard.
              "end" makes the link active only when the URL is exactly "/admin" */}
          <NavLink to="/admin" end>
            <Logo className="logo" theme="dark" />
          </NavLink>

          {/* Menu links: NavLink adds the "active" class to the current route */}
          <nav>
            {/* "end" prevents this link from staying active on /admin/* routes */}
            <NavLink to="/admin" end>
              Dashboard
            </NavLink>
            <NavLink to="/admin/products">Produtos e serviços</NavLink>
            <NavLink to="/admin/clients">Clientes</NavLink>
            <NavLink to="/admin/admins">Administradores</NavLink>
          </nav>
        </div>

        {/* Content area: renders the child route matched under /admin */}
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
