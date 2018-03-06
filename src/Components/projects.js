import React, { Component } from 'react';
import ProjectItem from './projectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  handleProjectDelete(id) {
    this.props.deleteProject(id);
  }

  render() {
    let projectItems;
    if (this.props.projects) {
      projectItems = this.props.projects.map(project => {
        return <ProjectItem
                  key={project.title}
                  project={project}
                  handleProjectDelete={this.handleProjectDelete.bind(this)}
               />;
      })
    }
    return (
      <ul className="Projects">
        {projectItems}
      </ul>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
  deleteProject: PropTypes.func,
};

export default Projects;
