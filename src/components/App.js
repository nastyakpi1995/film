import React from 'react';
// import { connect } from 'react-redux';

import FilmsList from './FilmsList';
// import * as actionCreate from './../redux/store';

class App extends React.Component {
  // componentWillMount() {
  //   // if (localStorage.getItem('films')) {
  //     this.props.localStorageGetItem();
  //   // }
  //   // if (localStorage.getItem('films')) {
  //   //   this.setState({
  //   //     films: JSON.parse(localStorage.getItem('films')),
  //   //   });
  //   // }
  // }

  // componentDidUpdate() {
  //   this.props.localStorageSetItem();
  //   // localStorage.setItem('films',
  //   //   JSON.stringify(this.state.films));
  // }
  render() {
    return (
<section className="todoapp">
    <FilmsList /> 
  </section>
    )
  }
}

// const mapState = () => ({
//   // todosLength: todos.length,
// });

// const mapAction = dispatch => ({
//   localStorageGetItem: () => dispatch(actionCreate.localStorageGetItem()),
//   localStorageSetItem: () => dispatch(actionCreate.localStorageSetItem()),
// })

export default App;

// App.propTypes = appPropTypes;