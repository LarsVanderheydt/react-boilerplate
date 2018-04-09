import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Home extends Component {
    render() {
        return (
            <h1>
                {this.props.name}
            </h1>
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