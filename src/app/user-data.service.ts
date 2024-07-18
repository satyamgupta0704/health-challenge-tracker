import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  userData: UserData[] = [];
  userDataChanged = new Subject<UserData[]>();

  
  getWorkouts() {
    return JSON.parse(localStorage.getItem('userData') || '[]');
  }

  addWorkout(username: string, workout: { type: string, minutes: number }) {
    this.userData = this.getWorkouts();
    const user = this.userData.find(user => user.name === username);
    if (user) {
      const workoutIndex = user.workouts.findIndex(w => w.type === workout.type);
      if (workoutIndex !== -1) {
        user.workouts[workoutIndex].minutes += workout.minutes;
      } else {
        user.workouts.push(workout);
      }
    } else {
      this.userData.push({
        id: this.userData.length + 1,
        name: username,
        workouts: [workout]
      });
    }
    localStorage.setItem('userData', JSON.stringify(this.userData));
    this.userDataChanged.next(this.userData);
  }

}

export interface Workout {
  type: string;
  minutes: number;
}

export interface UserData {
  id: number;
  name: string;
  workouts: Workout[];
}
