import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import ReactPaginate from 'react-paginate';

export class Main extends React.Component{
      state = {
        date: [],
        pageCount : 0,
        limit : 10,
        currentPage : 1,
      }

  addForm = (obj) => {
    this.setState({
      date : [
        obj,
        ...this.state.date,
      ]
    })
  }

  handelPageClick=(date)=>{
    console.log(date.selected);
    let currentPage = date.selected + 1;
    this.setState({'currentPage': currentPage});
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
        <div > 
          <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={this.handelPageClick}
          containerClassName="pagination justify-content-center"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          activeClassName="active"
          
          />
        </div>
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