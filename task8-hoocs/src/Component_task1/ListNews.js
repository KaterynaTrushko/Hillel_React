import react from 'react';
import PropTypes from 'prop-types';
import ItemNews from './ItemNews';



export default function ListNews(props){

const news = props.data;

  return(
    <>
    {news.map(el =>(
      <div className='item' key={el.id}><ItemNews el={el}/></div>
    ))}
   
    </>
  )
}



ListNews.propType = {
data: PropTypes.arrayOf(
  PropTypes.shape(
    {
      id: PropTypes.string,
      content: PropTypes.string,
      categories:  PropTypes.arrayOf(
        PropTypes.shape(
          {
            id: PropTypes.string,
            name: PropTypes.string,
          }
        )
      ),
      photo: PropTypes.oneOfType([
        PropTypes.string,
        null,
      ])
    }
  )
)
}

ListNews.defaultProps = {
  data: [],
}



