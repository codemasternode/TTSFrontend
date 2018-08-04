import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to={'/'}>Homepage</Link>
                    </li>
                    <li>
                        <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                        <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

class Homepage extends Component {
    render() {
        return (
            <div>
                <Helmet
					title="Welcome to our Homepage"
				/>
                <h1>Homepage</h1>
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div>
                <Helmet
					title="Welcome to our About"
				/>
                <h1>About</h1>
            </div>
        );
    }
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Helmet
					title="Welcome to our Contact"
				/>
                <h1>Contact</h1>
            </div>
        );
    }
}


export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Helmet
                    htmlAttributes={{ lang: 'pl', amp: undefined }}
                    titleTemplate="%s | React SSR"
                    titleAttributes={{itemprop: "name", lang: "pl"}}
					meta={[
						{name: "description", content: "Server side rendering example"},
						{name: "viewport", content: "width=device-width, initial-scale=1"},
					]}
                />
                <Menu />
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        );
    }
}