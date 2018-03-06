import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      category: '',
      newProject: {},
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  };

  handleTitleChange(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleCategoryChange(e) {
    this.setState({
      category: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title === '') {
      alert("Title is required!");
    } else {
      this.setState({
        newProject: {
          id: uuid.v4(),
          title: this.state.title,
          category: this.state.category,
        }
      }, ()=> {
        this.props.addProject(this.state.newProject);
      });
    }

  }

  render() {
    const categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>;
    });

    return (
      <div className="AddProject">
        <h3>Add New Project</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" value={this.state.title} onChange={this.handleTitleChange}/>
          </label>
          <br />
          <label>
            Category:
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              {categoryOptions}
            </select>
          </label>
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  addProject: PropTypes.func,
  categories: PropTypes.array,
};

export default AddProject;
