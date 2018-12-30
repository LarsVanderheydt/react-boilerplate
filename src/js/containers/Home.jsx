import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../components/Layout';

class Home extends Component {
    render() {
        return (
            <Layout breadcrumb={{ show: false }}>
                <div className="container">
                    <h1>{this.props.page}</h1>
                </div>
            </Layout>
        );
    }
}

export default inject(
    ({ store }) => {
        return ({
            page: store.page
        });
    }
)(
    observer(Home)
);