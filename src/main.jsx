import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Home from "./routes/Home.jsx";
import Error from "./routes/Error.jsx";
import Formula from "./routes/Formula.jsx";
import Sobre from "./routes/Sobre.jsx";
import GlobalStyle from "./css/GlobalStyle.jsx";




const router = createBrowserRouter([
  {
    //Elemento Pai
    path: "/",
    element: <App />,
    errorElement: <Error />,

    //Elemento Filho
    children: [
      { path: "home", element: <Home /> },
      { path: "sobre", element: <Sobre /> },
      { path: "formula", element: <Formula /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>
);