import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../service/alertify/alertify.service';
@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    loggedinUser!: string;
    constructor(private alertify: AlertifyService) { }

    ngOnInit() {
    }

    loggedin() {

        return localStorage.getItem('token') ;
    }

    onLogout() {
        localStorage.removeItem('token');
    }

}
