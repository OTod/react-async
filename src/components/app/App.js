import React, { Component } from 'react';

import PostList from '../postLIst/PostList'

export default class App extends Component {

    render() {

        return (
            <div className="ui container">
                < PostList/>
            </div>
        );
    };
};