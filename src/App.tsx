import { Route, Switch } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/common/HeaderComponent";
import OtherComponent from "./components/OtherComponent";

function App() {
  return (
    <>
      <HeaderComponent />
      <Switch>
        <Route path="/" component={MainComponent} exact />
        <Route component={OtherComponent} />
      </Switch>
    </>
  );
}

export default App;
