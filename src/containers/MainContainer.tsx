import React from "react";
import { ConnectedProps } from "react-redux";
import MainComponent from "../components/MainComponent";
import LoadingConnector from "../store/loading/connector";

type Props = ConnectedProps<typeof LoadingConnector>;

function MainContainer({ startLoading, finishLoading }: Props) {
  const loadingTest = React.useCallback(() => {
    startLoading();
    setTimeout(() => {
      finishLoading();
    }, 1000);
  }, [startLoading, finishLoading]);

  return <MainComponent loadingTest={loadingTest} />;
}

export default LoadingConnector(MainContainer);
