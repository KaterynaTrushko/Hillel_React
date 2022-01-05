import React from "react";
import { make, makeNews } from "../date";
import NewsList from "./NewsList";
import NewsForm from "./NewsForm";

const news = makeNews();


export class NewsPage extends React.Component {
  state = {
    news: news,
    isEditing: false,

  }

  addNews = (newsOne) => {
    this.setState({
      news: [
        newsOne,
        ...this.state.news,
      ]
    })
  }

  removeNews = (ID) => {
    this.setState({
      news: [
        ...this.state.news.filter(el => el.id !== ID)
      ]
    })
  }

  AddRandomNews = () => {
    this.addNews(make());
  }

  render() {
    const { news, isEditing } = this.state;

    return (
      <>
        <div style={{ margin: "10px" }}>
          <button onClick={this.AddRandomNews}>Add a random news</button>
          <button onClick={() => this.setState({ isEditing: !this.state.isEditing })}>{isEditing ? "Cancel" : "Add Form"}</button>
        </div>
        {isEditing && <NewsForm addNews={console.log}  />}
        <NewsList
          news={news}
          onRemoveNews={this.removeNews} />
      </>
    )
  }
}

