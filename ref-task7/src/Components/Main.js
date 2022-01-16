import React from "react";
import { Form } from "./Form";
import { List } from "./List";
import ReactPaginate from 'react-paginate';
import { Pagination } from "./Pagination";
import { random } from "faker/locale/zh_TW";

export class Main extends React.Component{
      state = {
        data: [],
        pageCount : 0,
        limit : 10,
        currentPage : 0,
      }

  addForm = (obj) => {
    this.setState({
      data : [
        obj,
        ...this.state.data,
      ]
    })
  }

  addCurrent = (data) => {
    this.setState({
      currentPage : data,
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
        json.map(el => {el.checked = [el.postId.toString()]});
        this.setState({
          data: json,
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
      json.map(el => {el.checked = [el.postId.toString()]});
      this.setState({
        data: json,
      })
    })
    .catch((error) => {
      console.log(error)
    })
    };

    console.log(this.state.data);

 }

  render(){

    return(
      <div >
        <Form addForm={this.addForm}/>
        <List data={this.state.data} />
        <Pagination 
          data={this.state}
          pageCount={this.state.pageCount}
          addCurrent={this.addCurrent}/>
      </div>
     )
  }
}



