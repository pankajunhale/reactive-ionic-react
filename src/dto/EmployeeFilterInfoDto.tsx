import { EmployeeEmailDomain } from "./EmployeeEmailDomain";

export class EmployeeFilterInfo{
    Term:string='';
    Domain:Array<EmployeeEmailDomain> = [];
    Gender:string='';
    constructor(term:string,gender:string,domain:Array<EmployeeEmailDomain>){
        this.Term = term.toLowerCase();
        this.Gender = gender.toLowerCase();
        this.Domain = this.findSelectedDomain(domain);
    }

    private findSelectedDomain(list:Array<EmployeeEmailDomain>){
        return list.filter((item:EmployeeEmailDomain)=>{
            if (item.IsChecked){
               item.Name = item.Name.toLowerCase();
               return item;
            }
        })
    }
}