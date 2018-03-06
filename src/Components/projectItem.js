import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {
  deleteProject(id) {
    this.props.handleProjectDelete(id);
  }

  render() {
    return (
      <li>
        <strong>{this.props.project.title}</strong>: {this.props.project.category}
          <button onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</button>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  handleProjectDelete: PropTypes.func,
  project: PropTypes.object,
};

export default ProjectItem;
