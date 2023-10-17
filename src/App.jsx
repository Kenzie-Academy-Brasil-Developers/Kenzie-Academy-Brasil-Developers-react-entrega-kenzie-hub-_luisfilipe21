import {RoutesModule} from "./RoutesModule";
import { DefaultTemplate } from "./components/DefaultTemplate";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <DefaultTemplate>
      <RoutesModule />
      <ToastContainer position="top-right" autoClose={2500} />
    </DefaultTemplate>
  )
}

export default App
