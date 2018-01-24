import { Component } from '@angular/core';
import {routerAnimation } from './animations';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  useAnimation
} from '@angular/animations';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    './appCss/style.css',
    './appCss/styleFooter.css',
    './appCss/styleHeader.css'],
    animations: [
      trigger('routerAnimations', [
        transition('*<=>*', [
          useAnimation(routerAnimation)
        ])
      ])
    ]
  })



export class AppComponent {
  title = 'app';

  prepRouteState(outlet: any) {
    const animation = outlet.activatedRouteData['animation'] || {};
    return animation['value'] || null;
  }
}

