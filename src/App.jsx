import "./App.scss";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import Main from "./components/Main";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="app">
      <Authenticator>
        {({ signOut, user }) => {
          return <Main />;
        }}
      </Authenticator>
    </div>
  );
};

export default App;
