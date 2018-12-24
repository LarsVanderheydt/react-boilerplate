import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../components/Layout';

class Contact extends Component {
    render() {
        return (
            <Layout>
                <div className="container">
                    <h1>Hello contact page</h1>
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
    observer(Contact)
);