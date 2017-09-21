import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screen-1',
  templateUrl: './screen-1.component.html',
  styleUrls: ['../app.component.css']
})
export class Screen1Component implements OnInit {

  constructor() { }

  ngOnInit() { }

  startButton(e) {
    console.log('Started...', e)
  }

}
