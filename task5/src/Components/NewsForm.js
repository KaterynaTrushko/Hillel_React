import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { getBase64 } from "../utils";
import { HASHTAG, AUTHORS } from "../data";

export default class NewsForm extends React.Component {
  state = {
    title: "",
    description: "",
    photo: "",
    hashtag: [],
    author: "",
    titleError: false,
    photoError: false,
    hashtagError: false,
    authorError: false,
  };


  handleChangeText = (e) => {
    const input = e.currentTarget;
    const { value, name } = input;
    this.setState({
      [name]: value,
    });
  };

  handleChangePhoto = (e) => {
    const file = e.currentTarget.files[0];
    getBase64(file, (base64) => {
       this.setState({
        photo: base64,
      });
    });
  };

  handleChangeAuthor = (e) => {
    const { value } = e.currentTarget;
    this.setState({
      author: value,
    });
  };

  handleChangeHashtag = (e) => {
    const value = e.target.value;
    let newHash;
    if (this.state.hashtag.includes(value)) {
      newHash = this.state.hashtag.filter(el => el != value)
    } else {
      newHash = [...this.state.hashtag, value]
    }
    this.setState({
      hashtag: newHash,
    });
  };



  validationTitle = (title) => {
    if (!title) {
      this.setState({ titleError: !this.state.titleError, });
      return;
    }
    return true;
  }

  validationAuthor = ( author) => {
    if (!author) {
      this.setState({ authorError: !this.state.authorError, });
      return;
    }
    return true;
  }


  validationHash = ( hashtag ) => {
    if (hashtag.length < 1) {
      this.setState({ 
        hashtagError: !this.state.hashtagError, 
      });
      return;
    }
    return true;
  }

  validationPhoto = ( photo ) => {
    if (!photo) {
      this.setState({ 
        photoError: !this.state.photoError, 
      });
      return;
    }
    return true;
  }


  handleSubmit = (e) => {
    e.preventDefault();
    const { author, description, hashtag, photo, title, titleError, authorError, photoError, hashtagError } = this.state;
    if (this.validationTitle(title) && this.validationAuthor(author) && this.validationHash(hashtag) && this.validationPhoto(photo)) {
      const id = faker.datatype.uuid();
      const newsData = this.state;
      const news = {
        id,
        ...newsData,
      };
      this.props.addNews(news);
    } else {
      return;
    }
  };


  render() {
    const { author, description, hashtag, photo, title, titleError, authorError, photoError, hashtagError } = this.state;

    return (
      <div
        className="form-news"
        style={{ margin: "20px", border: "solid 3px blue" }}
      >
        <form action="" onSubmit={this.handleSubmit} className="form_news">
          <div>
            <label htmlFor="form-news__title">Title:</label>
            <input
              defaultValue={title}
              onChange={this.handleChangeText}
              type="text"
              name="title"
              id="form-news__title"
            />
          </div>
          {!title && titleError == true ? <div style={{ color: "red" }}>Error title</div> : null}
          <div>
            <b>Author:</b>{" "}
            {AUTHORS.map((el) => (
              <label key={el}>
                <input
                  defaultValue={el}
                  name="author"
                  type="radio"
                  onChange={this.handleChangeAuthor}
                />
                {el}
              </label>
            ))}
          </div>
          {!author && authorError == true ? <div style={{ color: "red" }}>Error author</div> : null}
          <div>
            <b>Hashtag:</b>
            {HASHTAG.map((el) => (
              <label key={el}>
                <input
                  defaultValue={el}
                  type="checkbox"
                  onChange={this.handleChangeHashtag}
                />
                {el}
              </label>
            ))}
          </div>
          {hashtag.length == 0 && hashtagError == true ? <div style={{ color: "red" }}>Error hashtag</div> : null}
          <div>
            <label htmlFor="form-news__description">Description:</label>
            <textarea
              defaultValue={description}
              onChange={this.handleChangeText}
              name="description"
              id="form-news__description"
            />
          </div>
          <div>
            <label htmlFor="form-news__photo">Photo:</label>
            {photo.length > 0 && (
              <img
                style={{
                  display: "block",
                  width: "120px",
                  height: "100px",
                }}
                src={photo}
                alt=""
              />
            )}
            <input
              type="file"
              accept=".jpeg,.png"
              name="photo"
              onChange={this.handleChangePhoto}
              id="form-news__photo"
            />
          </div>
          {!photo && photoError == true ? <div style={{ color: "red" }}>Error photo</div> : null}
          <button
            type="submit">Create news
          </button>
        </form>
      </div>
    );
  }
}

NewsForm.propTypes = {
  addNews: PropTypes.func.isRequired,
  NewsForm: PropTypes.func,
};


