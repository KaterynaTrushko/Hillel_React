import React from "react";
import { Form } from "./Form";
import { List } from "./List";

export class Main extends React.Component{
      state = {
        date: [],
      }

  addForm = (obj) => {
    this.setState({
      state : [
        obj,
        ...this.state.date,
      ]
    })
  }

  componentDidMount(){

    let respons = fetch('https://jsonplaceholder.typicode.com/comments?_page=0&_limit=20')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          let error = new Error('Something went wrong');
        }
      })
      .then(json => {
        console.log(json);
        this.setState({
          date: json
        })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  render(){

    return(
      <>
        <Form addForm={this.addForm}/>
        <List date={this.state.date} />
      </>
 
    )
  }
}