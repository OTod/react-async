import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import UserHeader from '../userHeader/UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div key={post.id} className="item">
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    </div>
                    <UserHeader id={post.userId} />
                </div>)
        })
    }

    render() {
        return (<div className="ui relaxed devided list"> {this.renderList()}</div>)
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts }
}

export default connect(mapStateToProps, {
    fetchPosts
})(PostList);