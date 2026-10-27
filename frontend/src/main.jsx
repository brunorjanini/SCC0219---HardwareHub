// Entry point of the React app
import { createRoot } from "react-dom/client";
import "./index.css";

// Admin pages
import AdminProducts from "./pages/AdminProducts.jsx";
import AdminClients from "./pages/AdminClients.jsx";
import AdminAdmins from "./pages/AdminAdmins.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

// Routing: router factory and the provider that renders it
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

// Layouts shared by groups of pages
import AdminLayout from "./Layouts/AdminLayout.jsx";
import UserLayout from "./Layouts/UserLayout.jsx";
import UserSignIn from "./pages/UserSignIn.jsx";
import UserLogin from "./pages/UserLogin.jsx";

// Route configuration (uses the browser History API)
const router = createBrowserRouter([
  // Public storefront
  {
    path: "/",
    element: <UserLayout />,
    children: [
      { index: true, element: <UserSignIn /> },
      { path: "login", element: <UserLogin /> },
    ],
  },

  // Admin area: AdminLayout wraps all nested routes below
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      // Default page at /admin
      { index: true, element: <AdminDashboard /> },
      // /admin/products
      { path: "products", element: <AdminProducts /> },
      // /admin/clients
      { path: "clients", element: <AdminClients /> },
      // /admin/admins
      { path: "admins", element: <AdminAdmins /> },
    ],
  },
]);

// Mount the app into the #root element and enable routing
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
