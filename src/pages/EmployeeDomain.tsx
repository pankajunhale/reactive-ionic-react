import React, { Component } from 'react'
import { IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';
import { EmployeeEmailDomain } from '../dto/EmployeeEmailDomain';

interface IEmployeeDomainProps {
    domainList: Array<EmployeeEmailDomain>
    onDomainSelect:any
}

interface IEmployeeDomainState {

}
export class EmployeeDomain extends Component<IEmployeeDomainProps, IEmployeeDomainState>{

    constructor(props: IEmployeeDomainProps) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt:any,selectedItem:EmployeeEmailDomain){
      //  debugger;
        this.props.onDomainSelect({value:evt.target.checked,item:selectedItem});
    }
    render() {
        const myStyle={
            backgroundColor:'#ccc',
            padding:'4px'
        }
        return (
                <div style={myStyle}>  
                    {
                    this.props.domainList.map((item:EmployeeEmailDomain,index:number) => {
                        return (
                            <IonItem key={index}>
                                <IonLabel>{item.Name.toUpperCase()}</IonLabel>
                                <IonCheckbox
                                    color="dark"
                                    checked={item.IsChecked}
                                    slot="end" onClick={e=>this.handleChange(e,item)}>
                                </IonCheckbox>
                            </IonItem>
                        )
                    })
                    }
                </div>
                
        )
    }

}