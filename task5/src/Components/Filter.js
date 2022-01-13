import React from "react";
import { HASHTAG, AUTHORS } from "../data";
import PropTypes from 'prop-types';

// const HASHTAG = ["hot_news", "events", "weather", "crime"];
export class Filter extends React.Component {
  state = {
    checkedHash: [
      {"hot_news" : false}, 
      {"events" : false}, 
      {"weather" : false}, 
      {"crime" : false},
    ],
    checkedAuthor: false,
    textSearch: "",
    authorsBox: [],
    hashtagsBox: [],
  }

  onStateAuthor = (e) => {
    this.setState({
      checkedAuthor: !this.state.checkedAuthor,
    })

  }

  formHandleChange = (e) => {
    e.preventDefault();
    let text = e.target.value;
    console.log(e.target.value);
    this.setState({
      textSearch: text,
    });
    

  }

  hendleClick = (e) => {
    e.preventDefault();
    this.props.onSearchTitle(this.state.textSearch);
  }
  

  hendleHashtag = (e) =>{
    let checked = e.target.checked;
    let name = e.target.name;
    // console.log(e.target.checked);
    // console.log(name);
    // let obj = { [name]: checked };
    // if (this.state.checkedHash.includes(obj)){
    //   let NewState = this.state.checkedHash.filter((el) => el !== obj);
    //   this.setState({
    //     checkedHash: {
    //       ...NewState,
    //     },
    //   });

    // } else {
    //   this.setState({
    //     checkedHash: {
    //       ...this.state.checkedHash, obj
    //     },
    //   })
    // }
  } 




  render() {


    return (
      <>
        <form action=""
          onChange={(e) => this.formHandleChange(e)}>
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
                checked={this.state.checkedHash[el]}
                onChange={(e)=>{this.hendleHashtag(e)}}
              />
              <label htmlFor={"hashtag-" + el}>{el}</label>
            </span>
          ))}
        </div>
        <b>Author Serch:</b>{" "}
        {AUTHORS.map((el) => (
          <span key={el}>
            <input
              type="checkbox"
              id={"author-" + el}
              name="checkedAuthor"
              defaultValue={el}
              onChange
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


