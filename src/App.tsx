import { Route, Switch } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/common/HeaderComponent";
import OtherComponent from "./components/OtherComponent";
import { FullScreen } from "./styles/Screen";

function App() {
  return (
    <>
      <HeaderComponent />
      <FullScreen>
        <Switch>
          <Route path="/" component={MainComponent} exact />
          <Route component={OtherComponent} />
        </Switch>
      </FullScreen>
    </>
  );
}

export default App;
