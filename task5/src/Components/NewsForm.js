import React from "react";
import PropTypes from "prop-types";
import faker from "faker";
import { getBase64 } from "../utils";
import { HASHTAG, AUTORS } from "../date";

export default class NewsForm extends React.Component {
  state = {
    title: "",
    description: "",
    photo: "",
    hashtag: [],
    author: [],
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
      console.log("_____", base64);
      this.setState({
        photo: base64,
      });
    });
  };

  handleChangeAutor = (e) => {
    const { value } = e.currentTarget;
    console.log(value);
    this.setState({
      author: value,
    });
  };

  handleChangeHashtag = (e) => {
    const { value } = e.currentTarget;
    console.log(value);
    let newHash;
    if (this.state.hashtag.indexOf(value) !== -1) {
      newHash = this.state.hashtag.filter(el => el != value)
    } else {
      newHash = [...this.state.hashtag, value]
    }
      this.setState({
      hashtag: newHash, 
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    const newsDate = this.state;
    const news = {
      id,
      ...newsDate,
    };
    this.props.addNews(news);
  };

  render() {
    const { author, description, hashtag, photo, title } = this.state;

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
          <div>
            <b>Author:</b>{" "}
            {AUTORS.map((el) => (
              <label key={el}>
                <input
                  defaultValue={el}
                  name="autor"
                  type="radio"
                  onChange={this.handleChangeAutor}
                  checked={el === author}
                />
                {el}
              </label>
            ))}
          </div>
          <div>
            <b>Hashtag:</b>
            {HASHTAG.map((el) => (
              <label key={el}>
                <input
                  defaultValue={el}
                  type="checkbox"
                  checked={hashtag.indexOf(el) !==-1}
                  onChange={this.handleChangeHashtag}
                />
                {el}
              </label>
            ))}
          </div>
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

          <button type="submit">Create news</button>
        </form>
      </div>
    );
  }
}

NewsForm.propTypes = {
  addNews: PropTypes.func.isRequired,
};

NewsForm.defaultProps = {
  addNews: console.log,
};

// NewsForm.propTypes = {
//   news: PropTypes.arrayOf(
//     PropTypes.shape({,
//       author: PropTypes.string,
//       description: PropTypes.string,
//       hashtag: PropTypes.string,
//       id: PropTypes.string,
//       photo: PropTypes.string,
//       title: PropTypes.string,

//   })),
//   onRemoveNews : PropTypes.func.isRequired
// }

// NewsList.defaultProps = {
//    news : [],
//    onRemoveNews : function(){},
//   };