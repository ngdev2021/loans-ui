import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

Output('isShown')
Input('isShown')
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShown = false
  element = document.getElementById('userdropdown')
  btn = document.getElementById('btn')

  constructor(
    public sidenav: SidenavService) {
    }



 showToggle() {
    console.log(this.sidenav.isShown, 'from headerComponent');
    return this.sidenav.isShown = !this.sidenav.isShown
    // let profileDropDown = document.getElementById("userdropdown");
    // if (profileDropDown?.style.display === "none") {
    //   profileDropDown.style.display = "block";
    // } else {
    //   profileDropDown?.style.display
    // }
   }

  ngOnInit(): void {

  }




}
