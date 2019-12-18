import React from 'react';
import { Consumer } from './Router';

export default function Route(props:any) {
    return (<Consumer>
        {props.children}
    </Consumer>);
}