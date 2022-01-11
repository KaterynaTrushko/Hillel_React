import React, { createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import './Form.css';


export class Form extends PureComponent {
  Name = createRef();
  Emailaddress = createRef();
  Text = createRef();




  handleSubmit = (e) => {
    e.preventDefault();
  
    let obj = {
        body: this.Text.current.value,
        email: this.Emailaddress.current.value,
        name: this.Name.current.value,
        }

      console.log(obj);
      this.props.addForm(obj);

      this.Text.current.value = null;
      this.Emailaddress.current.value = null;
      this.Name.current.value = null;
  };

  render() {
   
    return (
      <>

        <form className="form" onSubmit={this.handleSubmit} >
          <input name="name" ref={this.Name} placeholder="Title Forma" className="name" required />
          <input name="emailaddress" ref={this.Emailaddress} placeholder="Input Email!" className="email" type="email" required />
          {/* <div className="wrapper">
            <input name="1" className="hash" type="checkbox" required />1
            <input name="2" className="hash" type="checkbox" required />2
            <input name="3" className="hash" type="checkbox" required />3
          </div> */}
          <textarea ref={this.Text}  rows="4" cols="50" name="subject" placeholder="Text area" className="message" required></textarea>
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