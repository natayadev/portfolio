import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt, faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faDribbble } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  faGithubAlt = faGithubAlt;
  faDribbble = faDribbble;
  faNewspaper = faNewspaper;
  faExternalLinkAlt = faExternalLinkAlt;
  constructor() { }
  ngOnInit(): void {
  }

}
