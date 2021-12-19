import React, { Component } from "react";
import  news  from './news';
import Item from "./Item";



class Content extends Component{
  
  render(){
    const date  = this.props;
    
    
    return(
      <>
      {date.props.map(el => (
        <div key={el.id}>  
            {el.link ? <a href={el.link}><Item props={el}/></a>:
            <Item props={el}/>
            }
        </div>
      ))}
     </>
    )
  }
}

export default Content;