import React, { createContext, Component } from 'react';
// config and set global context
import {appConfiguration} from './AppConfiguration';
const initialState = appConfiguration;
const Context = React.createContext(appConfiguration);

const {Provider, Consumer} = Context;

class Router extends Component{
    state = initialState;

    render(){
        return(
            <Provider value={initialState}>
                {this.props.children}
            </Provider>
        )
    }
}

export {Router as default, Consumer};