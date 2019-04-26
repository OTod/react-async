import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';



class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {

        return <div className=""> Post List</div>
    }
}

// const mapStateToProps = () => {
//     return null;
// }

export default connect(null, {
    fetchPosts
})(PostList);