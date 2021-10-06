import { Route, Switch } from "react-router-dom";
import MainComponent from "./components/MainComponent";
import HeaderComponent from "./components/common/HeaderComponent";
import OtherComponent from "./components/OtherComponent";
import { FullScreen } from "./styles/Screen";
import Loading from "./components/common/Loading";

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
      {/* <Loading /> */}
    </>
  );
}

export default App;
