import logo from './logo.svg';
import './App.css';
import Nav from "./nav/Nav";
import Home from "./home/Home";
import Footer from "./footer/Footer";
import Port from "./portofolio/Port";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Master from "./masterLayout/Master";
import Start from "./start/Start";
import Contact from "./contact/Contact";
const router = createBrowserRouter([
  {
    path: "",
    element: <Master />,
    children: [
      { path: "FrameWork", element: <Start /> },
      { path: "", element: <Start /> },
      { path: "contact", element: <Contact /> },
      { path: "start", element: <Start /> },
      { path: "home", element: <Home /> },
      { path: "Portofolio", element: <Port /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
