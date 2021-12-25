import React from "react";
import './App.css';
import Page from "./Components/Page";
import news from './news';


function App() {

  return (
    <div className="app">
      <Page news={news}/>
    </div>
  )
}

export default App;
