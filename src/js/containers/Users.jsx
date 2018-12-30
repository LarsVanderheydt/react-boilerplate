import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Layout from '../components/Layout';

class Users extends Component {
  state = {
      users: []
  }

  componentDidMount() {
      let { users } = this.state;
      users = this.props.users;
      this.setState({ users });
  }

  render() {
    return (
      <Layout>
        <div className="container users_overview">
          {this.state.users.map(user => (
              <div key={user.id}>
                  <Link to={`/user/${user.id}`}>
                      <p>{user.username}</p>
                  </Link>
              </div>
          ))}
        </div>
      </Layout>
    );
  }
}

export default inject(
  ({ store }) => {
      return ({
          fetchUsers: store.fetchUsers,
          users: store.users
      });
  }
)(
  observer(Users)
);