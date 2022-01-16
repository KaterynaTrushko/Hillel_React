import React, { createRef, PureComponent} from "react";
import PropTypes from "prop-types";
import './Form.css';


export class Form extends PureComponent {
  state = {
    chacked : [],
  }


  Name = createRef();
  Emailaddress = createRef();
  Text = createRef();
  box1 = createRef();
  box2 = createRef();
  box3 = createRef();




  handleSubmit = (e) => {
    e.preventDefault();
  
    let obj = {
        body: this.Text.current.value,
        email: this.Emailaddress.current.value,
        name: this.Name.current.value,
        checked: this.state.chacked,
        }

      console.log(obj);
      this.props.addForm(obj);

      this.Text.current.value = null;
      this.Emailaddress.current.value = null;
      this.Name.current.value = null;
  };


  handleHash = (e) => {
    let value = e.target.value;
    console.log(value);
    if(this.state.chacked.includes(value)){
      let data = this.state.chacked.filter(el => el!== value);
      this.setState({chacked : data,})
    } else {
      let data = [value, ...this.state.chacked];
      this.setState({chacked : data,});
    }
  }

  render() {
   
    return (
      <>

        <form className="form" onSubmit={this.handleSubmit} >
          <input name="name" ref={this.Name} placeholder="Title Forma" className="name" required />
          <input name="emailaddress" ref={this.Emailaddress} placeholder="Input Email!" className="email" type="email" required />
          <div className="wrapper">
            <label style={{marginLeft : "25px"}}>1<input ref={this.box1} value='1' className="hash" name="some" type="checkbox" onChange={(e)=>this.handleHash(e)} /></label>
            <label style={{marginLeft : "25px"}}>2<input ref={this.box2} value='2' className="hash" name="some" type="checkbox"  onChange={(e)=>this.handleHash(e)}/></label>
            <label style={{marginLeft : "25px"}}>2<input ref={this.box3} value='3' className="hash" name="some" type="checkbox"  onChange={(e)=>this.handleHash(e)}/></label>
          </div>
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