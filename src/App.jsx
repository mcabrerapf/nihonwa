import "./App.css";
import { MainList } from "./components";
// import { Amplify, AuthModeStrategyType } from "aws-amplify";
// import awsExports from "./aws-exports";
//AWS
// Amplify.configure({
//   ...awsExports,
//   aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
//   DataStore: {
//     authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
//   },
// });

const App = () => {
  return (
    <div className="app">
      <MainList />
    </div>
  );
};

export default App;
