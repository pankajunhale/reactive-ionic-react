import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import {EmployeeContainer} from './EmployeeContainer';

const Home: React.FC = (props:any) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.        
        <EmployeeContainer></EmployeeContainer>
      </IonContent>
    </IonPage>
  );
};

export default Home;
