import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import PageNav from './components/navbar';
import Jumbo from './components/jumbo';
import Images from './components/images'
import FooterPage from './components/foot'

function App() {
  return (
    <div className="App">
      <PageNav />
      <Jumbo />
      <hr style={{margin: '0' }}/>
      <Images />
      <FooterPage />
    </div>
  );
}

export default App;
