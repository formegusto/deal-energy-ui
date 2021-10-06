import { Route, Switch } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/common/HeaderComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={MainComponent} exact />
      </Switch>
    </>
  );
}

export default App;
