import { Routes,RouterModule } from '@angular/router';
import {LoginDisplayComponent} from './login/loginDisplay/login-display/login-display.component';
import { UserauthguardService } from './UserauthguardService';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { VehicleAssignedDisplayComponent } from './vehicleAssigned/vehicleAssignedDisplay/vehicle-assigned-display/vehicle-assigned-display.component';
import { VehicleAssignedEditComponent } from './vehicleAssigned/vehicleAssignedEdit/vehicle-assigned-edit/vehicle-assigned-edit.component';
import { MyprofileDisplayComponent } from './myprofile/myprofileDsiplay/myprofile-display/myprofile-display.component';
import { ProfileEditComponent } from './myprofile/myprofileEdit/ProfileEdit/profile-edit/profile-edit.component';
import { ImageEditComponent } from './myprofile/myprofileEdit/ImageEdit/image-edit/image-edit.component';
import { ChangePasswordComponent } from './changePassword/change-password/change-password.component';



const arr:Routes=[
    {path:'',component:LoginDisplayComponent},
    {
      path:'nav',canActivate:[UserauthguardService],component:NavBarComponent,children:[
        {path:'vehicleAssigned',component:VehicleAssignedDisplayComponent},
        {path:'vehicleAssignedEdit/:worker_id',component:VehicleAssignedEditComponent},
        {path:'Myprofile',component:MyprofileDisplayComponent},
        {path:'editprofile/:worker_id',component:ProfileEditComponent},
        {path:'editImage/:worker_id',component:ImageEditComponent},
        {path:'changePassword',component:ChangePasswordComponent}
      ]}
      // {path:'**',component:PageNotFoundComponent}

]
export const routingArr=RouterModule.forRoot(arr);
