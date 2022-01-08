import React from "react";
import { HASHTAG, AUTHORS } from "../date";


export class Filter extends React.Component{
  render(){
    return(
      <>
       <label>
        <input type="text" name="" id="" />
        <button>Serch</button>
      </label>
      <div>
          <b>Hashtag Serch:</b>
          {HASHTAG.map((el) => (
            <span key={el}>
              <input
                type="checkbox"
                id={"hashtag-" + el}
                readOnly
                value={el}
                // checked={hashtag.includes(el) ? true: false}
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
              readOnly
              value={el}
              // checked={author == el ? true : false}
            />
          <label htmlFor={"author-" + el}>{el}</label>
          </span>
        ))}
      </>
    )
  }
}



