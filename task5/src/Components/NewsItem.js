import React from "react";
import PropTypes from "prop-types";
import { HASHTAG, AUTHORS } from "../date";

export default class NewsItem extends React.Component {
  state = {
    author: this.props.props.author,
    hashtag: [this.props.props.hashtag],
  };

  render() {
    const {
      props: { description, id, photo, author,  hashtag , title },
      onRemoveNews,
    } = this.props;

  console.log(hashtag);
  
 
    return (
      <div style={{ border: "1px solid rgba(0, 0, 0, 0.35)" }}>
        NewsItems
        <p>
          <b>Title:</b>
          {title}
        </p>
        <b>Author:</b>{" "}
        {AUTHORS.map((el) => (
          <span key={el}>
            <input
              type="radio"
              id={"author-" + el}
              readOnly
              value={el}
              checked={author == el ? true : false}
            />
          <label htmlFor={"author-" + el}>{el}</label>
          </span>
        ))}
        <div>
          <b>Hashtag:</b>{" "}
          {HASHTAG.map((el) => (
            <span key={el}>
              <input
                type="checkbox"
                id={"hashtag-" + el}
                readOnly
                value={el}
                checked={hashtag.includes(el) ? true: false}
              />
              <label htmlFor={"hashtag-" + el}>{el}</label>
            </span>
          ))}
        </div>
        <p>
          <b>description:</b> {description}
        </p>
        <img
          style={{
            width: "150px",
            height: "100px",
            objectFit: "contain",
          }}
          src={photo}
          alt={title}
        ></img>
        <div>
          <button onClick={() => onRemoveNews(id)}>Remove</button>
        </div>
      </div>
    );
  }
}

NewsItem.propTypes = {
  props: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.string,
    photo: PropTypes.string,
    title: PropTypes.string,     
    author: 
      PropTypes.string,
       
    hastag: PropTypes.arrayOf(
      PropTypes.string,
    )}),
  onRemoveNews: PropTypes.func,
};

NewsItem.defaultProps = {
  props: {},
  onRemoveNews: () => {},
};
