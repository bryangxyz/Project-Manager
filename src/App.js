import React, { Component } from 'react';
import './App.css';
import Projects from './Components/projects';
import AddProject from './Components/addProject';
import uuid from 'uuid';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
    this.addProject = this.addProject.bind(this);
    this.deleteProject = this.deleteProject.bind(this);
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development',
        },
        {
          id: uuid.v4(),
          title: 'Web Development',
          category: 'Business Application',
        },
        {
          id: uuid.v4(),
          title: 'E-commerce',
          category: 'Business Application',
        },
      ],
    })
  }

  addProject(newProject) {
    const projects = this.state.projects;
    projects.push(newProject);
    this.setState({
      projects: projects,
    });
  }

  deleteProject(id) {
    const projects = this.state.projects;
    const index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({
      projects: projects,
    });
  }

  render() {
    return (
      <div className="App">
        <h2>Project Manager</h2>
        <AddProject addProject={this.addProject}/>
        <Projects projects={this.state.projects} deleteProject={this.deleteProject}/>
      </div>
    );
  }
}

export default App;
