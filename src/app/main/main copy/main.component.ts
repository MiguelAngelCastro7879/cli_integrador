import { Component, OnInit,  } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('rotate',[
      transition(':enter', [
        animate('1800000ms',
        keyframes([
          style({transform: 'rotate(0deg)', offset: '0'}),
          style({transform: 'rotate(200turn)', offset: '1'}),
        ])
        )
      ])
    ])
  ]
})
export class MainComponent2 implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
