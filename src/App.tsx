import { Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/common/HeaderComponent";
import OtherComponent from "./components/OtherComponent";
import { FullScreen } from "./styles/Screen";
import MainContainer from "./containers/MainContainer";
import LoadingConnector from "./store/loading/connector";
import { ConnectedProps } from "react-redux";
import Loading from "./components/common/Loading";

type Props = ConnectedProps<typeof LoadingConnector>;

function App({ loading }: Props) {
  return (
    <>
      <HeaderComponent />
      <FullScreen>
        <Switch>
          <Route path="/" component={MainContainer} exact />
          <Route component={OtherComponent} />
        </Switch>
      </FullScreen>
      {loading && <Loading />}
    </>
  );
}

export default LoadingConnector(App);
