import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { UserDataService, UserData } from 'src/app/user-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  @ViewChild('dt1') dt1: Table | undefined;
  workouts = [
    "Running", "Cycling", "Swimming", "Yoga", "Pilates", "Walking"
  ];
  userData: UserData[] = []; 
  constructor(private userDataService: UserDataService) { }
  ngOnInit(): void {
    this.userDataService.userDataChanged.subscribe((userData: UserData[]) => {
      this.userData = userData;
    }
    );
    this.userData = this.userDataService.getWorkouts();
  }
  selectedWorkout: string | null = null;

    onWorkoutFilterChange(selectedValue: any) {
        this.selectedWorkout = selectedValue;
    }

  getWorkoutTypes(workouts: { type: string, minutes: number }[]): string{
    return workouts.map(workout => workout.type).join(', ');
  }
  getWorkoutMinutes(workouts: { type: string, minutes: number }[]): number {
    return workouts.reduce((total, workout) => total + workout.minutes, 0);
  }
  filterGlobal(event: Event) {
    const inputElement = event.target as HTMLInputElement;    
    if (inputElement && inputElement.value) {
        this.dt1!.filterGlobal(inputElement.value, 'contains');
    }
    else {
        this.dt1!.filterGlobal('', 'contains');
    }
  }
  filterWorkout(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.value) {
        this.dt1!.filterGlobal(inputElement.value, 'contains');
    }
  }
  filterWorkoutType(workouts: { type: string, minutes: number }[]) {
    return !this.selectedWorkout || workouts.map(workout => workout.type).includes(this.selectedWorkout);
  }
  clearFilters() {
    this.selectedWorkout = null;
}
}
