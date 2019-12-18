import React,{Component} from 'react';
import EmployeeList from './EmployeeList';
import {EmployeeInfo} from '../mock-data/EmployeeMockData';
import {EmployeeSearchBar} from './EmployeeSearchBar';
import { IonItem, IonRow, IonCol, IonContent } from '@ionic/react';
import { EmployeeService } from '../services/EmployeeService';
import {appState} from '../App.State';
import {EmployeeSearchState} from '../state/EmployeeSearchState';


interface IEmployeeContainerProps{
}
interface IEmployeeContainerState{
    employeeList:Array<any>;
}
export class EmployeeContainer extends Component<IEmployeeContainerProps,IEmployeeContainerState>{
    
    private employeService:EmployeeService = new EmployeeService();
    constructor(props:any){
        super(props);
        this.employeService.employeeResult$.subscribe((res)=>{
            this.state = {
                employeeList:res
            }
        })
     

    }   
    componentDidMount(){
        console.log(this.state);        
    }

    render(){
        return(  
            <div>
               
                <IonRow>
                    <IonCol size="3" >
                        <div>
                            Advance filter
                        </div>                       
                    </IonCol>
                    <IonCol size="9">
                        <EmployeeList employeeList={this.state.employeeList}></EmployeeList>
                    </IonCol>
                </IonRow>  
            </div>               
                                       
        )
    }
}



