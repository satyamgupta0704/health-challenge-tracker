import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AddWorkoutComponent } from './workout/add-workout/add-workout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ChartModule } from 'primeng/chart';
import { WorkoutProgressComponent } from './workout/workout-progress/workout-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddWorkoutComponent,
    WorkoutProgressComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    DropdownModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule,
    TableModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastModule,
    ChartModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
