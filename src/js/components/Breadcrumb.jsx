import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Breadcrumb extends Component {
  state = {
    parts: []
  }

  componentDidMount() {
    const { breadcrumb, location } = this.props;
    let { parts } = this.state;
    let pathname = location.pathname;

    let path_parts = pathname.split('/');
    path_parts.shift();

    path_parts.map(p => parts.push({ label: p, link: p }));
    if (breadcrumb.pathname) breadcrumb.pathname.forEach((p, i) => parts[i] = p);
    
    this.setState({ parts });
  }
  
  render() {
    const { parts } = this.state;
    
    return !parts ? '' : (
      <ul className="container breadcrumb">
        <li><Link to='/home'>Home</Link></li>
        { parts.map((u, i) => {
          return (
            <li key={i}>
              { i === parts.length - 1 ? u.label : <Link to={`/${u.link}`}>{ u.label }</Link>}
            </li>
          );
        }) }
      </ul>
    );
  }
}

export default withRouter(Breadcrumb);
