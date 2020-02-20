import { Routes,RouterModule } from '@angular/router';
import {LoginDisplayComponent} from './login/loginDisplay/login-display/login-display.component';



const arr:Routes=[
    {path:'',component:LoginDisplayComponent}
    // {path:'**',component:PageNotFoundComponent}
]
export const routingArr=RouterModule.forRoot(arr);
