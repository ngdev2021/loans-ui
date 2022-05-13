import { Component, Input, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidenavService } from './services/sidenav.service';
import { SidebarComponent } from './sidebar/sidebar.component';
Input('isShown')
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 public isShown: boolean = true ; // hidden by default


  constructor(private toggleService: SidenavService) {
  }

  toggleShow() {
    console.log(this.toggleService.isShown, 'from appComponent')
     this.toggleService.isShown = !this.toggleService.isShown;
    }

}
