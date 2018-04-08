import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class Home extends Component {
    render() {
        return (
            <div>
                {this.props.name}
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