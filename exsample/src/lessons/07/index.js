import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { LibsBinding } from './refs/LibsBinding'
import { RenderCounter } from './refs/RenderCounter'
import { Timer } from './refs/Timer'
import { UncontrolledFields } from './refs/UncontrolledFields'
import { UILibInput } from './refs/UILibInput'
import { SWHeroesList } from './hooks/SWHeroesList'
import { Toggler } from './hooks/Toggler'
import { WindowSize } from './hooks/WindowSize'

export class Lesson extends PureComponent {
  render() {
    return (
      <div className="">
        {/*<RenderCounter />*/}
        {/*<Timer />*/}
        {/*<UncontrolledFields />*/}
        {/*<LibsBinding />*/}
        {/*<UILibInput />*/}
        <Toggler hello={123} />
        <Toggler hello={123} />
        <Toggler hello={123} />
        <Toggler hello={123} />
        {/*<WindowSize />*/}
        {/*<SWHeroesList />*/}
      </div>
    );
  }
}

export default Lesson;

Lesson.propTypes = {};

Lesson.defaultProps = {};
