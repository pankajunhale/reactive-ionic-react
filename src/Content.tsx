import { Consumer } from './Router';
import Route from './Route';
import React from 'react';
import Home from '../src/pages/Home';
import Search from '../src/pages/FrameworkSearch';

export default function Content(props:any) {
        <Consumer>
            {({isUserLoggedIn}) => {
                return <React.Fragment>
                    <Route path="/"><div>main</div></Route>
                    <Route path="/home"><Home /></Route>
                    <Route path="/search"><Search /></Route>
                </React.Fragment>
            }}
        </Consumer>
}