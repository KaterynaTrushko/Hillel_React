import React from "react";
import ReactPaginate from 'react-paginate';
import PropTypes from "prop-types";

export class Pagination extends React.Component{

  state = {
    pageCount : 0,
    limit : 10,
    currentPage : 0,
  }

  handelPageClick=(data)=>{
    console.log(data.selected);
    let currentPage = data.selected + 1;
    this.setState({'currentPage': currentPage});
    this.props.addCurrent(this.state.currentPage);
  } 

  static getDerivedStateFromProps(props, state) {
    if(props.pageCount !== state.pageCount){
         return{
          pageCount: props.pageCount,
          currentPage: props.currentPage,
        };
            }
    return null; 
}

componentDidUpdate(prevProps, prevState){
  if (prevState.currentPage !== this.state.currentPage){
    this.props.addCurrent(this.state.currentPage);
  }
}

  render(){
    return(
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
    )
  }
}


Pagination.propTypes = {
  currentPage: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: () => { },
};