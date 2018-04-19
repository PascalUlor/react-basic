import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from "./components/Home";

class App extends React.Component {
    render() {
        let user = {
            hobby: ["Acquiring knowledge", "Coding"],
            status: "single"
        }
      return (
        <div className="container">
            <div className="row">
                <div className="col-xs-10 col-xs-offset-1">
                    <Header/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs col-xs-offset-1">
                    <Home name={"Pascal"} age={"28"} user={user}>
                    <p>This text is outside the Home Componenet</p>
                    </Home>
                </div>
            </div>
        </div>
      );
    }
}

render(<App/>, window.document.getElementById("App"));