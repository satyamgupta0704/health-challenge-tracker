import { Component, OnInit } from '@angular/core';
import { UserData, UserDataService, Workout } from 'src/app/user-data.service';

@Component({
  selector: 'app-workout-progress',
  templateUrl: './workout-progress.component.html',
  styleUrls: ['./workout-progress.component.css']
})
export class WorkoutProgressComponent implements OnInit {
  userData: UserData[] = JSON.parse(localStorage.getItem('userData') || '[]');
  chartData: any;
  chartOptions: any;
  selectedUser: any; 

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.userDataChanged.subscribe((userData: UserData[]) => {
      this.userData = userData;
    }
  );
  this.selectedUser = this.userData[0];
  this.onSelectUser(this.selectedUser);
  }

  initializeChart() {

    this.chartData = {
      labels: [],
      datasets: []
    };
    
    this.chartOptions = {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Minutes'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Workout Types'
          }
        }
      }
    };
  }

  onSelectUser(user: UserData) {
    this.initializeChart()
    this.selectedUser = user;

    this.chartData.labels = this.selectedUser.workouts.map((workout: Workout) => workout.type);
    this.chartData.datasets = [
      {
        label: 'Workout Minutes',
        data: this.selectedUser.workouts.map((workout:Workout) => workout.minutes),
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(231, 233, 237, 0.2)'
        ],
        borderColor: [
          'rgb(255, 159, 64)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(255, 205, 86)',
          'rgb(231, 233, 237)'
        ],
        borderWidth: 1
      }
    ];
  }
}
