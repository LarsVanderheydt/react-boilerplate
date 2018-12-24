import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../components/Layout';

class Home extends Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h1>Hello world</h1>
                </div>
            </Layout>
        );
    }
}

export default inject(
    ({ store }) => {
        return ({
            name: store.name
        });
    }
)(
    observer(Home)
);