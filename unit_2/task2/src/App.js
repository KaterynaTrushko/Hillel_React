import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import news from './news'




function App() {


  return (
    <>
      <Header props={news}/>
      <Content props={news}/>
      <Footer props={news}/>
    </>
    
  );
}

export default App;
