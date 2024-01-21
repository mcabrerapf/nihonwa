import "./App.scss";
import { MainList } from "./components";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => {
  return (
    <div className="app">
      <Authenticator>
        {({ signOut, user }) => (
          <MainList />
        )}
      </Authenticator>
    </div>
  );
};

export default App;
