import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  // public isShown: boolean = true ; // hidden by default


public dashboardOptions = [
{
  name: "Dashboard",
  route: "dashboard",
  icon: 'width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" color="#000"><path d="M0 0h24v24H0z" fill="none"></path><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path>',
  active: true,
},
{
  name: "Loans",
  route: "loans"

},
{
  name: "Customers",
  route: "customers"

},
{
  name: "Payments",
  route: "payments"

},
{
  name: "Invoices",
  route: "invoices"

},
{
  name: "Loan Types",
  route: "loans"

},
{
  name: "Reports",
  route: "reports"

},
{
  name: "Activity",
  route: "activity"

},
{
  name: "Settings",
  route: "settings"

},

]


  constructor(public sideService: SidenavService) { }



  // toggleShow() {
  //   console.log("from sidebar", this.isShown)
  // this.isShown = ! this.isShown;
  // }
  ngOnInit(): void {
  }


}
