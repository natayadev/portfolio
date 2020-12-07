import { Component } from '@angular/core';
@Component({
  selector: 'app-slidesroutes',
  templateUrl: './slidesroutes.component.html',
  styleUrls: ['./slidesroutes.component.css']
})
export class SlidesroutesComponent {
  config: any;
  fullpage_api: any;
  constructor() {
    // for more details on config options please visit fullPage.js docs
    this.config = {
      // fullpage options
      anchors: ['home', 'aboutme', 'skills', 'projects', 'contact' ],
      sectionsColor: ['#fffcfa', '#fffcfa', '#fffcfa', '#fffcfa', '#fffcfa' ],
      menu: '#menu',
      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }
  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }
}