import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import {Root} from './components/Root';
import {Home} from './components/Home';
import {User} from './components/User';

const browserHistory = createBrowserHistory();

class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
               <Switch>
                <Root path={"/"}>
                    <Route path={"/user/:id"} component={User} />
                    <Route path={"/home"} component={Home} />
                </Root>
                <Route path={"/page"} component={Home} />
               </Switch>
            </Router>
        );
    }
}

render(<App />, window.document.getElementById('App'));