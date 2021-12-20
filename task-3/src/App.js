import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import NewsList from './Components/NewsList';
import news from './news';

function App() {
  return (
    <div className="app">
      <Header />
      <NewsList props={news}/>
    </div>
  );
}

export default App;
