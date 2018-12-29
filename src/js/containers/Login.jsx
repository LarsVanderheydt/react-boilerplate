import React, { Component } from 'react';
import Layout from '../components/Layout';

export default class Login extends Component {
  render() {
    return (
      <Layout>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />      
          </div>

          <input type="submit" />
        </form>
      </Layout>
    );
  }
}
