import { Component, OnInit } from '@angular/core';

import { slideInOutAnimation } from '../router.animations';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],

})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
