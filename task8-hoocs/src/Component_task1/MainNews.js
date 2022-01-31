import React from "react";
import  { useEffect } from 'react';
import  { useRef } from 'react';
import { useState, useMemo } from "react";
import FilterNews from "./FilterNews";
import FormNews from "./FormNews";
import ListNews from "./ListNews";
import news from "./news";
import propType from "prop-type";


export default function MainNews(){ 

  const [data, setData] = useState([]);

  useEffect(()=>{
    setData(news)
  },[])

 



  return(
    <>
    MainNews;
    <FormNews/>
    <FilterNews/>
    <ListNews data={data}/>
    </>
  )
}



MainNews.propType = {

}

MainNews.defaultProps = {
  
}

