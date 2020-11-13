import { Component, OnInit } from '@angular/core';
import {Person} from '../../model/person.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public people: Person[] = [];

  constructor() { }

  ngOnInit(): void {
    const user: Person = {
      firstName: 'Jan',
      lastName: 'Kowalski'
    };
    const userTwo: Person = {
      firstName: 'Adam',
      lastName: 'Nowak'
    };
    this.people.push(user, userTwo);
  }

}
