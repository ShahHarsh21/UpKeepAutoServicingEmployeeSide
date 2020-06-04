import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatTableDataSource } from "@angular/material/table";
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginDisplayComponent } from './login/loginDisplay/login-display/login-display.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import {  MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { VehicleAssignedDisplayComponent } from './vehicleAssigned/vehicleAssignedDisplay/vehicle-assigned-display/vehicle-assigned-display.component';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { LayoutModule } from '@angular/cdk/layout';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { routingArr } from './app.routing';
import { VehicleAssignedEditComponent } from './vehicleAssigned/vehicleAssignedEdit/vehicle-assigned-edit/vehicle-assigned-edit.component';
import { MyprofileDisplayComponent } from './myprofile/myprofileDsiplay/myprofile-display/myprofile-display.component';
import { MyprofileEditComponent } from './myprofile/myprofileEdit/myprofile-edit/myprofile-edit.component';
import { VehicleViewmoreComponent } from './vehicleAssigned/vehicleViewmore/vehicle-viewmore/vehicle-viewmore.component';
import { ImageEditComponent } from './myprofile/myprofileEdit/ImageEdit/image-edit/image-edit.component';
import { ProfileEditComponent } from './myprofile/myprofileEdit/ProfileEdit/profile-edit/profile-edit.component';
import { ChangePasswordComponent } from './changePassword/change-password/change-password.component';
import { AddRequirmentsComponent } from './vehicleAssigned/Requirments/add-requirments/add-requirments.component';
import { ForgotPasswordComponent } from './changepassword/fogotPassword/forgot-password/forgot-password.component';
import { LeaveApplicationComponent } from './Leave/leave-application/leave-application.component';
import { PastLeaveComponent } from './leave/past/past-leave/past-leave.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginDisplayComponent,
    NavBarComponent,
    VehicleAssignedDisplayComponent,
    VehicleAssignedEditComponent,
    MyprofileDisplayComponent,
    MyprofileEditComponent,
    VehicleViewmoreComponent,
    ImageEditComponent,
    ProfileEditComponent,
    ChangePasswordComponent,
    AddRequirmentsComponent,
    ForgotPasswordComponent,
    LeaveApplicationComponent,
    PastLeaveComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    routingArr,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatRadioModule,
    MatSidenavModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    MatListModule,
    MatGridListModule,
  ],
  entryComponents: [
      VehicleViewmoreComponent
   ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
