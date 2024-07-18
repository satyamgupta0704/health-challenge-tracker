import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserDataService } from 'src/app/user-data.service';

@Component({
  selector: 'app-add-workout',
  templateUrl: './add-workout.component.html',
  styleUrls: ['./add-workout.component.css'],
  providers: [],
})
export class AddWorkoutComponent {
  username: any;
  time: any;
  workouts = [
    { name: 'Running', code: 'Running' },
    { name: 'Swimming', code: 'Swimming' },
    { name: 'Cycling', code: 'Cycling' },
    { name: 'Walking', code: 'Walking' },
  ];
  selectedWorkout = { name: 'Running', code: 'Running' };
  constructor(private userDataService: UserDataService, private messageService: MessageService) {}

  onSubmit() {
    this.userDataService.addWorkout(this.username, {
      type: this.selectedWorkout.name,
      minutes: this.time,
    });
    this.username = '';
    this.time = '';
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Workout added successfully',
    });
    
  }
}
