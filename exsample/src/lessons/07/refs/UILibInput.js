import React, { PureComponent, forwardRef } from 'react';
import PropTypes from 'prop-types';

class OriginalInput extends PureComponent {
  render() {
    const { label, forwardedRef } = this.props;

    return (
      <div>
        <label>{label}: <input ref={forwardedRef} type="text" /></label>
      </div>
    );
  }
}

export const ForfardedInput = forwardRef((props, ref) => {
  console.log('-----------------', {
    props,
    ref,
  });
  return (
    <OriginalInput {...props} forwardedRef={ref} />
  )
});

ForfardedInput.propTypes = {
  label: PropTypes.string,
};

export class UILibInput extends PureComponent {
  render() {
    return (
      <div className="">
        <OriginalInput test={123} forwardedRef={console.log} label="First Name" />
        <ForfardedInput test={123} ref={console.log} label="Last Name" />
      </div>
    );
  }
}

export default UILibInput;

UILibInput.propTypes = {};

UILibInput.defaultProps = {};
