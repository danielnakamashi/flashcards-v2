import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase, { uiConfig } from 'config/firebase';

const Login: React.FC = () => <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />;

export default Login;
