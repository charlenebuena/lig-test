import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit{
    title = 'lig-frontend';
    showScrollTop = false;

    scrollEvent() {

    }

    @HostListener('window:scroll', ['$event'])

    scrollHandler() {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            this.showScrollTop = true;
        }
    }

    scrolltotop() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                // how far to scroll on each step
                window.scrollTo(0, pos - 50);
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

    ngOnInit() {

    }
}
