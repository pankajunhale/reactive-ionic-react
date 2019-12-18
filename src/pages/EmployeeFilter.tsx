import React, { Component } from 'react';
import { EmployeeFilterInfo } from '../dto/EmployeeFilterInfoDto';
import { IonItem, IonHeader, IonLabel, IonContent, IonList, IonCol, IonRow, IonChip, IonIcon, IonButton } from '@ionic/react';
import { EmployeeEmailDomain } from '../dto/EmployeeEmailDomain';

interface IEmployeeFilter {
    employeeFilterInfo: EmployeeFilterInfo
    onReset:any;
}
export class EmployeeFilter extends Component<IEmployeeFilter>{
    constructor(props: any) {
        super(props);
        this.handleReset = this.handleReset.bind(this);
    }

    handleReset(){
        this.props.onReset();
    }

    render() {
        if (this.props.employeeFilterInfo != null) {
            if(this.isResetAllFilter()){
                return null;
            }
            let rednerTerm = null;
            let renderGender = null;
            if (this.props.employeeFilterInfo.Term !== '') {
                rednerTerm = <IonChip color="primary" >
                    <IonLabel>{this.props.employeeFilterInfo.Term}</IonLabel>
                    <IonIcon name="close-circle" />
                </IonChip>;
            }
            if (this.props.employeeFilterInfo.Gender !== '') {
                rednerTerm = <IonChip color="primary" >
                    <IonLabel>{this.props.employeeFilterInfo.Gender}</IonLabel>
                    <IonIcon name="close-circle" />
                </IonChip>;
            }
            return (
                <div>
                    <IonItem no-lines>
                        <IonLabel>Filter By:</IonLabel>
                        <IonButton color="warning" onClick={this.handleReset}>Reset All</IonButton>
                    </IonItem>
                    {renderGender}
                    {rednerTerm}
                    {
                        this.props.employeeFilterInfo.Domain.map((item: EmployeeEmailDomain,index:number) => {
                            return (
                                <IonChip key={index} color="primary">
                                    <IonLabel>{item.Name}</IonLabel>
                                    <IonIcon name="close-circle" />
                                </IonChip>
                            )
                        })
                    }
                </div>
            )
        }
        else {
            return null;
        }
    }

    private isResetAllFilter():boolean{
        return(this.props.employeeFilterInfo.Term === '' && this.props.employeeFilterInfo.Domain.length === 0 && this.props.employeeFilterInfo.Gender === '');
    }

    
}