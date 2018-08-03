import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
// For MDB Angular Free
import { ModalModule, WavesModule, InputsModule } from 'angular-bootstrap-md'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public api:ApiService, public mdbModal: ModalModule) { }

  ngOnInit() {
    console.log(this.api.UserLoggedIn())
  }

}
