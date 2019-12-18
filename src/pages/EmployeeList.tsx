import React,{Component} from 'react';
import {EmployeeInfo} from '../mock-data/EmployeeMockData';
import {IonRow,IonCol,IonList,IonItem,IonLabel,IonBadge,IonCheckbox,IonContent
} from '@ionic/react';
import { EmployeeDto } from '../dto/EmployeeDto';

interface IEmployeeListProps{
    employeeList:Array<EmployeeDto>
}
interface IEmployeeListState{
   
}
class EmployeeList extends Component<IEmployeeListProps,IEmployeeListState> {
    constructor(props:any){
        super(props);
    }
    render(){
        return(
            <IonRow>
                <IonCol>
                    <IonList>
                    {this.props.employeeList.map((item:EmployeeDto) => {
                      return(
                        <IonItem key={item.Id}>
                            <IonBadge slot="start" color={item.GenderColor}>{item.GenderBadge}</IonBadge>
                            <IonLabel>{item.Name}</IonLabel>
                            <IonLabel>{item.IpAddress}</IonLabel>
                            <IonLabel>{item.Gender}</IonLabel>
                            <IonLabel>{item.EmailId}</IonLabel>
                        </IonItem>
                      )
                    })}
                    </IonList>
                </IonCol>
            </IonRow>
        )
    }
   
}

export default EmployeeList;