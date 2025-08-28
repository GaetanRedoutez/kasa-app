import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./assets/saas/main.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/about";
import { Error } from "./pages/error";
import { Home } from "./pages/home";

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
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        index: true,
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <Error />,
      },
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
