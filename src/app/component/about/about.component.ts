import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public stringVariable = 'hello';
  public stringVariableTwo = 'HELLO';
  constructor() { }

  ngOnInit(): void {
  }

}
