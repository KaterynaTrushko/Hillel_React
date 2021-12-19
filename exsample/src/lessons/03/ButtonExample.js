import React, { Component } from 'react';
import PropTypes from "prop-types";

class Button extends Component {
  render() {
    const { handleClick, children, color, background, style, icon } = this.props;

    console.log(PropTypes);

    const handlerWrapper = () => {
      console.log('handlerWrapper');
      handleClick((new Date()).toISOString());
    }

    return (
      <button
        className="button"
        style={{
          ...style,
          color,
          background,
        }}
        onClick={handlerWrapper}
      >
        <span className="button__cont">{children}</span>
        {icon && (
          <span className="button__icon">{icon}</span>
        )}
      </button>
    );
  }
}

export default Button;

Button.propTypes = {
  children: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  icon: PropTypes.node,
  handleClick: PropTypes.func,
  color: PropTypes.string,
  background: PropTypes.string,
  style: PropTypes.shape({
    margin: PropTypes.string,
    padding: PropTypes.string,
  }),
};

Button.defaultProps = {
  color: 'purple',
  background: 'green',
};
