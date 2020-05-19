import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  // adds padding to the top of the document, so the content is below the header
  @HostBinding('class.bx--header') headerClass = true;
  user: String;
  constructor() { }

  ngOnInit() {
    let user = JSON.parse(sessionStorage.getItem('user'))
    this.user = user.username;
  }

}
