import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../services/user.service";
import { Location } from '@angular/common';
//import { identity } from 'rxjs';

@Component({
    selector: 'nav-p-admin',
    templateUrl: './nav-p-admin.component.html',
    providers: [UserService]
})

export class NavAdminComponent implements OnInit {
    @Input() identity;

    constructor( public _router: Router, public _location: Location ){

    }

    ngOnInit() {
        
    }

  }
