import React from "react";
import PropTypes from "prop-types";
import './Form.css'

export class Form extends React.Component {

  render() {
    const { addForm } = this.props;
    return (
      <>

        <form className="form">
          <input name="name" placeholder="Title Forma" className="name" required />
          <input name="emailaddress" placeholder="Укажите ваш Email!" className="email" type="email" required />
          <div className="wrapper">
            <input name="hashtag" className="hash" type="checkbox" required />
            <input name="hashtag" className="hash" type="checkbox" required />
            <input name="hashtag" className="hash" type="checkbox" required />
          </div>
          <textarea rows="4" cols="50" name="subject" placeholder="Text area" className="message" required></textarea>
          <input name="submit" className="btn" type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

Form.propTypes = {
  addForm: PropTypes.func,
};

Form.defaultProps = {
  addForm: () => { },
};