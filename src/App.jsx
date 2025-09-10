import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./assets/saas/main.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/about";
import { Error } from "./pages/error";
import { Home } from "./pages/home";
import { Rental } from "./pages/rental";
import { rentalLoader } from "./pages/rental/loader";

const Layout = () => {
  return (
    <>
      <div className="content">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "rental/:id",
        element: <Rental />,
        loader: rentalLoader,
        errorElement: <Error />,
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
