import React from 'react';
import './App.css';
import {Layout,Button} from 'antd';
import "antd/dist/antd.css";
import SignIn from './components/SignIn';
import Temp from './components/Temp';
import {Router} from '@reach/router'; 


const {Header} = Layout;

function App() {
  return (
    <div className="App">
  <Router>
    <SignIn path="/"/>
    <Temp path="/temp"/>
  </Router>
  </div>
  );
}

export default App;
