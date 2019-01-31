import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-string-date',
  templateUrl: './string-date.component.html',
  styleUrls: ['./string-date.component.css']
})
export class StringDateComponent implements OnInit {


  tempRes: any;
  someVariable: any;
  d: any;
  router: any;

  constructor(private fb: FormBuilder, public snackBar: MatSnackBar) { }

  stringForReverse = this.fb.group({
    String: ['']
  });

  numberForDay = this.fb.group({
    Day: ['']
  });

  getReverseString() {
    if (this.stringForReverse.value.String === '') {
      this.snackBar.open('Morate uneti vrednost', 'OK', {
        duration: 4000,
      });
      return;
  }
    this.tempRes = this.stringForReverse.value.String.split('').reverse().join('');
  }

  getNumberOfWords() {
    if (this.stringForReverse.value.String === '') {
      this.snackBar.open('Morate uneti vrednost', 'OK', {
        duration: 4000,
      });
      return;
  }
    this.tempRes = 0;
    this.stringForReverse.value.String = this.stringForReverse.value.String.replace(/[!|@|#|,|.|%|&|;]/g, ' ');
    this.someVariable = this.stringForReverse.value.String.split(' ');
    for (let i = 0; i < this.someVariable.length; i++) {
        if (this.someVariable[i] !== '') {
          this.tempRes += 1;
        }
    }
  }

  getNewDate() {
    if (this.numberForDay.value.Day === '') {
      this.snackBar.open('Morate uneti vrednost', 'OK', {
        duration: 4000,
      });
      return;
  }
  this.d = new Date();
  this.d.setDate(this.d.getDate() + Number(this.numberForDay.value.Day));
  this.tempRes = this.d;
  }

  ngOnInit() {
  }

}
