import { IonContent, IonSearchbar, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React,{Component,useEffect, useState} from 'react';
import { EmployeeService } from '../services/EmployeeService';
import { async } from 'q';

interface EmployeeSearchBarProps {
  placeHolderName:string;
  onTextChange:any;
  term:string
}
interface EmployeeSearchBarState{
 
}
export class EmployeeSearchBar extends Component<EmployeeSearchBarProps,EmployeeSearchBarState>{
  private employeeService:EmployeeService = new EmployeeService();
  searchEmployee$ = this.employeeService.searchEmployee$;
  
  constructor(props:any){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event:any){
    this.props.onTextChange(event.target.value);
  }
  componentDidMount(){
   
  }
 
  render(){
    return(
    <div>
     <IonSearchbar 
     
     onIonChange={this.handleChange.bind(this)}
     value={this.props.term}
     placeholder={this.props.placeHolderName}>
     </IonSearchbar>
     </div>
    )
  }  
}
