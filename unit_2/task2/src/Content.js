import React from 'react';


export default class Content extends React.Component {

    constructor(props) { 
     super(props); 

      };
    

  render() {
    const el = Object.entries(this.props);
    console.log(typeof(el));
    console.log(el);
    return (
      <>
      <h2>Body</h2>
         {el.map((el, index) => (
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

