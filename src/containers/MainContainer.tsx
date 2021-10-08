import React from "react";
import { ConnectedProps } from "react-redux";
import ResultModal from "../components/common/ResultModal";
import MainComponent from "../components/MainComponent";
import LoadingConnector from "../store/loading/connector";

type Props = ConnectedProps<typeof LoadingConnector>;

function MainContainer({ startLoading, finishLoading }: Props) {
  const [resultModalStatus, setResultModalStatus] =
    React.useState<boolean>(false);

  const cancleFunc = React.useCallback(() => {
    setResultModalStatus(false);
  }, []);

  const confirmFunc = React.useCallback(() => {
    setResultModalStatus(false);
  }, []);

  const loadingTest = React.useCallback(() => {
    startLoading();
    setTimeout(() => {
      finishLoading();
      setResultModalStatus(true);
    }, 3000);
  }, [startLoading, finishLoading]);

  return (
    <>
      <MainComponent loadingTest={loadingTest} />
      <ResultModal
        status={resultModalStatus}
        cancleFunc={cancleFunc}
        confirmFunc={confirmFunc}
      />
    </>
  );
}

export default LoadingConnector(MainContainer);
