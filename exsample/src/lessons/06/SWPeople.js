import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SWPeople extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'initial', // initial, loading, success, error
      error: null,
      data: null,
    };

    // this.setState({}) // нельзя!
    // fetch() // нельзя

    console.log('---> SWPeople: constructor');
  }

  fetchData = (id) => {
    this.setState({
      status: 'loading',
      error: null,
      data: null,
    });

    fetch(`https://swapi.dev/api/people/${id}/`)
      .then((res) => {
        console.log('---> SWPeople: fetch.then', res);
        return res.json()
      })
      .then((data) => {
        console.log('---> SWPeople: fetch.then after res.json()', data);
        this.setState({
          status: 'success',
          error: null,
          data,
        });
      })
      .catch((error) => {
        console.log('---> SWPeople: fetch.catch', error);
        this.setState({
          status: 'error',
          error: error.message,
          data: null,
        });
      })
  };

  render() {
    console.log('---> SWPeople: render');
    const { status, error, data } = this.state;

    return (
      <div className="">
        {status === 'loading' || status === 'initial' ? (
          <div>Loading...</div>
        ) : (
          <div>
            {error === null ? (
              <div>
                Hero name is: {data.name}
              </div>
            ) : (
              <span style={{ color: 'red' }}>{error}</span>
            )}
          </div>
        )}
      </div>
    );
  }

  componentDidMount() {
    console.log('---> SWPeople: componentDidMount');
    const { peopleID } = this.props;
    this.fetchData(peopleID);
  }

  componentDidUpdate(prevProps, prevState) {
    const prevPeopleID = prevProps.peopleID;
    const peopleID = this.props.peopleID;

    console.log('---> SWPeople: componentDidUpdate', {
      prevPeopleID,
      peopleID,
    });

    if (prevPeopleID !== peopleID) {
      console.log('---> SWPeople: componentDidUpdate: loading a new hero');
      this.fetchData(peopleID);
    }
  }
}

export default SWPeople;

SWPeople.propTypes = {
  peopleID: PropTypes.number,
};

SWPeople.defaultProps = {
  peopleID: 1
};
