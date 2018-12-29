import React from 'react';
import Layout from './Layout';
import { inject, observer } from 'mobx-react';
import Loading from './Loading';


const User = ({ match, getUser }) => {
  const { id } = match.params;
  const user = getUser(id);
  
  return !user ? <Loading /> : (
    <Layout>
      <p>{user.name}</p>
    </Layout>
  );

  };

export default inject(
  ({ store }) => {
    return {
      getUser: store.getUser,
      user: store.user
    };
  }
)(
  observer(User)
);