import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { ManagementComponent } from './management/management.component';

const appRoutes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: 'management', component: ManagementComponent },
    { path: '', component: DashboardComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,

            // { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }