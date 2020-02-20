import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardActions, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginDisplayComponent } from './login/loginDisplay/login-display/login-display.component';
import { routingArr } from './app.routing';
import { NavBarComponent } from './navbar/nav-bar/nav-bar.component';
import { VehicleAssignedDisplayComponent } from './vehicleAssigned/vehicleAssignedDisplay/vehicle-assigned-display/vehicle-assigned-display.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginDisplayComponent,
    NavBarComponent,
    VehicleAssignedDisplayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardActions,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatRadioModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatDialogModule,
    LayoutModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    routingArr
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
