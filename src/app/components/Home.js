import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
    render() {
      let title = "Profile";
      return (
        <div>
            <p>In a new Component</p>
            <p>title</p>
            <p>Your name is {this.props.name}, your age is {this.props.age} and you are {this.props.user.status}</p>
          <div>
            <h1>Hobbies are</h1>
            <ul>
              {this.props.user.hobby.map((hobbies, i) => <li key={i}>{hobbies}</li>)}
            </ul>
          </div>
          <hr/>
          {this.props.children}
        </div>
      );
    }
}
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
};