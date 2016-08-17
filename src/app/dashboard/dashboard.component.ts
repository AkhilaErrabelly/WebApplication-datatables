import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: '/app/dashboard/dashboard.component.html',
  styleUrls: ['/app/dashboard/dashboard.component.css'],
  directives: [ROUTER_DIRECTIVES]
})

export class DashboardComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      console.log("click on #menu-toggle");
        //e.preventDefault();
        e.stopPropagation();

        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        //e.preventDefault();
        e.stopPropagation();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
 }

logout(){
  window.localStorage.removeItem('auth_key');
  this.router.navigate(['/login']);
}

}
