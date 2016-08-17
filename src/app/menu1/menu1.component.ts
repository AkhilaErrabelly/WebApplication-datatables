import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'menu1-item',
    templateUrl: '/app/menu1/menu1.component.html',
    styleUrls: ['/app/menu1/menu1.component.css'],
    directives: [ROUTER_DIRECTIVES]
})
export class Menu1Component{
     constructor(private router: Router) {}
}

