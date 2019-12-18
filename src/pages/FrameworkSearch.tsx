import React from 'react';
import { BehaviorSubject, combineLatest } from 'rxjs';
import withObservableStream from '../../src/withObservableOverStream';
import { flatMap,map, toArray } from 'rxjs/operators';
import {EmployeeService} from  '../services/EmployeeService';
import EmployeeList from './EmployeeList';
import { EmployeeDomain } from './EmployeeDomain';
import { IonRow, IonCol, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import { EmployeeEmailDomain } from '../dto/EmployeeEmailDomain';
import { EmployeeSearchBar } from './EmployeeSearchBar';
import { Pagination } from './Pagination';
import { FilterByGender } from './FilterByGender';
import { NoRecordFoundComponent } from '../widget/NoRecordFoundComponent';
import { EmployeeFilterInfo } from '../dto/EmployeeFilterInfoDto';
import { EmployeeFilter } from './EmployeeFilter';


interface ISearchProps {
    term: string,
    domainList:[],
    fetchResult:[];
    pageOffset:number;   
    userPage:number;
    totalPages:number;
    totalResult:number;
    isFirstPage:boolean;
    isLastPage:boolean;
    gender:string;
    filterInfo:EmployeeFilterInfo,
    onChangeQuery:any;
    onDomainSelect:any;
    onNext:any;
    onPrevious:any;
    onGenderSelect:any;
    onFilterReset:any;
}
const service = new EmployeeService();
const Search: React.FC<ISearchProps> = ({ 
    term,domainList,
    fetchResult,pageOffset,userPage,totalPages,totalResult,isFirstPage,
    isLastPage,gender,filterInfo,
    onChangeQuery,onDomainSelect,onNext,onPrevious,onGenderSelect,onFilterReset
 }) =>
    (
        <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Reactive Programming Using RxJs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
        <IonRow>
                <IonCol>
                    <EmployeeSearchBar term={term} onTextChange={onChangeQuery} placeHolderName="search by name"></EmployeeSearchBar>
                </IonCol>                   
            </IonRow>
            <IonRow>
              <IonCol size="3">
                  <FilterByGender defaultValue={gender} placeholder="Select one" onGenderSelect={onGenderSelect}></FilterByGender>
                  <EmployeeFilter employeeFilterInfo={filterInfo} onReset={onFilterReset}></EmployeeFilter>
                  <EmployeeDomain onDomainSelect={onDomainSelect} domainList={domainList}></EmployeeDomain>
              </IonCol>
              <IonCol size="9">                  
                   <Pagination
                    isDisableNext={isLastPage}
                    isDisablePrevious={isFirstPage}
                    totalPages={totalPages}
                    userPage={userPage}
                    totalResult={totalResult}
                    onNext={onNext}
                    onPrevious={onPrevious}
                  ></Pagination>  
                  <NoRecordFoundComponent isDisplay={(totalResult <= 0)} ></NoRecordFoundComponent>        
                  <EmployeeList employeeList={fetchResult}></EmployeeList>
                  <Pagination
                    isDisableNext={isLastPage}
                    isDisablePrevious={isFirstPage}
                    totalPages={totalPages}
                    userPage={userPage}
                    totalResult={totalResult}
                    onNext={onNext}
                    onPrevious={onPrevious}
                  ></Pagination>
              </IonCol>
            </IonRow>   
        </IonContent>
      </IonPage>   
    );
const term$ = service.searchEmployee$;
const fetchResult$ = service.employeeResult$;
const domainList$ = service.domain$;

const pageOffset$ = service.pageOffset$;
const totalResult$ = service.totalResult$;
const isFirstPage$ = service.pageOffset$.pipe(map(page => page === 0))
const totalPages$ = service.totalPages$;
const userPage$ = service.pageOffset$.pipe(map(page => page + 1));
const gender$ = service.gender$;
const isLastPage$ = combineLatest(userPage$,totalPages$).pipe(
    map(([currrentPage,totalPages])=>{
      return currrentPage === totalPages;
    })
);
const filterInfo$ = service.employeeFilterInfo$;

export default withObservableStream(
    combineLatest(
        term$,
        domainList$,       
        fetchResult$,
        pageOffset$,
        userPage$,
        totalPages$,
        totalResult$,
        isFirstPage$,
        isLastPage$,
        gender$,
        filterInfo$,
        (term,domainList,fetchResult,pageOffset,userPage,totalPages,totalResult,isFirstPage,isLastPage,gender,filterInfo) => ({        
            term,
            domainList,           
            fetchResult,
            pageOffset,
            userPage,
            totalPages,
            totalResult,
            isFirstPage,
            isLastPage,
            gender,
            filterInfo
        })
    ),
    {
        onChangeQuery: (value:string) => {
            service.setSearch(value);
        },
        onDomainSelect:(data:any)=>{ 
           service.setDomain(data);
        },
        onNext(value:number){
            service.setPageOffset(value);
        },
        onPrevious(value:number){
            service.setPageOffset(value);
        },
        onGenderSelect(value:string){
            service.setGender(value);
        },
        onFilterReset(){            
            service.setResetSearch();
        }
    },
    {
        term: term$.getValue(),
        domainList:[],
        fetchResult:[],
        pageOffset:pageOffset$.getValue(),
        userPage:0,
        totalResult:totalResult$.getValue(),
        isFirstPage:pageOffset$.getValue(),
        totalPages:0,
        isLastPage:false,
        gender:gender$.getValue(),
        filterInfo:null
    }
)(Search);

