import {EmployeeDto} from '../dto/EmployeeDto';
import { EmployeeSearchFilterOption } from '../dto/EmployeeSearchFilter';

export class EmployeeSearchState{
    EmployeeResult:Array<EmployeeDto> = new Array<EmployeeDto>();
    EmployeeSearchOption:EmployeeSearchFilterOption = new EmployeeSearchFilterOption();
    constructor(){}
}