import react from 'react';
import PropTypes from 'prop-types';
// import ItemNews from './ItemNews';



export default function ItemNews(props){

const { el } = props;
console.log(el);
const someHTML = el.content;

  return(
    <div>
      <b>id </b>{el.id}<br />
      <b>title </b>{el.title}<br />
      <div>
        {el.photo ? <img src={el.photo}></img> : null}
      </div>
      <b>content:</b><span dangerouslySetInnerHTML={{ __html: someHTML }} /><br />
      <b>categories </b>
      {el.categories.map(el => (
        <label><input key={el.id} type="checkbox" checked />{el.name}
        </label>
      ))}<br/>
      <b>author: </b>{el.author}<br/>
    </div>
  )
}



ItemNews.propType = {
  el : PropTypes.shape(
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
}

ItemNews.defaultProps = {
  el : {},
}