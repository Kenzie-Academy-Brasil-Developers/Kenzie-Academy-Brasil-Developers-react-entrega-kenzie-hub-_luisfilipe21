import {RoutesModule} from "./RoutesModule";
import { DefaultTemplate } from "./components/DefaultTemplate";
import "./styles/index.scss";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify"
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { LoadingPage } from "./pages/LoadingPage";

function App() {

  const {loading} = useContext(UserContext);


  return (
    <DefaultTemplate>
      {loading? <LoadingPage/> : <RoutesModule />}
      <ToastContainer position="top-right" autoClose={2500} />
    </DefaultTemplate>
  )
}

export default App
