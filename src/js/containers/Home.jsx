import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Navigation from './Navigation';

class Home extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <h1>Homepage content h1</h1>
            </div>
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