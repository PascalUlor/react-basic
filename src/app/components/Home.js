import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialLinkName
    };
    setTimeout(() => {
      this.setState({
        status: "single"
      });
    }, 3000);
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    });
  }
  onChangeLink() {
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event) {
    this.setState({
      homeLink: event.target.value
    })
  }
    render() {
      return (
        <div>
            <p>In a new Component</p>
            <p>title</p>
            <p>Your name is {this.props.name}, you are {this.state.age} years old</p>
            <p>You are {this.state.status} af</p>
            <hr/>
            <button onClick={() => this.onMakeOlder()} className="btn btn-primary">make me older</button>
            <hr/>
            <button onClick={this.props.greet} className="btn btn-primary">Alert</button>
            <hr/>
            <input type="text" value={this.state.homeLink} 
            onChange={(event) => this.onHandleChange(event)}/>
            <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
        </div>
      );
    }
}
Home.propTypes = {
  name: PropTypes.string,
  initialAge: PropTypes.number,
  status: PropTypes.string,
  greet: PropTypes.func,
  initialLinkName: PropTypes.string
};