import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    public snackBar: MatSnackBar, private taskServiceService: TaskServiceService) { }

    logInForm = this.fb.group({
      UserName: [''],
      Password: ['']
  });

  addTaskForm = this.fb.group({
    content: ['']
  });
  token: any;
  tempUserName: any;
  logginSucces: any;
  tasks: any;
  addNewTask: any;
  login: any;
  taskInfoDone: any;
  active: any;

  logIn () {
    if (!this.logInForm.valid) {
      this.snackBar.open('Please fill required filds.', 'OK', {
        duration: 4000,
        });
        return;
    }
    this.taskServiceService.LogInFormComponent(this.logInForm.value).subscribe( res => {
      if (res.token) {this.token = res.token;
        this.snackBar.open('Success logIn.', 'OK', {
        duration: 4000,
        });
        this.active = true;
        this.logginSucces = false;
        this.tempUserName = this.logInForm.value.UserName;
        this.logInForm.reset();
        this.getTasks();
    }
    if (!res.token) {
      this.snackBar.open('Wrong username or password.', 'OK', {
        duration: 4000,
        });
    }
  });
    }

  logOut () {
    this.taskServiceService.LogOut(this.token).subscribe( res => {
      this.logginSucces = true;
      this.addNewTask = false;
      this.active = false;
    });
  }

  getTasks () {
    this.taskServiceService.getTasks(this.token).subscribe( res => {
      if (res) {this.tasks = res.todos;
      for (let i = 0; i < this.tasks.length; i++) {
        if (this.tasks[i].done === true) {
          this.tasks[i].Collor = 'green';
        }
      }
    }}, error => {
      if (error) {
      }
    });
  }

  addNew () {
    this.addNewTask = true;
  }

  saveTask() {
    this.taskServiceService.addTaskToList(this.token, this.addTaskForm.value).subscribe( res => {
      if (res) {
        this.snackBar.open('Success add new.', 'OK', {
        duration: 4000,
        });
        this.addTaskForm.reset();
        this.addNewTask = false;
        this.getTasks();
    }}, error => {
        if (error) {
        }
    });
  }

  doneTask (id) {
    this.taskServiceService.taskDone (this.token, id, this.taskInfoDone).subscribe( res => {
      this.snackBar.open('Success changed status.', 'OK', {
        duration: 4000,
        });
        this.getTasks();
    });
  }

  deleteTask (id) {
    this.taskServiceService.deleteTask (this.token, id).subscribe( res => {
      this.snackBar.open('Success delete.', 'OK', {
        duration: 4000,
        });
        this.getTasks();
    });
  }

  ngOnInit() {
    this.logginSucces = true;
    this.addNewTask = false;
    this.taskInfoDone = {'done': true};
    this.active = false;
  }
}
