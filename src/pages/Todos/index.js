/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';

import { TodoList } from './styles';
import { Menu } from '../../components/Menu';
import { Loader } from '../../components/Loader';

import api from '../../services/api';

export default class Todos extends Component {
  state = {
    todoList: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('/todos/');

    const todoList = response.data;

    this.setState({ todoList, loading: false });
  }

  render() {
    const { todoList, loading } = this.state;

    return (
      <div className="container">
        <div className="content">
          <Menu />
          {loading ? (
            <Loader />
          ) : (
            <TodoList>
              {todoList.map((todo, index) => (
                <div
                  className="todo clickable"
                  onClick={() => {
                    const newList = [];

                    todoList.map((o) => {
                      newList.push({
                        userId: o.userId,
                        id: o.id,
                        title: o.title,
                        completed:
                          o.id === todo.id ? !o.completed : o.completed,
                      });
                    });

                    this.setState({ todoList: newList });
                  }}
                >
                  <p>{todo.title}</p>
                  <input type="checkbox" checked={todo.completed} />
                  <span className="checkmark" />
                </div>
              ))}
            </TodoList>
          )}
        </div>
      </div>
    );
  }
}
