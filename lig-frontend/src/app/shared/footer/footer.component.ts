import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

    constructor(
        private router: Router
    ) {}
    
    linkClicked(link) {
        this.router.navigate([link]);
    } 
}
