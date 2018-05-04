import React from "react";
import {createBrowserHistory} from 'history';

const browserHistory = createBrowserHistory();
export class User extends React.Component {
    oNavigateHome() {
        browserHistory.push("/home");
    }
    
    render() {
        console.log(this.props);
        return (
            <div>
                <h3>The User Page</h3>
                <p>User ID: {this.props.match.params.id}</p>
                <button onClick={this.oNavigateHome} className="btn btn-primay">Go Home</button>
            </div>
        );
    }
}