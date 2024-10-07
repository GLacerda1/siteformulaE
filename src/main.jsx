import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import Error from "./routes/Error.jsx";
import Sobre from "./routes/Sobre.jsx";
import GlobalStyle from "./css/GlobalStyle.jsx";
import Home from './routes/Home.jsx';
import Loja from './routes/Loja.jsx';



const router = createBrowserRouter([
  {
    //Elemento Pai
    path: "/",
    element: <App />,
    errorElement: <Error />,

    //Elemento Filho
    children: [
      { path: "sobre", element: <Sobre /> },
      { path: "home", element: <Home /> },
      { path: "loja", element: <Loja />},
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>
);