import React, { Component } from 'react';

//Task

import Form from './Form';
import Task from './Task';

import './Main.css';

class Main extends Component {
    state = {
        newTask: '',
        tasks: [],
        index: -1,
    };

    componentDidMount() {
        const tasks = JSON.parse(localStorage.getItem('tarefas'));

        if (!tasks) return;

        this.setState({ tasks });
    }

    componentDidUpdate(prevProps, prevState) {
        const { tasks } = this.state;

        if (tasks === prevState) return;

        localStorage.setItem('tarefas', JSON.stringify(tasks));
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { tasks, index } = this.state;
        let { newTask } = this.state;

        newTask = newTask.trim();

        if (tasks.indexOf(newTask) !== -1) return;

        const newTasks = [...tasks];

        if (index === -1) {
            this.setState({
                tasks: [...newTasks, newTask],
                newTask: '',
            });
        } else {
            newTasks[index] = newTask;

            this.setState({
                tasks: [...newTasks],
                index: -1,
            })
        }
    }

    handleEdit = (e, index) => {
        const { tasks } = this.state;

        this.setState({
            index,
            newTask: tasks[index],
        });
    }

    handleDelete = (e, index) => {
        const { tasks } = this.state;
        const newTasks = [...tasks];

        newTasks.splice(index, 1);

        this.setState({
            tasks: [...newTasks],
        })
    }

    handleChange = (e) => {
        this.setState({
            newTask: e.target.value,
        })
    }

    render() {
        const { newTask, tasks } = this.state;
        return (
            <div className="main">
                <h1>BIT-TASK_LIST</h1>
                <Form handleSubmit={this.handleSubmit} handleChange={this.handleChange} newTask={newTask} />
                <Task tasks={tasks} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />

            </div>
        )
    }
}


export default Main;