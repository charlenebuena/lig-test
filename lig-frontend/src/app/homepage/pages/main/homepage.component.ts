import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, Params } from '@angular/router';

@Component({
    selector: '',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
    numbers = Array(10).fill(0).map((x,i)=>i);
    showSeeMore = true;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.queryParamsHandler(params);
        });
    }

    clickItem(index) {
        alert(`Navigating to item #${index+1} detail page...`);
        this.router.navigate(['/homepage/detail'], { queryParams: { 'id': index } });
    }

    queryParamsHandler(params: Params) {
        if (params['content'] && params['content'] === 'all') {
            this.numbers = Array(15).fill(0).map((x,i)=>i);
            this.showSeeMore = false;
        } else {
            this.numbers = Array(10).fill(0).map((x,i)=>i);
            this.showSeeMore = true;
        }
    }

    seeMoreClicked() {
        const navigationExtras: NavigationExtras = {
            queryParams: {
                content: 'all'
            },
            queryParamsHandling: 'merge'
        };
        this.router.navigate(['/homepage'], navigationExtras);
    }
}
