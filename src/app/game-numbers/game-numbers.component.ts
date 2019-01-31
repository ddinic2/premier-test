import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import { MatSnackBar } from '@angular/material';
import { NumberList } from '../models';

@Component({
  selector: 'app-game-numbers',
  templateUrl: './game-numbers.component.html',
  styleUrls: ['./game-numbers.component.css']
})
export class GameNumbersComponent implements OnInit {

  listOfNumbers: any;
  listOfPick: NumberList[];
  tempList: NumberList[];

  constructor(private service: TaskServiceService, public snackBar: MatSnackBar) { }

  pickNumber(val) {
    if (this.listOfPick && this.listOfPick.length === 10) {
      this.snackBar.open('Mozete selektovati najvise deset brojeva', 'OK', {
        duration: 4000,
      });
      return;
    } if (this.listOfPick.length < 10) {
      for (let i = 0; i < this.listOfPick.length; i++) {
        if (this.listOfPick[i].number === this.listOfNumbers[val].number) {
          this.snackBar.open('Vec ste odabrali ovaj broj', 'OK', {
            duration: 4000,
          });
          return;
        }
      }
      this.listOfPick.push(this.listOfNumbers[val]);
      this.listOfNumbers[val].color = this.listOfNumbers[val].color + ' ' + 'active';
    }
  }

  createListOfPick(list) {
    this.listOfPick = [];
    for (let i = 0; i < list.length; i++) {
      if (this.listOfPick.length < 6) {
        const x = this.listOfPick.some(r => [list[i]].indexOf(r) >= 0);
        if (!x) {
          this.listOfPick.push(list[i]);
        }
      }
    }
    this.addClassForPicked(this.listOfPick);
  }

  addClassForPicked(listFromRandom) {
    for (let i = 0; i < listFromRandom.length; i++) {
       this.listOfNumbers.find(obj => {
        if (obj.number === listFromRandom[i].number) {
          obj.color +=  ' ' + 'active';
        }
      });
    }
  }

  getRandom() {
    this.reset();
    this.tempList = [];
    for ( let k = 0; k < 20; k++ ) {
      const chance = Math.floor(Math.random() * 48);
      this.tempList.push(this.listOfNumbers[chance]);
    }
    this.createListOfPick(this.tempList);
  }

  getWithColor(col) {
    this.reset();
    switch (col) {
      case 'red':
        for (let i = 0; i < this.listOfNumbers.length; i++) {
          if (this.listOfNumbers[i].color === 'red') {
            this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
            this.listOfPick.push(this.listOfNumbers[i]);
          }
        }
      break;
      case 'green':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'green') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'lightBlue':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'lightBlue') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'blue':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'blue') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'violet':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'violet') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'pink':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'pink') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'orange':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'orange') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
      case 'yellow':
      for (let i = 0; i < this.listOfNumbers.length; i++) {
        if (this.listOfNumbers[i].color === 'yellow') {
          this.listOfNumbers[i].color = this.listOfNumbers[i].color + ' ' + 'active';
          this.listOfPick.push(this.listOfNumbers[i]);
        }
      }
      break;
    }
  }

  reset() {
    this.listOfPick = [];
    for (let i = 0; i < this.listOfNumbers.length; i++) {
      this.listOfNumbers[i].color = this.listOfNumbers[i].color.replace(' active', '');
    }
  }


  ngOnInit() {
    this.tempList = [];
    this.listOfPick = [];
    this.listOfNumbers = this.service.getNumbers();
  }

}
