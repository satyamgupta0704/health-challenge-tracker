import { Component } from '@angular/core';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private userDataService: UserDataService) {}
  ngOnInit() {
    if (!localStorage.getItem('userData')) {
      localStorage.setItem(
        'userData',
        JSON.stringify([
          {
            id: 1,
            name: 'John Doe',
            workouts: [
              { type: 'Running', minutes: 30 },
              { type: 'Cycling', minutes: 45 },
            ],
          },
          {
            id: 2,
            name: 'Jane Smith',
            workouts: [
              { type: 'Swimming', minutes: 60 },
              { type: 'Running', minutes: 20 },
            ],
          },
          {
            id: 3,
            name: 'Mike Johnson',
            workouts: [
              { type: 'Yoga', minutes: 50 },
              { type: 'Cycling', minutes: 40 },
            ],
          },
        ])
      );
    }
    this.userDataService.userDataChanged.next(JSON.parse(localStorage.getItem('userData') || '[]'));
  }
}
