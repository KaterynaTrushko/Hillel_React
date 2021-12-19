import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

// GSAP example
export class LibsBinding extends PureComponent {
  titleEl = createRef();
  bodyEl = createRef();
  buttonEl = createRef();

  componentDidMount() {
    let title = this.titleEl.current;
    let body = this.bodyEl.current;
    let button = this.buttonEl.current;

    let timeline = gsap.timeline();

    let titleTransition = gsap.fromTo(title, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: 'easeInOut',
      duration: 1,
    });
    timeline.add(titleTransition);

    let bodyTransition = gsap.fromTo(body, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: 'easeInOut',
      duration: 1,
    });
    timeline.add(bodyTransition, "-=0.3");

    let buttonTransition = gsap.fromTo(button, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      ease: 'easeInOut',
      duration: 1,
    });
    timeline.add(buttonTransition, "-=0.3");

    console.log('-----------------', {
      title,
      body,
      button
    });
  }

  render() {
    return (
      <div className="">
        <h1 ref={this.titleEl}>Title here</h1>
        <div ref={this.bodyEl}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, rerum!
          </p>
        </div>
        <button ref={this.buttonEl}>Lorem Ipsum</button>
      </div>
    );
  }
}

export default LibsBinding;

LibsBinding.propTypes = {};

LibsBinding.defaultProps = {};
