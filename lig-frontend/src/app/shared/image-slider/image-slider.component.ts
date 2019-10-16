/**
 * Title: Image Slider Component
 * Created by: Charlene Buena
 * Last updated by: Charlene Buena
 * Last updated on: October 16, 2019
 */
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit{
    activeIndex = null;
    images = [
        'url(../../../assets/trees.jpeg)',
        'url(../../../assets/sea.jpeg)',
        'url(../../../assets/umbrella.jpg)'
    ];

    ngOnInit() {
        this.activeIndex = 0;
    }

    arrowClicked(arrow: string) {
        switch(arrow) {
            case 'left': this.activeIndex -= this.activeIndex === 0 ? -2 : 1; break;
            case 'right': this.activeIndex += this.activeIndex == 2 ? -2 : 1; break;
        }
    }

    pagerClicked(index: number) {
        this.activeIndex = index;
    }


}
