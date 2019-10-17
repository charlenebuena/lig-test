import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
    recommend = Array(3).fill(0).map((x,i)=>i);
    dummy = Array(3).fill(0).map((x,i)=>i);

    constructor(
        private router: Router
    ) {}

    onBannerClicked(index: number, type: string) {
        this.router.navigate(['/banner-page'], {queryParams: {
            'id': index,
            'type': type 
        }});
    }
}
