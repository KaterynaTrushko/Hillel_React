import React from 'react';
import news from './news';


export default class Content extends React.Component {
  render() {
   

    return (
      <>
      <h2>Body</h2>
         {news.map((el, index) => (
          <li key={el.id}>
            <h2>Title: {el.title}</h2>
            <p>Content: {el.content}</p>
            <p>dateCreated: {el.dateCreated}</p>
            <img src={el.photo}/>
            <a href={el.link}>{el.link}</a>
          </li>
        )
        )} 
      </>
    )
  }

  

}

