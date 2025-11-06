import { Routes } from '@angular/router';
import { AppointmentManageComponent } from './page/appointment-manage/appointment-manage.component';
import { PatientManageComponent } from './page/patient-manage/patient-manage.component';
import { LoginComponent } from './page/login/login.component';
import { DashBoardPageComponent } from './page/dash-board-page/dash-board-page.component';
import { AddPatientComponent } from './page/add-patient/add-patient.component';
import { PatientRootComponent } from './page/patient-root/patient-root.component';
import { DashPageComponent } from './page/dash-page/dash-page.component';
import { AddAppointmentComponent } from './page/add-appointment/add-appointment.component';
import { AppointmentRootComponent } from './page/appointment-root/appointment-root.component';
import { ReportRootComponent } from './page/report-root/report-root.component';
import { AddReportComponent } from './page/add-report/add-report.component';
import { ManageReportComponent } from './page/manage-report/manage-report.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: "dashboard",
    component: DashBoardPageComponent,
    children: [
      {
        path:"",
        component:DashPageComponent
      },
      {
        path: "appointment",
        component: AppointmentRootComponent,
        children:[
          {
            path:"",
            component:AppointmentManageComponent
          },
          {
            path:"add-appointment",
            component:AddAppointmentComponent
          },
          {
            path:"view-all",
            component:AppointmentManageComponent
          }
        ]
      },
      {
        path: "patient",
        component: PatientRootComponent,
        children:[
          {
            path:"",
            component:PatientManageComponent
          },
          {
            path: "add-patient",
            component: AddPatientComponent
          },
          {
            path:"manage-all",
            component: PatientManageComponent
          }
        ]
      },
      {
        path:"report",
        component:ReportRootComponent,
        children:[
          {
            path:"",
            component:ManageReportComponent
          },
          {
            path:"add-report",
            component:AddReportComponent
          },
          {
            path:"view-all",
            component:ManageReportComponent
          }
        ]
      }

    ]
  }
];
