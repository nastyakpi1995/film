import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  state = {
    title: '',
    stars: '',
    releaseyear: '',
    format: '',
  }

  hanleSubmit = (event) => {
    event.preventDefault();
    const { onSubmit } = this.props;
    const {
      title, stars, releaseyear, format,
    } = this.state;

    if (title.length < 1) {
      return;
    }

    onSubmit(title, stars, releaseyear, format);

    this.setState({
      title: '',
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      title, stars, releaseyear, format,
    } = this.state;
    const { handleClose } = this.props;

    return (
      <div>
        <form 
          onSubmit={this.hanleSubmit} 
          className="add__new__films"
        >
          <p className="films-list">
            enter title
            <input
              type="text"
              value={title}
              placeholder="What needs title?"
              name="title"
              onChange={this.handleChange}
          />
          </p>
          <p>enter stars:
          <input
            type="text"
            value={stars}
            placeholder="What stars?"
            name="stars"
            onChange={this.handleChange}
          />
          </p>
          <p>enter yers:
          <input
            type="text"
            value={releaseyear}
            placeholder="What releas eyear?"
            name="releaseyear"
            onChange={this.handleChange}
          />
          </p>
          <p> enter format:
          <input
            type="text"
            value={format}
            placeholder="What format?"
            name="format"
            onChange={this.handleChange}
          />
          </p>
          
          <button
            type="submit"
            className="buttonHide"
          >
          submit
          </button>
          <button
            type="submit"
            className="buttonClose"
            onClick={handleClose}
          >
          X
          </button>
        </form>
      </div>
    );
  }
}

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Header;