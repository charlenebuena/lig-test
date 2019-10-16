/**
 * Title: Root Component
 * Created by: Charlene Buena
 * Last updated by: Charlene Buena
 * Last updated on: October 15, 2019
 */
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    title = 'lig-frontend';

    scrollEvent() {
        console.log('scroll');
    }

    @HostListener('window:scroll', ['$event'])

    scrollHandler(event) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            // you're at the bottom of the page
            console.log('bottom');
        }
    }

    scrolltotop() {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 50); // how far to scroll on each step
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }

    ngOnInit() {

    }
}


/**
 * SCROLL TO TOP
 * https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top
 */