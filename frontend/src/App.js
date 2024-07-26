import React, { Component } from 'react';
import './App.css';
import CustomModal from './components/Modal';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      todoList: [],
      viewDescriptionId: null 
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("http://localhost:8000/api/tasks/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`http://localhost:8000/api/tasks/${item.id}/`, item)
        .then(res => this.refreshList());
    } else {
      axios
        .post("http://localhost:8000/api/tasks/", item)
        .then(res => this.refreshList());
    }
  };

  handleDelete = item => {
    axios
      .delete(`http://localhost:8000/api/tasks/${item.id}/`)
      .then(res => this.refreshList());
  };

  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  viewItem = id => {
    this.setState({ viewDescriptionId: this.state.viewDescriptionId === id ? null : id });
  };

  displayCompleted = status => {
    this.setState({ viewCompleted: status });
  };

  renderTabList = () => {
    return (
      <div className='my-2 tab-list'>
        <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "active" : ""}
        >
          Completed
        </span>
        <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "" : "active"}
        >
          Incomplete
        </span>
      </div>
    );
  };

  renderItems = () => {
    const { viewCompleted, todoList, viewDescriptionId } = this.state;
    const newItems = todoList.filter(
      item => item.completed === viewCompleted
    );

    return newItems.map(item => (
      <li key={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
        <div>
          <span
            className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
            title={item.title}
          >
            {item.title}
          </span>
          {viewDescriptionId === item.id && (
            <div className="description-box">
              {item.description}
            </div>
          )}
        </div>
        <span>
          <button
            className={`btn ${viewDescriptionId === item.id ? "btn-danger" : "btn-primary"} btn-spacing`}
            onClick={() => this.viewItem(item.id)}
          >
            <i className="fas fa-eye"></i>
          </button>
          <button className='btn btn-success mr-2 btn-spacing' onClick={() => this.editItem(item)}>
            <i className="fas fa-pen"></i>
          </button>
          <button className='btn btn-danger' onClick={() => this.handleDelete(item)}>
            <i className="fas fa-trash"></i>
          </button>
        </span>
      </li>
    ));
  };

  render() {
    return (
      <main className="content p-3 mb-2 bg">
        <h1 className='text-white text-uppercase text-center my-4'>Task Manager</h1>
        <div className='row'>
          <div className='col-md-6 col-sma-10 mx-auto p-0'>
            <div className='card p-3'>
              <div>
                <button className='btn btn-warning' onClick={this.createItem}>
                  <i className="fas fa-plus"></i> Add Task
                </button>
                <br /><br/>
              </div>   
              {this.renderTabList()}
              <ul className='list-group list-group-flush'>
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
        <br />
        <footer className='text-white my-5 mb-2 bg text-center'>Copyright 2024 &copy; All Rights Reserved</footer>
        {this.state.modal ? (
          <CustomModal activeItem={this.state.activeItem} toggle={this.toggle} onSave={this.handleSubmit} />
        ) : null}
      </main>
    );
  }
}

export default App;
