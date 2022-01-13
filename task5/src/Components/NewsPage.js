import React from "react";
import { make, makeNews } from "../data";
import NewsList from "./NewsList";
import NewsForm from "./NewsForm";
import  { Filter }  from "./Filter";

const news = makeNews();

export class NewsPage extends React.Component {
  state = {
    news: news,
    isEditing: false,
    author: [],
    hash :[],
    titleSeach: "",
    description : "",
    
  };

  onSearchAuthor = (newAuthor) => {
    this.setState({'author' : newAuthor})
  };

  onSearchHash = (hash) => {
    this.setState({'hash' : hash})
  };

  onSearchTitle = (newTitle) => {
    this.setState({'titleSeach' : newTitle})
  };
  onSearchDescription = (description) => {
    this.setState({'description' : description})
  };

  addNews = (newsOne) => {
    this.setState({
      news: [newsOne, ...this.state.news],
      // isEditing: !this.state.isEditing,
    });
  };

  removeNews = (ID) => {
    this.setState({
      news: [...this.state.news.filter((el) => el.id !== ID)],
    });
  };

  AddRandomNews = () => {
    this.addNews(make());
  };

  render() {
    const { news, isEditing } = this.state;

    const filterNews = news.filter((el) => {
      if (el.title.toLowerCase().indexOf(this.state.titleSeach.toLowerCase()) < 0) return false;
      return true;
    })

    console.log(filterNews);

    return (
      <>
        <div style={{ margin: "10px" }}>
          <button onClick={this.AddRandomNews}>Add a random news</button>
          <button onClick={() => this.setState({ isEditing: !this.state.isEditing })}>
            {isEditing ? "Cancel" : "Add Form"}
          </button>
        </div>
        {isEditing && <NewsForm addNews={this.addNews} />}
        <Filter
            onSearchAuthor={this.onSearchAuthor}
            onSearchHash={this.onSearchHash}
            onSearchTitle={this.onSearchTitle}
            onSearchDescription={this.onSearchDescription}
        
        />
        <NewsList news={filterNews} onRemoveNews={this.removeNews} />
      </>
    );
  }
}

