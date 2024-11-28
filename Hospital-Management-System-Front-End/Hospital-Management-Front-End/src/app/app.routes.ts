import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './page/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';

export const routes: Routes = [
    {
        path:"appointment",
        component:AppointmentManageComponent
    },
    {
        path:"patient",
        component:PatientManageComponent
    }
];
