import { Component, OnInit } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faDribbble, faDev } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faDribbble = faDribbble;
  faDev = faDev;
  constructor() { }
  ngOnInit(): void {
  }
}
