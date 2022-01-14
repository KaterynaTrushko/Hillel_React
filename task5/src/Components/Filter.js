import React from "react";
import { HASHTAG, AUTHORS } from "../data";
import PropTypes from 'prop-types';

// const HASHTAG = ["hot_news", "events", "weather", "crime"];
export class Filter extends React.Component {
  state = {
    
    author: "",
    textSearch: "",  
    hashtag: [],
  }

  onStateAuthor = (e) => {
    let author = e.target.value;
    this.setState({
      'author': author,
    });
    this.props.onSearchAuthor(author);
  }

  formHandleChange = (e) => {
    e.preventDefault();
    let text = e.target.value;
    this.setState({
      textSearch: text,
    });
    

  }

  hendleClick = (e) => {
    e.preventDefault();
    this.props.onSearchTitle(this.state.textSearch);
  }
  
  hendleHashtag = (e) =>{
    let hash = e.target.value;
     if (this.state.hashtag.includes(hash)){
      let newHash = this.state.hashtag.filter(el => el !== hash);
      this.setState({ hashtag: newHash});
    } else {
      let newHash = this.state.hashtag;
      newHash.push(hash);
      this.setState({ hashtag: newHash});
    }
    this.props.onSearchHash(this.state.hashtag);
  } 






  render() {


    return (
      <>
        <form action=""
          onChange={(e)=> this.formHandleChange(e)}>
          <label>
            <input type="text"
              defaultValue={this.state.textSearch}
            ></input>
            <button 
              type="submit"
              onClick={(e)=>this.hendleClick(e)}
              >Search</button>
          </label>
        </form>
        <div>
          <b>Hashtag Serch:</b>
          {HASHTAG.map((el) => (
            <span key={el}>
              <input
                type="checkbox"
                id={"hashtag-" + el}
                name={el}
                defaultValue={el}
                onChange={(e)=>this.hendleHashtag(e)}
              />
              <label htmlFor={"hashtag-" + el}>{el}</label>
            </span>
          ))}
        </div>
        <b>Author Serch:</b>{" "}
        {AUTHORS.map((el) => (
          <span key={el}>
            <input
              type="radio"
              id={"author-" + el}
              name="checkedAuthor"
              defaultValue={el}
              onChange={(e)=>this.onStateAuthor(e)}
            />
            <label htmlFor={"author-" + el}>{el}</label>
          </span>
        ))}
      </>
    )
  }
}

Filter.propTypes = {
  onSearchAuthor: PropTypes.func,
  onSearchHash: PropTypes.func,
  onSearchTitle: PropTypes.func,
  onSearchDescription: PropTypes.func,
}


