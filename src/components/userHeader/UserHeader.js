import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions'

class UserHeader extends Component {

    componentDidMount() {
        console.log(this.props);
        this.props.fetchUser(this.props.id);
    }

    render() {
        const { user } = this.props;
        if (!user) { return null };
        return <div className="header">{user.name}</div>
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.id) }
}

export default connect(mapStateToProps, { fetchUser })(UserHeader);