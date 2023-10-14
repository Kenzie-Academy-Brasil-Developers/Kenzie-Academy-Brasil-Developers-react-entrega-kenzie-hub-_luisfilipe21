import RoutesModule from "./RoutesModule";
import { DefaultTemplate } from "./components/DefaultTemplate";
import "./styles/index.scss";

function App() {

  return (
    <DefaultTemplate>
      <RoutesModule />
    </DefaultTemplate>
  )
}

export default App
