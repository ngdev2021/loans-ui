import { Injectable, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { SidebarComponent } from '../sidebar/sidebar.component';
// @Input('isShown')
@Injectable({
  providedIn: 'root'
})
export class SidenavService {
private toggle = new Subject<boolean>();
public toggle$ = this.toggle.asObservable();

  isShown: boolean = true ; // hidden by default


  constructor() { }

  toggleShow() {
    console.log('inside service', this.isShown )
     this.isShown = !this.isShown;
    }

}
