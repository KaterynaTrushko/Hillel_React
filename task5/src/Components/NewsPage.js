import React from "react";
import { make, makeNews } from "../date";
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
    title: "",
    description : "",
  };

  onSerachAutor = (newAutor) => {
    this.setState({'author' : newAutor})
  };

  onSerachHash = (hash) => {
    this.setState({'hash' : hash})
  };

  onSerachTitle = (newTitle) => {
    this.setState({'title' : newTitle})
  };
  onSerachDescription = (description) => {
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
            onSerachAutor={this.onSerachAutor}
            onSerachHash={this.onSerachHash}
            onSerachTitle={this.onSerachTitle}
            onSerachDescription={this.onSerachDescription}
        
        />
        <NewsList news={news} onRemoveNews={this.removeNews} />
      </>
    );
  }
}

