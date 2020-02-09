/* eslint-disable react/state-in-constructor */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

import { PostList } from './styles';
import { Menu } from '../../components/Menu';
import { Loader } from '../../components/Loader';

import api from '../../services/api';

export default class Posts extends Component {
  state = {
    postList: [],
    loading: true,
  };

  async componentDidMount() {
    const response = await api.get('/posts/');

    const postList = response.data;

    this.setState({ postList, loading: false });
  }

  render() {
    const { postList, loading } = this.state;

    return (
      <div className="container">
        <div className="content">
          <Menu />
          {loading ? (
            <Loader />
          ) : (
            <PostList>
              {postList.map(post => (
                <div className="post">
                  <h1>{post.title}</h1>
                  <p>{post.body}</p>
                </div>
              ))}
            </PostList>
          )}
        </div>
      </div>
    );
  }
}
