import React from 'react';
import { Observable } from 'rxjs';


export default (observable:Observable<any>,triggers?:any,initialState?:any)=> (Component:any) =>{
    return class extends React.Component{
        subscription:any
        constructor(props:any){
            super(props);
            this.state = {
                ...initialState
            };
        }
        componentDidMount(){
            this.subscription = observable.subscribe((newState:any) =>{
                this.setState({ ...newState });
                setTimeout(() => {
                    // console.log(this.state);
                    localStorage.setItem('myData',JSON.stringify(newState))                
                }, 0);
            });
        }
        componentWillUnmount(){
            this.subscription.unsubscribe();
        }
        render(){
            return (
                <Component {...observable} {...this.state} {...triggers}></Component>
            );
        }
    }
}