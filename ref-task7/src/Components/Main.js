import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import ReactPaginate from 'react-paginate';
import { Paginatetion } from "./Pagination";

export class Main extends React.Component{
      state = {
        date: [],
        pageCount : 0,
        limit : 10,
        currentPage : 0,
      }

  addForm = (obj) => {
    this.setState({
      date : [
        obj,
        ...this.state.date,
      ]
    })
  }

  addCurrent = (date) => {
    this.setState({
      currentPage : date,
    })
  } 


  componentDidMount(){

    let respons = fetch(`https://jsonplaceholder.typicode.com/comments?_page=${this.state.currentPage}&_limit=${this.state.limit}`)
        .then(response => {
        if (response.ok) {
          const total = response.headers.get("x-total-count");
          const totalAmount = (Math.ceil(total / this.state.limit));
          this.setState({pageCount: totalAmount});
          return response.json();
        } else {
          let error = new Error('Something went wrong');
        }
      })
      .then(json => {
        console.log(json);
        this.setState({
          date: json,
        })
      })
      .catch((error) => {
        console.log(error)
      });

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      let respons = fetch(`https://jsonplaceholder.typicode.com/comments?_page=${this.state.currentPage}&_limit=${this.state.limit}`)
      .then(response => {
      if (response.ok) {
        const total = response.headers.get("x-total-count");
        const totalAmount = (Math.ceil(total / this.state.limit));
        this.setState({pageCount: totalAmount});
        return response.json();
      } else {
        let error = new Error('Something went wrong');
      }
    })
    .then(json => {
      console.log(json);
      this.setState({
        date: json,
      })
    })
    .catch((error) => {
      console.log(error)
    })
    }
 }

  render(){

    return(
      <div >
        <Form addForm={this.addForm}/>
        <List date={this.state.date} />
        <Paginatetion 
          date={this.state}
          pageCount={this.state.pageCount}
          addCurrent={this.addCurrent}/>
      </div>
     )
  }
}



// Paginate
// Use _page and optionally _limit to paginate returned data.

// In the Link header you'll get first, prev, next and last links.

// GET /posts?_page=7
// GET /posts?_page=7&_limit=20
// 10 items are returned by default