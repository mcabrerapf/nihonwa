import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Main from './components/Main';

Amplify.configure({ ...awsExports, aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS' });
const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => root.render(
  <React.StrictMode>
    <div className="app">
      <Authenticator hideSignUp>
        {({ signOut }) => (
          <Main signOut={signOut} />
        )}
      </Authenticator>
    </div>
  </React.StrictMode>,
);

export default App;
