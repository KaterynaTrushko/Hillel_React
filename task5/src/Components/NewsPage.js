import React from "react";
import { make, makeNews } from "../date";
import NewsList from "./NewsList";

const news = makeNews();

export class NewsPage extends React.Component{
  state = {
    date : news,
  }

  addNews = (newsOne) => {
    this.setState ({
      date : [
        newsOne,
        ...this.state.date,
      ]  
    })
  }

  removeNews = (ID) => {
    this.setState({
      date: [
        ...this.state.date.filter(el => el.id !== ID)
      ]
    })
  }

  AddRandomNews = () => {
    this.addNews(make());
  }

  render(){
    const news = this.state.date;
    
    return(
      <>
        NewsPage
        <div><button onClick={this.AddRandomNews}>Add a random news</button></div>
        <NewsList 
          news={news} 
          onRemoveNews={this.removeNews}/>
      </>
    )
  }
}

