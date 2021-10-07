import { connect } from "react-redux";
import { RootStore } from "..";
import * as LoadingActions from "./actions";

const mapState = ({ loading }: RootStore) => ({
  ...loading,
});

const LoadingConnector = connect(mapState, LoadingActions);
export default LoadingConnector;
